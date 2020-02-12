import { ApiProperty } from '@nestjs/swagger';

export class AlunoDTO{
 @ApiProperty()
 nome: string;

 @ApiProperty()
 data_nascimento: Date;
 
 @ApiProperty()
 cpf: string;
 
 @ApiProperty()
 nota: number;
}