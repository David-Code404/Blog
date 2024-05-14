import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateImagenDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre de imagen no debe ser vacío' })
    @IsString({ message: 'El campo nombre de imagen debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo nombre de imagen no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo nombre de imagen no debe ser menor a 4 caracteres' })
    nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo url de imagen no debe ser vacío' })
    @IsString({ message: 'El campo url de imagen debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo url de imagen no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo url de imagen no debe ser menor a 4 caracteres' })
    url: string;
}
