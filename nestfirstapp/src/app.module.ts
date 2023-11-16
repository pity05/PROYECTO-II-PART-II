import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TasksModule } from './tasks/tasks.module';
import { ObjetoModule } from './Objeto/Objeto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Objeto } from './Objeto/Objeto.entity';
import { ObjetoService } from './Objeto/Objeto.service';


// import { databaseProviders } from './Objeto/Database.Provider';
// import { DatabaseModule } from './Objeto/DatabaseModule';

@Module({
  // imports: [TasksModule],
  imports: [TypeOrmModule.forFeature([Objeto]), TypeOrmModule.forRoot({type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'prsc0528',
  database: 'pity',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'history',})],
  controllers: [AppController],
  providers: [AppService, ObjetoModule, ObjetoService],
  
})
export class AppModule {}
