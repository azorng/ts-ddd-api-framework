import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    username: string;
}