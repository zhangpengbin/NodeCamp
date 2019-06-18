import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title:String;
  @IsString()
  readonly name:String;
}