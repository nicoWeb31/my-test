import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({})
export class User {
  @PrimaryKey()
  _id!: number;
  @Property({
    nullable: false,
  })
  name: string;
}
