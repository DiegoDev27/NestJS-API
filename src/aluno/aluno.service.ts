import { Cpf } from './../shared/validators/cpf-validator';
import { Result } from './../shared/util/result';
import { AlunoDTO } from './aluno.dto';
import { AlunoEntity } from './aluno.entity';
import { Injectable } from '@nestjs/common';
import { Repository, MoreThan, LessThan, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoEntity } from 'src/endereco/endereco.entity';

@Injectable()
export class AlunoService {
 constructor(
  @InjectRepository(AlunoEntity)
  private alunoRepository: Repository<AlunoEntity>,
  @InjectRepository(EnderecoEntity)
  private enderecoRepository: Repository<EnderecoEntity>,
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

 async showEnderecos(id: string) {
  const endereco = await this.enderecoRepository.find({ where: { alunoId: id } })
  return endereco;
 }

 async criterioNota(nota: number, criterio: string) {
  if (criterio == '>') {
   return this.alunoRepository.find({ nota: MoreThan(nota) });
  } else {
   (criterio == '<')
   return this.alunoRepository.find({ nota: LessThan(nota) });
  }
 }

 async mediaNota() {
  const quantity = await this.alunoRepository.count();
  const notas = await getRepository(AlunoEntity)
   .createQueryBuilder("aluno")
   .select("SUM(aluno.nota)", "sum")
   .getRawOne();

  const media = notas.sum / quantity;

  const aluno = this.alunoRepository.find({ nota: MoreThan(media) })


  return aluno;
 }
}