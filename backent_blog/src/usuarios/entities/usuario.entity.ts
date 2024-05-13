import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @Column('varchar', { length: 45, nullable: false })
    rol: string;

    // @Column({ type: 'blob', nullable: true, name: 'imagen' })
    // imagen: Buffer;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
}
