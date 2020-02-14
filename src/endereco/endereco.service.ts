import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EnderecoDTO } from './endereco.dto';
import { EnderecoEntity } from './endereco.entity';


@Injectable()
export class EnderecoService {
 constructor(
  @InjectRepository(EnderecoEntity)
  private enderecoRepository: Repository<EnderecoEntity>,
 ) { }

 async showAll(bairro?: string):Promise<Array<EnderecoEntity>> {
  let bairros: Array<EnderecoEntity>;
  if (bairro) {
   bairros = await this.enderecoRepository.find({ where: { bairro } });
   return bairros;
  }
  bairros = await this.enderecoRepository.find();
  return bairros;
 }

 async create(data: EnderecoDTO) {
  const endereco = this.enderecoRepository.create(data);
  await this.enderecoRepository.save(data);
  return endereco;
 }

}
