import { BolecodeService } from './bolecode.service';
import { Controller, Post } from '@nestjs/common';

@Controller('bolecode')
export class BolecodeController {
  constructor(private bolecodeService: BolecodeService) {}

  @Post('boletos_pix')
  async boletos_pix() {
    const bolecode = this.bolecodeService.getBoletoAleatorio();

    const result = await this.bolecodeService.boletos_pix(bolecode);

    return result;
  }
}
