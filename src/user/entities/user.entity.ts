
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({type: 'varchar', length: 50, nullable: false})
    name?: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    email?: string;

    @Column({type: 'varchar', length: 200, nullable: false})
    password?: string;
}