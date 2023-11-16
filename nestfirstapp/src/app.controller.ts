import { Controller, Get, Post, Patch, Delete, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { ObjetoService } from './Objeto/Objeto.service';
import { Objeto } from './Objeto/Objeto.entity';
import { UpdateObjetoDto} from './Objeto/dto/update-objeto.dto';
import { Res } from '@nestjs/common';

@Controller('Api')
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

  @Patch('/update/:id')  // Agrega el parámetro de ruta ":id"
  update(@Param('id') id: number, @Body() updateobjeatoDto: UpdateObjetoDto) {
    return this.objetoService.update(id, updateobjeatoDto);
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: number, @Res() res): Promise<void> {
    // Lógica para eliminar el objeto
    await this.objetoService.remove(id);
    res.json({ message: 'Objeto eliminado correctamente' });
  }
  
}

