import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nav {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  url: string;

  @Column('text')
  description: string;

  @Column('int')
  status: number;
}
