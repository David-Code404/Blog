
import { Categoria } from "src/categorias/entities/categoria.entity";
import { Etiqueta } from "src/etiquetas/entities/etiqueta.entity";
import { Imagen } from "src/imagens/entities/imagen.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('publicaciones')
export class Publicacion {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 45, nullable: false})
    titulo: string;

    @Column('varchar', { length: 45, nullable: false })
    contenido: string;

    

    @CreateDateColumn({ name: 'fecha_publicacion' })
    fechaPublicacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
    //relacion muchos a uno 
    @ManyToOne(()=>Usuario,usario=>usario.publicaciones)
    @JoinColumn({name:'id_usuario',referencedColumnName:'id'})
    usuario:Usuario;
     //relacion de uno a muchos 
     @OneToMany(()=>Categoria,categoria=>categoria.publicacion)
     categorias:Categoria[];


    @ManyToMany(()=>Etiqueta,etiqueta=>etiqueta.publicacion)
    etiquetas:Etiqueta[];

    @OneToMany(()=>Imagen,imagen=>imagen.publicacion)
    imagenes:Imagen[];

    

}
