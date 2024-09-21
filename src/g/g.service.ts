import { Injectable } from '@nestjs/common';
import { CreateGDto } from './dto/create-g.dto';
import { UpdateGDto } from './dto/update-g.dto';

@Injectable()
export class GService {
  g = []
  create(createGDto: CreateGDto) {
    this.g.push(createGDto)
    console.log(this.g)
    return 'se a creado una factura';
  }

  findAll() {
    return this.g
  }

  findOne(factura: number) {
    const facturaBuscada = this.g.find(ele=> ele.factura === factura);
    if (facturaBuscada === undefined)
      return `la factura de: #${factura}, no encontrada`
    else
    return facturaBuscada;

  }


  update(id: number, updateGDto: UpdateGDto) {
    
    return `This action updates a #${+id} g`;
  }

  remove(factura: number) {
    const indice= this.g.findIndex(g => g.factura === factura);
    if (indice === -1)
    return `la factura con numero: #${factura} ha sido elimanda `;
    
   else 
   this.g.splice(indice, 1);  // Elimina la factura
   return `la factura de numero: ${factura} ha sido eliminada`;

  }
}
