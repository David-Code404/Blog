import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePublicacionDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo titulo de la publicacion no debe ser vacío' })
    @IsString({ message: 'El campo titulo de la publicacion debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo titulo de la publicacion no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo titulo de la publicacion no debe ser menor a 4 caracteres' })
    titulo: string;


    
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo contenido de la publicacion no debe ser vacío' })
    @IsString({ message: 'El campo contenido de la publicacion debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo contenido de la publicacion no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo contenido de la publicacion no debe ser menor a 4 caracteres' })
    contenido: string;

  

    @ApiProperty()
    @IsDefined({ message: 'El campo iUsuario debe estar definido' })
    @IsNumber({}, { message: 'El campo idUsuario debe ser de tipo numérico' })
    readonly idUsuario: number;
    

}
