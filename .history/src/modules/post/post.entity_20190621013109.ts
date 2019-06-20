import { Entity, PrimaryGeneratedColumn } from 'typeorm';

console.log('进来了');

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
}

