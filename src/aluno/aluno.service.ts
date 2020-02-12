import { Cpf } from './../shared/validators/cpf-validator';
import { Result } from './../shared/util/result';
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
  const cpf = new Cpf();
  const alunos = await this.alunoRepository.find();
  alunos.forEach(x => {
   x.cpf = cpf.formatCpf(x.cpf);
  });
  return alunos;
 }

 async create(data: AlunoDTO): Promise<Result<AlunoEntity>> {
  const cpf = new Cpf();
  const result = new Result<AlunoEntity>();
  if (!cpf.create(data.cpf).isValid) {
   return result.fail('Cpf inválido');
  }
  const aluno = await this.alunoRepository.create(data);
  aluno.cpf = cpf.formatCpf(aluno.cpf);
  await this.alunoRepository.save(data);
  return result.ok(aluno);
 }

 async read(id: string) {
  const cpf = new Cpf()
  const aluno = await this.alunoRepository.findOne({ where: { id } });
  aluno.cpf = cpf.formatCpf(aluno.cpf);
  return aluno;
 }

 async update(id: string, data: Partial<AlunoDTO>) {
  const cpf = new Cpf();
  await this.alunoRepository.update({ id }, data);
  const aluno = await this.alunoRepository.findOne({ id });
  aluno.cpf = cpf.formatCpf(aluno.cpf);
  return aluno;
 }

 async destroy(id: string) {
  await this.alunoRepository.delete({ id });
  return { deleted: true };
 }
}
