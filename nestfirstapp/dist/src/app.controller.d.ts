import { AppService } from './app.service';
import { ObjetoService } from './Objeto/Objeto.service';
import { Objeto } from './Objeto/Objeto.entity';
import { UpdateObjetoDto } from './Objeto/dto/update-objeto.dto';
export declare class AppController {
    private readonly appService;
    private readonly objetoService;
    constructor(appService: AppService, objetoService: ObjetoService);
    getHello(): Promise<Objeto[]>;
    InsertData(datos: Objeto): Promise<Objeto>;
    getById(id: string): string;
    update(id: number, updateobjeatoDto: UpdateObjetoDto): Promise<void>;
    remove(id: number, res: any): Promise<void>;
}
