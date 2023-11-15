import { Controller, Get, Post, Patch, Delete, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { ObjetoService } from './Objeto/Objeto.service';
import { Objeto } from './Objeto/Objeto.entity';
import { UpdateObjetoDto} from './Objeto/dto/update-objeto.dto';
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

  @Get(':id')
  getById(@Param('id') id: string): string {
    return this.appService.getById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateobjeatoDto:UpdateObjetoDto) {
  return this.objetoService.update(id, updateobjeatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
  return this.objetoService.remove(id);
  }
}

