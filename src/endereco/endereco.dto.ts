import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EnderecoDTO{
 @ApiProperty()
 @IsNotEmpty({message: "Rua Vazia"})
 @IsString({message: "String Vazia"})
 rua: string;
 
 @ApiProperty()
 numero: string;
 
 @ApiProperty()
 complemento: string;
 
 @ApiProperty()
 @IsNotEmpty({message: "Bairro Vazio"})
 bairro: string;

 @ApiProperty()
 @IsNotEmpty({message: "alunoId Vazio"})
 alunoId: string;
}