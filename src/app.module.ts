import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RockerMembersRepository } from './repositories/rocket-member-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  //decorator: aplicar functionalidade como se fosse uma função (separar tudo por modulo)
  imports: [],
  controllers: [AppController], //controller rotas q receber chamadas http
  providers: [
    PrismaService,
    {
      provide: RockerMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ], //tudo q n for um controller é um provider, exemplo repositorios para chamada de banco de dados, services tbm sao (//providers precisam ter esse injectable para ir para o app)
})
export class AppModule {}
