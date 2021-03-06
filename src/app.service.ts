import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { error } from 'console';
import { fetch } from 'cross-fetch';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getPokemon(id: any): Promise<any> {
    //max number of pokemons based on the api
    if (id > 1118) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Input range is outside bounds',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getAllPokemons(): Promise<any> {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
