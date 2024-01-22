import { Injectable } from '@nestjs/common';
import { Hash, createHash } from 'crypto';

@Injectable()
export class CryptoService {
  private hasher: Hash;

  constructor() {
    this.hasher = createHash('sha256');
  }

  encrypt(text: string): string {
    return this.hasher.update(text).digest('hex');
  }
}
