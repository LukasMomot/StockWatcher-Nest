import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Stock Watcher API - powered by Nest.JS';
  }
}
