import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";
import { Length, IsEmail } from "class-validator";
import { EntityBase } from "~/domain/EntityBase";
import { ExceptionCode } from "~/domain/exceptions/ExceptionMessages";

export interface UserProps {
  email: string;
  password: string;
}

@Entity("user")
export class User extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column({ unique: true })
  @IsEmail(undefined, {
    message: ExceptionCode[ExceptionCode.NOT_VALID_EMAIL],
  })
  email: string;

  @Column({ select: false, length: 64 })
  @Length(6, 64, {
    message: ExceptionCode[ExceptionCode.PW_NOT_SECURE],
  })
  password: string;

  constructor(user: UserProps) {
    super();
    this.email = user.email;
    this.password = user.password;
  }
}
