import {  Injectable,  } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Putos!!';
  }


  DatosDelaBD( datos : string): string{

    var mensaje = datos ;
    return mensaje;

  }
}
