
import { Publicacion } from "src/publicaciones/entities/publicacion.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 45, nullable: false, name: 'nombre_usuario' })
    nombreUsuario: string;

    @Column('varchar', { length: 200, nullable: false })
    clave: string;

    @Column('varchar', { length: 50, nullable: false })
    correo: string;



    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    //relacion uno a muchos
    @OneToMany(() => Publicacion, publicacion => publicacion.usuario)
    publicaciones: Publicacion[];


    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.clave = await bcrypt.hash(this.clave, salt);
    }

    async validatePassword(plainPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, this.clave);
    }


}
