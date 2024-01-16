import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS =[{
  id:"m1",
  title:'Test',
  price:6,
  description:'This is a first product - amazing!'
},{
  id:"m2",
  title:'Test2',
  price:3,
  description:'This is a second product - superb!'
},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{DUMMY_PRODUCTS.map(item =>{
        return <ProductItem
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        key={item.id}
      />
      })}
       
      </ul>
    </section>
  );
};

export default Products;
