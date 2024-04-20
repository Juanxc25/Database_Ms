import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Mock } from 'node:test';

@Injectable()
export class AppService {

  constructor(  @Inject('MAIL_SERVICE')private clientMicro:ClientProxy){}

  getHello(): string {
    return 'Proyecto Monorepo!';
  }
  newUser(user:any){
    this.clientMicro.emit('NEW_MAIL', user)
    return 'Retorno exitoso Juan'
  }
}