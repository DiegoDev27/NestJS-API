import { EnderecoDTO } from './endereco.dto';
import { EnderecoEntity } from './endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService {
 constructor(
  @InjectRepository(EnderecoEntity)
  private enderecoRepository: Repository<EnderecoEntity>,
 ) { }

 async showAll(){
  return this.enderecoRepository.find();
 }

 async create(data: EnderecoDTO){
  const endereco = this.enderecoRepository.create(data);
  await this.enderecoRepository.save(data);
  return endereco;
 }

}