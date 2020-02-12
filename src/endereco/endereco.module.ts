import { EnderecoEntity } from './endereco.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EnderecoController } from './endereco.controller';
import { EnderecoService } from './endereco.service';

@Module({
  imports:[TypeOrmModule.forFeature([EnderecoEntity])],
  controllers: [EnderecoController],
  providers: [EnderecoService]
})
export class EnderecoModule {}
