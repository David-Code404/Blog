import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEtiquetaDto {


    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo nombre no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo nombre no debe ser menor a 4 caracteres' })
    readonly nombre:string


    @ApiProperty()
    @IsNotEmpty({ message: 'El campo descripcion no debe ser vacío' })
    @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
    @MaxLength(45, { message: 'El campo descripcion no debe ser mayor a 45 caracteres' })
    @MinLength(4, { message: 'El campo descripcion no debe ser menor a 4 caracteres' })
    readonly descripcion:string;


    @ApiProperty()
    @IsDefined({ message: 'El campo idPublicacion debe estar definido' })
    @IsNumber({}, { message: 'El campo idPublicacion debe ser de tipo numérico' })
    readonly idPublicacion: number;
}
