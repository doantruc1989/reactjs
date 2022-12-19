import {
    Column,
    Entity,
    Index,
    // JoinColumn,
    // JoinTable,
    // ManyToMany,
    // ManyToOne,
    // OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';

// import { CartItem } from './CartItem';
// import { OrderItem } from './OrderItem';
// import { User } from './User';
// import { Category } from './Category';
// import { ProductMeta } from './ProductMeta';
// import { ProductReview } from './ProductReview';
// import { Tag } from './Tag';

@Entity('product')
export class Product {

    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Column('varchar', { name: 'productName', length: 75 })
    productName: string;

    @Column('float', { name: 'price', precision: 12, default: () => "'0'" })
    price: number;

    @Column('smallint', { name: 'quantity', default: () => "'0'" })
    quantity: number;

    @Column('varchar')
    image: string;

    @Column('varchar')
    category: string;

    // @Column( 'datetime', { name: 'createdAt' } )
    // createdAt: Date;

    // @Column( 'datetime', { name: 'updatedAt', nullable: true } )
    // updatedAt: Date | null;

    // @Column( 'datetime', { name: 'publishedAt', nullable: true } )
    // publishedAt: Date | null;

    // @Column( 'datetime', { name: 'startsAt', nullable: true } )
    // startsAt: Date | null;

    // @Column( 'datetime', { name: 'endsAt', nullable: true } )
    // endsAt: Date | null;

    @Column('text', { name: 'content', nullable: true })
    content: string | null;

    // @OneToMany( () => CartItem, ( cartItem ) => cartItem.product )
    // cartItems: CartItem[];

    // @OneToMany( () => OrderItem, ( orderItem ) => orderItem.product )
    // orderItems: OrderItem[];

    // @ManyToOne( () => User, ( user ) => user.products, {
    // 	onDelete: 'RESTRICT',
    // 	onUpdate: 'RESTRICT',
    // } )
    // @JoinColumn( [ { name: 'userId', referencedColumnName: 'id' } ] )
    // user: User;

    // @ManyToMany( () => Category, ( category ) => category.products )
    // categories: Category[];

    // @OneToMany( () => ProductMeta, ( productMeta ) => productMeta.product )
    // productMetas: ProductMeta[];

    // @OneToMany( () => ProductReview, ( productReview ) => productReview.product )
    // productReviews: ProductReview[];

    // @ManyToMany( () => Tag, ( tag ) => tag.products )
    // @JoinTable( {
    // 	name: 'product_tag',
    // 	joinColumns: [ { name: 'productId', referencedColumnName: 'id' } ],
    // 	inverseJoinColumns: [ { name: 'tagId', referencedColumnName: 'id' } ],
    // 	schema: 'shop',
    // } )
    // tags: Tag[];

}
