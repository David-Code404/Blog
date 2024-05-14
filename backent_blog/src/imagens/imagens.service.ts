import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Imagen } from './entities/imagen.entity';
import { Repository } from 'typeorm';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';

@Injectable()
export class ImagensService {
  constructor(@InjectRepository(Imagen) private imagensRepository: Repository<Imagen>) { }
  
  async create(createImagenDto: CreateImagenDto):Promise<Imagen> {
    
    return this.imagensRepository.save({
      nombre:createImagenDto.nombre.trim(),
      url:createImagenDto.url.trim(),
      publicacion:{id:createImagenDto.idPublicacion},
    });
  }

 async findAll():Promise<Imagen[]> {
    return this.imagensRepository.find({relations:['publicacion']});
  }

  async findOne(id: number):Promise<Imagen> {
    const imagen = await this.imagensRepository.findOne({ 
      where:{id},
      relations:['publicacion'] 
    });
    if (!imagen) {
      throw new NotFoundException(`La imagen ${id} no existe`);
    }
    return imagen;
  }

 async  update(id: number, updateImagenDto: UpdateImagenDto) :Promise<Imagen>{
  const imagen = await this.findOne(id);
  const imagenUpdate = Object.assign(imagen, updateImagenDto);
  imagenUpdate.publicacion={id:updateImagenDto.idPublicacion} as Publicacion;
  return this.imagensRepository.save(imagenUpdate);
  }

  async remove(id: number) {
    return `This action removes a #${id} imagen`;
  }
}
