import { EnderecoEntity } from './../endereco/endereco.entity';
import {
 PrimaryGeneratedColumn,
 Entity,
 Column,
 CreateDateColumn,
 OneToMany,
} from 'typeorm';

@Entity('aluno')
export class AlunoEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column('text')
 nome: string;

 @Column('date')
 data_nascimento: Date;

 @Column('text')
 cpf: string;

 @Column('decimal')
 nota: number;

 @CreateDateColumn()
 created: Date;

 @OneToMany(type => EnderecoEntity, endereco => endereco.aluno)
 enderecos: EnderecoEntity[];
}
