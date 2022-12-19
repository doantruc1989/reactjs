
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
    User = 'user',
    Admin = 'admin',
}

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    image: string;

    @Column()
    forgotToken: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.User
    })
    role: Role[];

}

export default User;