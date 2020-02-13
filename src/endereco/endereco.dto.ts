import { ApiProperty } from '@nestjs/swagger';

export class EnderecoDTO{
 @ApiProperty()
 rua: string;
 
 @ApiProperty()
 numero: string;
 
 @ApiProperty()
 complemento: string;
 
 @ApiProperty()
 bairro: string;

 @ApiProperty()
 alunoId: string;
}