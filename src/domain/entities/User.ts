import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Length, IsEmail, IsAlpha, IsUrl } from 'class-validator'
import { EntityBase } from '~/domain/EntityBase'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export interface UserProps {
    email: string
    password: string
    firstName: string
    lastName: string
    company?: string
    website: string
}

@Entity('user')
export class User extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsAlpha()
    firstName: string

    @Column()
    @IsAlpha()
    lastName: string

    @Column({ length: 50,  })
    company?: string

    @Column({ unique: true })
    @IsUrl()
    website: string

    @Column({ unique: true })
    @IsEmail(undefined, {
        message: ExceptionCode[ExceptionCode.NOT_VALID_EMAIL]
    })
    email: string

    @Column({ length: 64 })
    @Length(6, 64, {
        message: ExceptionCode[ExceptionCode.PW_NOT_SECURE]
    })
    password: string

    constructor(user: UserProps) {
        super()
        this.email = user.email
        this.password = user.password
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.company = user.company
        this.website = user.website
    }
}
