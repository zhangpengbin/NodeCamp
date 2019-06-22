import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tilte: string;

  @Column('longtext')
  body: string;

}

