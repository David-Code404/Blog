import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoriaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre  no debe ser vacío' })
    @IsString({ message: 'El campo nombre de debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo nombre  no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo nombre  no debe ser menor a 4 caracteres' })
    nombre: string;


    @ApiProperty()
    @IsDefined({ message: 'El campo idPublicacion debe estar definido' })
    @IsNumber({}, { message: 'El campo idPublicacion debe ser de tipo numérico' })
    readonly idPublicacion: number;

}
