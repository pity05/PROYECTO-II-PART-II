
import { IsNumber, IsString } from 'class-validator';


export class UpdateObjetoDto{
    @IsNumber()
    readonly id: number;
  
    @IsString()
    readonly tipo: string;
  
    @IsString()
    readonly titulo: string;
    // Otros campos...
  }