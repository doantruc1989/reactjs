import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('blog')
export class Blog {

    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Column('longtext')
    title: string;

    @Column('varchar')
    image: string;

    @Column("longtext")
    content: string;

    @Column('longtext')
    littlecontent: string;
}