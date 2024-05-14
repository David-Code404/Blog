
import { Publicacion } from "src/publicaciones/entities/publicacion.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 45, nullable: false, name: 'nombre_usuario' })
    nombreUsuario: string;

    @Column('varchar', { length: 45, nullable: false })
    clave: string;

    @Column('varchar', { length: 50, nullable: false })
    correo: string;

    

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
    //relacion uno a muchos
    @OneToMany(()=>Publicacion,publicacion=>publicacion.usuario)
    publicaciones:Publicacion[];

    
}
