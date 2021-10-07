import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import Container from '@mui/material/Container';
import ProductCard from '../ProductsContainer/ProductCard';
import 'react-multi-carousel/lib/styles.css';
import SectionTitle from '../common/SectionTitle';
import './style.css';

function RelatedProducts({ relatedCategory }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/products')
      .then((response) => response.data.data)
      .then((data) => {
        setProducts(data.filter(({ category }) => category === relatedCategory));
      })
      .catch((err) => setError(err.response.data.Error));
  }, []);

  return (

    <Container style={{ width: '80%' }}>
      <SectionTitle content='Related Product' />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        className=""
        dotListClass=""
        infinite
        itemClass="related-card"
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
  >
    {products.map(({ img, name, price }) => <ProductCard productImage={img} productName={name} productPrice={price} />)}

  </Carousel>
</Container>
  );
}

export default RelatedProducts;
