import {  Injectable,  } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Putos!!';
  }

  getById(id: string): string {
    return 'Dato' + id;
  }

  DatosDelaBD( datos : string): string{
    
    var mensaje = datos ;
    return mensaje;

  }
}
