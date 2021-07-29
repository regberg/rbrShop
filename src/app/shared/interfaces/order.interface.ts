import { Status } from '../enums/status.enum';
import { Address } from './address.interface';
import { Product } from './product.interface';

export interface Order {
  id: number;
  name?: string;
  products: Product[];
  date: Date;
  status: Status;
  address?: Address;
}
