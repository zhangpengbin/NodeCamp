import { IsString,IsArray } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title:String;
  @IsString()
  readonly name:String;
  @IsArray()
  age:Number
}