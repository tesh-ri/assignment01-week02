import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsPhoneNumber,
  MaxLength,
  IsNumber,
  isNumber,
  IsNotEmpty,
} from 'class-validator';

export class updateUserDto {

  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({message:"name not to be empty"})
  name?: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;

  @IsNumber({}, {message:"age must be number"})
  age?: number;
}
