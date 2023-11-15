
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Objeto } from './Objeto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateObjetoDto } from './dto/update-objeto.dto';


@Injectable()
export class ObjetoService {
  constructor(
    @InjectRepository(Objeto)
    private readonly ObjetoRepository: Repository<Objeto>,
  ) {}

  async findAll(): Promise<Objeto[]> {
    return await this.ObjetoRepository.find();
  }
  
  findOne(id: number) {
    return this.ObjetoRepository.findOneBy({id});
  }

  async create(objeto: Objeto): Promise<Objeto> {
    return this.ObjetoRepository.save(objeto);

  }
  async update(id: number, updateObjetoDto: UpdateObjetoDto) {
    return await this.ObjetoRepository.update(id, updateObjetoDto);
  }

  async remove(id: number) {
    return await this.ObjetoRepository.softDelete(id);
  }
}