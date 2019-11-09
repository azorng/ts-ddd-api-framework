import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionCodes } from '~/domain/exceptions/ExceptionMessages';

interface UserProps {
    username: string
    password: string
}

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        unique: true,
    })
    username: string

    @Column()
    password: string

    constructor(user: UserProps) {
        this.username = user.username
        this.password = user.password
    }

    validate() {
        if (this.password.length < 5) throw new Exception(ExceptionCodes.PW_NOT_SECURE)
    }
}

