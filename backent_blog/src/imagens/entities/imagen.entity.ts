import { Publicacion } from "src/publicaciones/entities/publicacion.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('imagens')
export class Imagen {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 45, nullable: false, name: 'nombre_usuario' })
    nombre: string;

    @Column('varchar', { length: 45, nullable: false })
    url: string;

    

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
    

    @ManyToOne(()=>Publicacion,publicacion=>publicacion.imagenes)
    @JoinColumn({name:'id_publicacion',referencedColumnName:'id'})
    publicacion:Publicacion

}
