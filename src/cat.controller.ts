import { Controller, Get,Post,Header } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly appService: CatService) {}
  @Post()
  @Header('Content-Type', 'html/texddt')
  // @Get()
  getCat():  {name: string} {
    return { name:"cat"};
  }
}
