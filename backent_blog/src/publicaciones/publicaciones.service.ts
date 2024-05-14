import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class PublicacionesService {
  constructor(@InjectRepository(Publicacion) private publicacionesRepository: Repository<Publicacion>,
  ) { }

  async create(createPublicacionDto: CreatePublicacionDto): Promise<Publicacion> {
    const existe = await this.publicacionesRepository.findOneBy({
      titulo: createPublicacionDto.titulo.trim(),
      usuario: { id: createPublicacionDto.idUsuario },
    })
    if (existe) {
      throw new ConflictException(`El empleado ya existe`)
    }
    return this.publicacionesRepository.save({
      titulo: createPublicacionDto.titulo.trim(),
      contenido: createPublicacionDto.contenido.trim(),
      usuario: { id: createPublicacionDto.idUsuario },

    })
  }

  async findAll(): Promise<Publicacion[]> {
    return this.publicacionesRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Publicacion> {
    const existePublicacion = await this.publicacionesRepository.findOne({
      where: { id },
      relations: ['usuario']

    })
    if (!existePublicacion) {
      throw new NotFoundException(`EL empleado con el id ${id} no existe`)
    }
    return existePublicacion;
  } 

  async update(id: number, updatePublicacionDto: UpdatePublicacionDto): Promise<Publicacion> {
    const empleado = await this.findOne(id);
    const actualizarPublicacion = Object.assign(empleado, updatePublicacionDto);
    actualizarPublicacion.usuario = { id: updatePublicacionDto.idUsuario } as Usuario;
    return this.publicacionesRepository.save(actualizarPublicacion);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id)
    return this.publicacionesRepository.delete(empleado.id);
  }
}
