import { AppService } from './app.service';
import { ObjetoService } from './Objeto/Objeto.service';
import { Objeto } from './Objeto/Objeto.entity';
export declare class AppController {
    private readonly appService;
    private readonly objetoService;
    constructor(appService: AppService, objetoService: ObjetoService);
    getHello(): Promise<Objeto[]>;
    InsertData(datos: Objeto): Promise<Objeto>;
}
