import { Module } from '@nestjs/common';
import { MailappController } from './mailapp.controller';
import { MailappService } from './mailapp.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tovito228A',
      database: 'pong',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [MailappController],
  providers: [MailappService],
  
})
export class MailappModule {}
