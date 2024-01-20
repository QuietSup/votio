import { TypeOrmModule } from '@nestjs/typeorm';

export const dbConfigModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  entities: [],
  database: process.env.DB_NAME,
  synchronize: true,
  // logging: true,
});
