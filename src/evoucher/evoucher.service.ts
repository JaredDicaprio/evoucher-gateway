import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class EvoucherService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: process.env.REDIS_URL,
      },
    });
  }

  public findAll() {
    return this.client.send('findAll', { data: {} });
  }

  public findOne(id) {
    return this.client.send('findOne', id);
  }

  public create(data) {
    return this.client.send('create', data);
  }

  public update(data) {
    return this.client.send('update', data);
  }

  public verify(data) {
    return this.client.send('verify', data);
  }

  public buy(data) {
    return this.client.send('buy', data);
  }
}
