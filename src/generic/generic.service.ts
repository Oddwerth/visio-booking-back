import { Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class GenericService {
  constructor() { }

  async getPasswordHash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }


}
