
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Objeto } from './Objeto.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ObjetoService {
  constructor(
    @InjectRepository(Objeto)
    private readonly ObjetoRepository: Repository<Objeto>,
  ) {}



  async findAll(): Promise<Objeto[]> {
    return this.ObjetoRepository.find();
  }

  async create(task: Objeto): Promise<Objeto> {
    return this.ObjetoRepository.save(task);
  }
}