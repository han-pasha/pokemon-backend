import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('pokemon')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get(':id')
  async getPokemon(@Param('id') id: number) {
    return this.appService.getPokemon(id);
  }

  @Get()
  async getAllPokemons() {
    return this.appService.getAllPokemons();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('withguard/:id')
  async roleBasedGetPokemon(@Param('id') id: number) {
    return this.appService.getPokemon(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('withguard')
  async roleBasedGetAllPokemons() {
    return this.appService.getAllPokemons();
  }
}
