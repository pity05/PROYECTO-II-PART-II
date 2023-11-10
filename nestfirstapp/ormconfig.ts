
import { DataSource } from "typeorm";

 export const AppDataSource = new DataSource({type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'ccbfc13e-c31d-42ce-8939-3c7e63ed5417',
  database: 'proyect',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'history',});