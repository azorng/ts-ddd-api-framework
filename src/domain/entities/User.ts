import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm'
import { Length, IsEmail } from 'class-validator'
import { EntityBase } from '~/domain/entities/EntityBase'

export interface UserProps {
    email: string
    password: string
}

@Entity('user')
export class User extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Generated('uuid')
    uuid: string

    @Column({ unique: true })
    @IsEmail()
    email: string

    @Column({ select: false, length: 64 })
    @Length(6, 64)
    password: string

    constructor(user: UserProps) {
        super()
        this.email = user.email
        this.password = user.password
    }
}
