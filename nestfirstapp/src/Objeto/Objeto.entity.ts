import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Objeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  titulo: string;

  // @Column('text')
  // description: string;

  // @Column()
  // filename: string;

  // @Column('int')
  // views: number;

  // @Column()
  // isPublished: boolean;
}