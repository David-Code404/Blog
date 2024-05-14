import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { EtiquetasModule } from './etiquetas/etiquetas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ImagensModule } from './imagens/imagens.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host:  process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities:true,
    }),
    UsuariosModule,
    PublicacionesModule,
    EtiquetasModule,
    CategoriasModule,
    ImagensModule,
   
   

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
