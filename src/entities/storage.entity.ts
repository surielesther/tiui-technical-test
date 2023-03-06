import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Company } from "./company.entity";

@Entity()
export class Storage {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => Company, (company) => company.storage)
  company: Company;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
