import {
  Injectable,
  Inject,
  UnauthorizedException,
  Logger,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Bolecode } from 'src/models/bolecode/bolecode';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, map } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class BolecodeService {
  private readonly logger = new Logger(Bolecode.name);
  constructor(
    private httpService: HttpService,
    private utils: UtilsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async boletos_pix(
    boleto: Bolecode,
  ): Promise<Observable<AxiosResponse<any, any>>> {
    const token = await this.cacheManager.get<string>('token');

    if (!token) {
      throw new UnauthorizedException('É necessário gerar um token !');
    }

    this.logger.log('Token encontrado !');

    const API_URL =
      'https://devportal.itau.com.br/sandboxapi/itau-ep9-gtw-pix-recebimentos-conciliacoes-v2-ext/v2/boletos_pix';

    return this.httpService
      .post(API_URL, boleto, {
        headers: {
          'x-sandbox-token': token,
        },
      })
      .pipe(
        map((result) => {
          const { data } = result.data;

          this.utils
            .base64ToImg(data.dados_qrcode.base64)
            .then(() => {
              this.logger.log('Arquivo gerado com sucesso');
            })
            .catch((err) => {
              this.logger.error(err);
              throw new InternalServerErrorException(
                'Não foi possível gerar o Bolecode',
              );
            });

          return result.data;
        }),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            'Não foi possível gerar o BOLECODE',
            error.status,
          );
        }),
      );
  }

  getBoletoAleatorio() {
    return this.utils.getBoletoAleatorio();
  }
}
