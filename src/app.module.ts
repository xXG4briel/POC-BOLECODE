import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BolecodeModule } from './bolecode/bolecode.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [
    BolecodeModule,
    AuthModule,
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
