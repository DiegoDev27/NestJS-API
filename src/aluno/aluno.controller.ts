import { AlunoDTO } from './aluno.dto';
import { AlunoService } from './aluno.service';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {
 constructor(private alunoService: AlunoService) { }

 @Get()
 showAllAlunos() {
  return this.alunoService.showAll();
 }

 @Post()
 createAluno(@Body() data: AlunoDTO) {
  return this.alunoService.create(data);
 }

 @Get(':id')
 readAluno(@Param('id') id: string) {
  return this.alunoService.read(id);
 }

 @Put(':id')
 updateAluno(@Param('id') id: string, @Body() data: Partial<AlunoDTO>) {
  return this.alunoService.update(id, data);
 }

 @Delete(':id')
 destroyAluno(@Param('id') id: string) {
  return this.alunoService.destroy(id);
 }
}