import { AlunoEntity } from './../aluno/aluno.entity';
import {
 PrimaryGeneratedColumn,
 CreateDateColumn,
 Column,
 Entity,
 ManyToOne,
} from 'typeorm';

@Entity('endereco')
export class EnderecoEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column('varchar', {length: 200})
 rua: string;

 @Column('varchar', {length: 10, nullable: true})
 numero: string;

 @Column('varchar', {length: 200, nullable: true})
 complemento: string;

 @Column('varchar', {length: 100})
 bairro: string;

 @CreateDateColumn()
 created: Date;

 @Column()
 alunoId: string;

 @ManyToOne(() => AlunoEntity, aluno => aluno.enderecos)
 aluno: AlunoEntity;

 endecoFormatter() {
  const result = `${this.rua}; ${this.numero}; ${this.complemento}`
  return result;
 }

}
