import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}
