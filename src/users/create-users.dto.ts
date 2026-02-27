import { IsString, MinLength } from 'class-validator';

export class createUserDto {
  @IsString({ message: 'Field Name must be a string' })
  @MinLength(3, { message: 'Name Field must be bigger than 3 chars' })
  name: string;
  @IsString({ message: 'Field Bio must be a string' })
  @MinLength(5, { message: 'Name Bio must be bigger than 5 chars' })
  bio: string;
}
