import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Length, IsEmail, IsAlpha, IsDate } from 'class-validator'
import { EntityBase } from '~/domain/EntityBase'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export interface UserProps {
    email: string
    password: string
    name: string
    gender: string
    birthdate: Date
}

@Entity('user')
export class User extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsAlpha()
    name: string

    @Column({ unique: true })
    @IsEmail(undefined, {
        message: ExceptionCode[ExceptionCode.NOT_VALID_EMAIL]
    })
    email: string

    @Column()
    @IsDate()
    birthdate: Date

    @Column()
    @IsAlpha()
    gender: string

    @Column({ select: false, length: 64 })
    @Length(6, 64, {
        message: ExceptionCode[ExceptionCode.PW_NOT_SECURE]
    })
    password: string

    constructor(user: UserProps) {
        super()
        this.email = user.email
        this.password = user.password
        this.name = user.name
        this.birthdate = user.birthdate
        this.gender = user.gender
    }
}
