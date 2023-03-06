import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";
import { Storage } from "./storage.entity";

@Entity()
export class Company {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ length: 500 })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany((type) => Storage, (storage) => storage.company, {
    eager: true,
  })
  storage: Storage[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
