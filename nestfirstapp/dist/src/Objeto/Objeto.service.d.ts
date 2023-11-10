import { Repository } from 'typeorm';
import { Objeto } from './Objeto.entity';
export declare class ObjetoService {
    private readonly ObjetoRepository;
    constructor(ObjetoRepository: Repository<Objeto>);
    findAll(): Promise<Objeto[]>;
    create(task: Objeto): Promise<Objeto>;
}
