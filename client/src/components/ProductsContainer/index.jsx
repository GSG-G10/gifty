import { useState } from "react";
import Container from "@mui/material/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "./ProductCard";
import Pagination from "@mui/material/Pagination";

import "./style.css";

function ProductsContainer({ products }) {
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
      <Pagination
        className="product-pagination"
        size="large"
        count={products.length / 6}
        variant="outlined"
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </Container>
  );
}

export default ProductsContainer;
