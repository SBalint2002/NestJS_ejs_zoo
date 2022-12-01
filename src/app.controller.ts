import { Controller, Get, Render, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AllatokDto } from './zoo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object{
    return {};
  }

  @Post()
  @Render('allat')
  allat(@Body() allatok: AllatokDto): object{
    return allatok;
  }
}
