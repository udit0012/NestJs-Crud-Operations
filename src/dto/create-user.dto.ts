import {IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    readonly first_name: string

    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    readonly last_name: string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    readonly gender: string

    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, {
        message:
            'Password must contain at least one alphabet, one number, and one special character.',
    })
    readonly password:string

}

