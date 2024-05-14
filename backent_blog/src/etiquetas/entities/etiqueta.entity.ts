import { Publicacion } from "src/publicaciones/entities/publicacion.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('etiquetas')
export class Etiqueta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 45, nullable: false })
    nombre: string;

    @Column('varchar', { length: 45, nullable: false })
    descripcion: string;

    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    //relacion  muchos a muchos
    @ManyToMany(()=>Publicacion,publicacion=>publicacion.etiquetas)
    @JoinTable()
    publicacion:Publicacion; 
}
