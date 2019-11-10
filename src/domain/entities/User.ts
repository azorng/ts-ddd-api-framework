import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Length, IsEmail } from 'class-validator'
import { EntityBase } from '~/domain/EntityBase'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export interface UserProps {
    email: string
    password: string
}

@Entity('user')
export class User extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        unique: true
    })
    @IsEmail(undefined, {
        message: ExceptionCode[ExceptionCode.NOT_VALID_EMAIL]
    })
    email: string

    @Column()
    @Length(6, 50, {
        message: ExceptionCode[ExceptionCode.PW_NOT_SECURE]
    })
    password: string

    constructor(user: UserProps) {
        super()
        this.email = user.email
        this.password = user.password
    }
}
