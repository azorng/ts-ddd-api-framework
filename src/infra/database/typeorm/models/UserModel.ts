import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from '~/domain/user/User';

@Entity('user')
export class UserModel extends User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    username: string

}