import { Entity, Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Objeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  titulo: string;

 // @ManyToMany (()=> )

  // @Column('text')
  // description: string;

  // @Column()
  // filename: string;

  // @Column('int')
  // views: number;

  // @Column()
  // isPublished: boolean;
}