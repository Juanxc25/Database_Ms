import { Controller, Get, Inject, Post, Patch, Delete, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UptadeUserDto, UserDto } from './dto/user.dto';
import { IdDto } from './dto/id.dto';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(@Inject('MAIL_SERVICE') private userCrud: ClientProxy) {}

  @Post()
  async getUser(@Body() idDto: IdDto) {
    const { id } = idDto;
    var result = this.userCrud.send('obtener', id);
    return result;
  }

  @Post('crear')
  async createUser(@Body() UserDto: UserDto) {

    var result = this.userCrud.send('crear', UserDto);
    return result;
  }

  @Patch('actualizar')
  async updateUser(@Body() updateUserDto: UptadeUserDto) {
    const result = await this.userCrud.send('actualizar', updateUserDto);
    return result;
  }

  @Delete('eliminar')
  async deleteUser(@Body() idDto: IdDto) {
    const { id } = idDto;
    var result = this.userCrud.send('eliminar', id);
    return result;
  }
}