import { AlunoDTO } from './aluno.dto';
import { AlunoEntity } from './aluno.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlunoService {
 constructor(
  @InjectRepository(AlunoEntity)
  private alunoRepository: Repository<AlunoEntity>,
 ) { }

 async showAll() {
  return await this.alunoRepository.find();
 }

 async create(data: AlunoDTO) {
  const aluno = await this.alunoRepository.create(data);
  await this.alunoRepository.save(data);
  return aluno;
 }

 async read(id: string) {
  return await this.alunoRepository.findOne({ where: { id } });
 }

 async update(id: string, data: Partial<AlunoDTO>) {
  await this.alunoRepository.update({ id }, data);
  return await this.alunoRepository.findOne({ id });
 }

 async destroy(id: string) {
  await this.alunoRepository.delete({ id });
  return { deleted: true };
 }
}
