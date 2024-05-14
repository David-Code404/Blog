import { Publicacion } from "src/publicaciones/entities/publicacion.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 45, nullable: false})
    nombre: string;


    @CreateDateColumn({ name: 'fecha_publicacion' })
    fechaPublicacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
    //relacion muchos a uno 
    @ManyToOne(()=>Publicacion,publicacion=>publicacion.categorias)
    @JoinColumn({name:'id_publicacion',referencedColumnName:'id'})
    publicacion:Publicacion;


}
