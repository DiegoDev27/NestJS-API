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

 @Column('text')
 rua: string;

 @Column('text')
 numero: string;

 @Column('text')
 complemento: string;

 @Column('text')
 bairro: string;
 
 @CreateDateColumn()
 created: Date;

 @ManyToOne(type => AlunoEntity, aluno => aluno.enderecos)
 aluno: AlunoEntity;
}
