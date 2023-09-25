import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { Cache } from 'cache-manager';
import { catchError, map } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  token(body) {
    return this.httpService
      .post('https://devportal.itau.com.br/api/jwt', body)
      .pipe(
        catchError((error: AxiosError) => {
          const res: any = error.response;

          this.logger.error(res.data);

          throw new HttpException(`${res.data.error}`, res.status);
        }),
        map(async (response) => {
          await this.cacheManager.set('token', response.data.access_token, 0);

          this.logger.log('Token gerado com sucesso !');

          return response.data;
        }),
      );
  }
}
