import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title:String;
  readonly name:String;
}