import ProductCard from '../ProductsContainer/ProductCard';
import Carousel from 'react-multi-carousel';
import Container from '@mui/material/Container';
import 'react-multi-carousel/lib/styles.css';
import './style.css';

function RelatedProducts({relatedCategory}) {
const filterdProducts = () => {
  return products.filter(({category}) => {return category === relatedCategory})
}
  return (
    <Container maxWidth="md">
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
              min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
  >
    {filterdProducts().map(({img, name, price}) => <ProductCard productImage={img} productName={name} productPrice={price} />
    )}
    
  </Carousel>
</Container>
  )
}

export default RelatedProducts
