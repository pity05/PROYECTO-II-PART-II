// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Task } from './Objeto/Objeto';

// @Injectable()
// export class TaskService {
//   constructor(
//     @InjectRepository(Task)
//     private readonly taskRepository: Repository<Task>,
//   ) {}

//   async create(task: Task): Promise<Task> {
//     return this.taskRepository.save(task);
//   }

//   async findAll(): Promise<Task[]> {
//     return this.taskRepository.find();
//   }

//   async findOne(id: number): Promise<Task> {
//     return this.taskRepository.findOne(id);
//   }

//   async update(id: number, updatedTask: Task): Promise<Task> {
//     await this.taskRepository.update(id, updatedTask);
//     return this.taskRepository.findOne(id);
//   }

//   async remove(id: number): Promise<void> {
//     await this.taskRepository.delete(id);
//   }
// }