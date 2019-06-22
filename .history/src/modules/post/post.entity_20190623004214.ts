import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tilte: string;

  @Column('longtext')
  body: string;

  @CreateDateColumn()
  created : Date;

}

