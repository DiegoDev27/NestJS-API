import { EnderecoEntity } from './../endereco/endereco.entity';
import {
 PrimaryGeneratedColumn,
 Entity,
 Column,
 CreateDateColumn,
 OneToMany,
 Unique,
} from 'typeorm';

@Entity('aluno')
export class AlunoEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column('varchar', {length: 200, default: 'Nada'})
 nome: string;

 @Column('date')
 data_nascimento: Date;

 @Column('varchar', {length: 14 })
 @Unique(['cpf'])
 cpf: string;

 @Column('decimal')
 nota: number;

 @CreateDateColumn()
 created: Date;

 @OneToMany(() => EnderecoEntity, endereco => endereco.aluno)
 enderecos: EnderecoEntity[];
}
