import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    username: string;
}