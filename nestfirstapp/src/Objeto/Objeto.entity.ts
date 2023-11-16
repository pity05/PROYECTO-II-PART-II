import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Objeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  titulo: string;

  @Column()
  tipo: string;
  
  @DeleteDateColumn() // Agrega esta línea para admitir eliminaciones suaves
  deletedAt: Date;
  // @Column('text')
  // description: string;

  // @Column()
  // filename: string;

  // @Column('int')
  // views: number;

  // @Column()
  // isPublished: boolean;
}