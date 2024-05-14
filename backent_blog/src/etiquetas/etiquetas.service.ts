import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Etiqueta } from './entities/etiqueta.entity';
import { Repository } from 'typeorm';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';

@Injectable()
export class EtiquetasService {
  constructor(@InjectRepository(Etiqueta) private etiquetasRepository: Repository<Etiqueta>,
  ) { }
  async create(createEtiquetaDto: CreateEtiquetaDto): Promise<Etiqueta> {
    const existe = await this.etiquetasRepository.findOneBy({
      nombre: createEtiquetaDto.nombre.trim(),
      publicacion: { id: createEtiquetaDto.idPublicacion },
    })

    if (existe) {
      throw new ConflictException('La etiqueta ya existe')
    }
    return this.etiquetasRepository.save({
      nombre: createEtiquetaDto.nombre.trim(),
      descripcion: createEtiquetaDto.descripcion.trim(),
      publicacion: { id: createEtiquetaDto.idPublicacion },
    });
  }

  async findAll(): Promise<Etiqueta[]> {

    return this.etiquetasRepository.find({ relations: ['publicacion'] });
  }

  async findOne(id: number): Promise<Etiqueta> {
    const existeEtiqueta = await this.etiquetasRepository.findOne({
      where: { id },
      relations: ['publicacion']

    })
    if (!existeEtiqueta) {
      throw new NotFoundException(`La etiqueta con el id ${id} no existe `)

    }
    return existeEtiqueta;
  }

  async update(id: number, updateEtiquetaDto: UpdateEtiquetaDto): Promise<Etiqueta> {
    const etiqueta = await this.findOne(id)
    const actualizarEtiqueta = Object.assign(etiqueta, updateEtiquetaDto);
    actualizarEtiqueta.publicacion = { id: updateEtiquetaDto.idPublicacion } as Publicacion;
    return this.etiquetasRepository.save(actualizarEtiqueta);
  }

  async remove(id: number) {
    const etiqueta = await this.findOne(id)
    return this.etiquetasRepository.delete(etiqueta.id);
  }
}
