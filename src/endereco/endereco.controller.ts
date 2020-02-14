import { EnderecoDTO } from './endereco.dto';
import { EnderecoService } from './endereco.service';
import { Controller, Post, Get, Body, Param } from '@nestjs/common';

@Controller('endereco')
export class EnderecoController {
 constructor(private enderecoService: EnderecoService) { }

 @Get('/endereco/:bairro')
 showAllEnderecos(@Param('bairro') filter: string) {
  return this.enderecoService.showAll(filter);
 }

 @Post()
 createEndereco(@Body() data: EnderecoDTO) {
  return this.enderecoService.create(data);
 }

}
