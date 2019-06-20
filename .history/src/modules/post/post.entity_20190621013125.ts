import { Entity, PrimaryGeneratedColumn } from 'typeorm';

console.log('进来了');

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
}

