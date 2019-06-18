import { IsString,IsArray, IsNumber } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title:String;
  @IsString()
  readonly name:String;
  @IsNumber()
  age:Number
}