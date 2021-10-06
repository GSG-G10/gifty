import { useState } from 'react';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';

import './style.css';

function ProductsContainer({products}) {
  
  const [page, setPage] = useState(1);
  return (
    <Container maxWidth="md">
      <SectionTitle content="All Product" />
      <section className="products-container">
        {products.map((product, index) => {
          if (index + 1 > page * 6 - 6 && index + 1 <= page * 6) {
            return (
              <ProductCard
                key={index}
                productImage={product.img}
                productName={product.name}
                productPrice={product.price}
              />
            );
          }
        })}
      </section>
      {products.length > 6 ? (
        <Pagination
          className="product-pagination"
          size="large"
          count={Math.ceil(products.length / 6)}
          variant="outlined"
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      ) : (
        ''
      )}
    </Container>
  );
}

export default ProductsContainer;
