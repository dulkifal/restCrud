import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getCat(): string {
    return 'Hello World! cat';
  }
}
