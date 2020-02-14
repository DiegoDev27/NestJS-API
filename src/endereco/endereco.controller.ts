import { EnderecoDTO } from './endereco.dto';
import { EnderecoService } from './endereco.service';
import { Controller, Post, Get, Body, Param } from '@nestjs/common';

@Controller('endereco')
export class EnderecoController {
 constructor(private enderecoService: EnderecoService) { }

 @Get('/:bairro')
 filtrarEnderecos(@Param('bairro') filter: string) {
  return this.enderecoService.showAll(filter);
 }

 @Get()
 showAllEnderecos() {
  return this.enderecoService.showAll();
 }

 @Post()
 createEndereco(@Body() data: EnderecoDTO) {
  return this.enderecoService.create(data);
 }

}
