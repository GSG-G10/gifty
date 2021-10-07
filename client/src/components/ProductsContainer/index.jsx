import { useState } from 'react';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import ProductCardSkeleton from '../ProductCardSkeleton';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';
import Filter from '../Filter';

import './style.css';

function ProductsContainer({
  products, setFilterProducts, filterdProducts, loading,
}) {
  const [page, setPage] = useState(1);
  return (
    <Container maxWidth="md">
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '40px 0',
      }}>
        <SectionTitle content="All Product" />
        <Filter products={products} setFilterProducts={setFilterProducts} />
      </Box>
      <section className="products-container">
      {filterdProducts.length ? !loading
        ? filterdProducts.map((product, index) => {
          if (index + 1 > page * 6 - 6 && index + 1 <= page * 6) {
            return (
              <ProductCard
                key={index}
                productID={product.id}
                productImage={product.img}
                productName={product.name}
                productPrice={product.price}
              />
            );
          }
        }) : [1, 2, 3, 4, 5, 6].map((key) => <ProductCardSkeleton key={key} />) : <h2 style={{ textAlign: 'center', gridColumn: '1/4' }}>No Data to show!</h2>}

      </section>
      {filterdProducts.length > 6 ? (
        <Pagination
          className="product-pagination"
          size="large"
          count={Math.ceil(filterdProducts.length / 6)}
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
