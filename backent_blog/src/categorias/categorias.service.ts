import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';

@Injectable()
export class CategoriasService {
  
  constructor(@InjectRepository(Categoria) private categoriasRepository: Repository<Categoria>,
) { }
async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
  const existe = await this.categoriasRepository.findOneBy({
    nombre: createCategoriaDto.nombre.trim(),
    publicacion: { id: createCategoriaDto.idPublicacion },
  })

  if (existe) {
    throw new ConflictException('La categoria ya existe')
  }
  return this.categoriasRepository.save({
    nombre: createCategoriaDto.nombre.trim(),
    publicacion: { id: createCategoriaDto.idPublicacion },
  });
}

async findAll(): Promise<Categoria[]> {

  return this.categoriasRepository.find({ relations: ['publicacion'] });
}

async findOne(id: number): Promise<Categoria> {
  const existeCategoria = await this.categoriasRepository.findOne({
    where: { id },
    relations: ['publicacion']

  })
  if (!existeCategoria) {
    throw new NotFoundException(`La categoria con el id ${id} no existe `)

  }
  return existeCategoria;
}

async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
  const etiqueta = await this.findOne(id)
  const actualizarCategoria = Object.assign(etiqueta, updateCategoriaDto);
  actualizarCategoria.publicacion = { id: updateCategoriaDto.idPublicacion } as Publicacion;

  return this.categoriasRepository.save(actualizarCategoria);
}

async remove(id: number) {
  const etiqueta = await this.findOne(id)
  return this.categoriasRepository.delete(etiqueta.id);
}
}
