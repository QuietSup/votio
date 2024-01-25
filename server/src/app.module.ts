import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfigModule } from './config/db.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SurveysModule } from './modules/surveys/surveys.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `.env.${process.env.NODE_ENV}`,
      envFilePath: `.env.development`,
    }),
    dbConfigModule,
    UsersModule,
    AuthModule,
    SurveysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
