import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @UpdateDateColumn()
  updated: Date;

}

