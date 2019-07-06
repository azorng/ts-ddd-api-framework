import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from '~/domain/user/User';

@Entity('user')
export class UserEntity extends User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        unique: true,
    })
    username: string

    @Column()
    password: string
}
