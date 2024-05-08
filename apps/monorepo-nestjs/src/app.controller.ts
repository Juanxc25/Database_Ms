import { Controller, Get, Inject, Post, Patch, Delete, Body, Render } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UptadeUserDto, UserDto } from './dto/user.dto';
import { IdDto } from './dto/id.dto';

@Controller()
export class AppController {
  constructor(@Inject('MAIL_SERVICE') private userCrud: ClientProxy) {}

  @Post()
  async getUser(@Body() idDto: IdDto) {
    const { id } = idDto;
    const result = await this.userCrud.send('obtener', id).toPromise();
    return result;
  }

  @Post('crear')
  async createUser(@Body() userDto: UserDto) {
    const result = await this.userCrud.send('crear', userDto).toPromise();
    return result;
  }

  @Patch('actualizar')
  async updateUser(@Body() updateUserDto: UptadeUserDto) {
    const result = await this.userCrud.send('actualizar', updateUserDto).toPromise();
    return result;
  }

  @Delete('eliminar')
  async deleteUser(@Body() idDto: IdDto) {
    const { id } = idDto;
    const result = await this.userCrud.send('eliminar', id).toPromise();
    return result;
  }

  @Get('usuarios')
  async getUsers() {
    const result = await this.userCrud.send('usuarios', {}).toPromise();
    return result;
  }

  @Get('/home')
  @Render('index') 
  async hello() {
    const users = await this.getUsers();
    return { 
      message: 'Sistema de Registros y Validaciones', 
      users: users 
    };
  }

  @Get('/login')
  @Render('usuarios') 
  async login() {
    return { message: 'Por favor, inicia sesión' };
  }

}
