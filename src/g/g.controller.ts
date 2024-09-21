import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GService } from './g.service';
import { CreateGDto } from './dto/create-g.dto';
import { UpdateGDto } from './dto/update-g.dto';

@Controller('g')
export class GController {
  constructor(private readonly gService: GService) {}

  @Post()
  create(@Body() createGDto: CreateGDto) {
    return this.gService.create(createGDto);
  }

  @Get()
  findAll() {
    return this.gService.findAll();
  }

  @Get('factura/:id')
  findOne(@Param('id') factura: string) {
    console.log(factura)
    return this.gService.findOne(+factura);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGDto: UpdateGDto) {
    return this.gService.update(+id, updateGDto);
  }

  @Delete('factura:id')
  remove(@Param('id') factura:number) {
    return this.gService.remove(factura);
  }
}
