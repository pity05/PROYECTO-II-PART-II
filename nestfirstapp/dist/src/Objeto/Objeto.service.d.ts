import { Repository } from 'typeorm';
import { Objeto } from './Objeto.entity';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
export declare class ObjetoService {
    private readonly ObjetoRepository;
    constructor(ObjetoRepository: Repository<Objeto>);
    findAll(): Promise<Objeto[]>;
    findOne(id: number): Promise<Objeto>;
    create(objeto: Objeto): Promise<Objeto>;
    update(id: number, updateObjetoDto: UpdateObjetoDto): Promise<void>;
    remove(id: number): Promise<void>;
}
