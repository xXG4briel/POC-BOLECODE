import { BolecodeService } from './bolecode.service';
import { BolecodeController } from './bolecode.controller';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  imports: [HttpModule],
  controllers: [BolecodeController],
  providers: [BolecodeService, ConfigService, UtilsService],
})
export class BolecodeModule {}
