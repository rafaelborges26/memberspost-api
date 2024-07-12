import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RockerMembersRepository } from './repositories/rocket-member-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RockerMembersRepository) {} //chamar o prisma

  @Post('hello') //quando colocar @get significa q é uma rota
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
