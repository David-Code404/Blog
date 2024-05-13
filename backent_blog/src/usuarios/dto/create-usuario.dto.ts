import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre de usuario no debe ser vacío' })
    @IsString({ message: 'El campo nombre de usuario debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo nombre de usuario no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo nombre de usuario no debe ser menor a 4 caracteres' })
    nombreUsuario: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo correo no debe ser vacío' })
    @IsString({ message: 'El campo correo debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo correo no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo correo no debe ser menor a 4 caracteres' })
    correo: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo rol no debe ser vacío' })
    @IsString({ message: 'El campo rol debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo rol no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo rol no debe ser menor a 4 caracteres' })
    rol: string;

    // @ApiProperty()
    // @IsNotEmpty({ message: 'El campo imagen no debe ser vacío' })
    // imagen: Buffer;
}
