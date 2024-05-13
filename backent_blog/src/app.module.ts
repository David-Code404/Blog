import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'usrblog',
      password: '$aul10345806',
      database: 'db_blog',
      entities: [__dirname + '**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities:true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
