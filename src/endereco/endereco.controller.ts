import { EnderecoDTO } from './endereco.dto';
import { EnderecoService } from './endereco.service';
import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('endereco')
export class EnderecoController {
 constructor(private enderecoService: EnderecoService) { }

 @Get()
 showAllEnderecos() {
  return this.enderecoService.showAll();
 }

 @Post()
 createEndereco(@Body() data: EnderecoDTO) {
  return this.enderecoService.create(data);
 }

}
