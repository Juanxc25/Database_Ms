import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly MailAppservice: MailappService) {}

 
  @EventPattern('new_micro')
  handleNewEmail(data:any){
    console.log('Esta es el mensaje entrante', data)
  }
}