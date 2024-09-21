import { IsNumber, IsString, isString } from "class-validator";
export class CreateGDto {
    @IsNumber()
    factura : number; 
    @IsString()
    fecha : string;
    @IsString()
    cliente : string
}
