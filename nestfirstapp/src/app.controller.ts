import { Controller, Get, Post , Body,} from '@nestjs/common';
import { AppService } from './app.service';
import { ObjetoService } from './Objeto/Objeto.service';
import { Objeto } from './Objeto/Objeto.entity';

@Controller('/Api')


export class AppController {
  constructor(private readonly appService: AppService, private readonly objetoService: ObjetoService ) {}

  @Get()
  getHello(): Promise<Objeto[]> {
   return this.objetoService.findAll();
  }

  @Post('/create')
  InsertData(@Body() datos : Objeto) : Promise<Objeto> {

    return this.objetoService.create(datos);
  }
}

