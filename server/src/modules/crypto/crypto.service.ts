import { Injectable } from '@nestjs/common';
import { Hash, createHash } from 'crypto';

@Injectable()
export class CryptoService {
  encrypt(text: string): string {
    const hasher = createHash('sha256');
    return hasher.update(text).digest('hex');
  }
}
