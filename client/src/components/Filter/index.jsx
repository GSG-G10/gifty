import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  ButtonGroup,
  Button,
  InputBase,
  Slider,
  Popover,
  Typography,
} from '@material-ui/core';
import './style.css';

function Filter({ products, setFilterProducts }) {
  const [category, setCategory] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [searchPop, setSearchPop] = useState(null);
  const [pricePop, setPricePop] = useState(null);

  const openS = Boolean(searchPop);
  const openP = Boolean(pricePop);
  const searchId = openS ? 'search-popover' : undefined;
  const priceId = openP ? 'price-popover' : undefined;

  const handleSearchPopClick = (event) => setSearchPop(event.currentTarget);
  const handleSearchPopClose = () => setSearchPop(null);
  const handlePricePopClick = (event) => setPricePop(event.currentTarget);
  const handlePricePopClose = () => setPricePop(null);
  const handleSearchChange = (e) => setSearchValue(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.textContent);
  const handleMinPrice = (value) => setMinPrice(value);
  const handleMaxPrice = (value) => setMaxPrice(value);

  useEffect(() => {
    setFilterProducts((prev) => {
      const newState = products.filter(
        (elem) => elem.price >= minPrice
          && elem.price <= maxPrice
          && (category !== 'all'
            ? elem.category === category
            : elem.category === elem.category)
          && (searchValue
            ? elem.name.includes(searchValue)
            : elem.name === elem.name),
      );
      return newState;
    });
  }, [category, searchValue, minPrice, maxPrice]);

  return (
    <>
      <div className="filter-container">
        <div className="search-price-container">
          <Button
            aria-describedby={searchId}
            onClick={handleSearchPopClick}
            style={{
              fontWeight: 600,
              backgroundColor: 'rgb(167 148 193 / 38%)',
              minWidth: 'fit-content',
            }}
          >
            <SearchIcon />
          </Button>
          <Popover
            id={searchId}
            open={openS}
            anchorEl={searchPop}
            onClose={handleSearchPopClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography>
              <div className="search-pop">
                <InputBase
                  onChange={handleSearchChange}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Typography>
          </Popover>

          <Button
            aria-describedby={priceId}
            onClick={handlePricePopClick}
            style={{
              fontWeight: 600,
              backgroundColor: 'rgb(167 148 193 / 38%)',
              marginLeft: '10px',
              textTransform: 'capitalize',
            }}
          >
            Price <KeyboardArrowDownOutlinedIcon />
          </Button>
          <Popover
            id={priceId}
            open={openP}
            anchorEl={pricePop}
            onClose={handlePricePopClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography>
              <div className="price-pop">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography id="discrete-slider-custom" gutterBottom>
                    Min Price:
                  </Typography>
                  <Slider
                    defaultValue={0}
                    max={500}
                    getAriaValueText={handleMinPrice}
                    step={10}
                    valueLabelDisplay="auto"
                    style={{
                      width: '72%',
                      color: '#a794c1',
                    }}
                  />
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography id="discrete-slider-custom" gutterBottom>
                    Max Price:
                  </Typography>
                  <Slider
                    defaultValue={500}
                    max={500}
                    getAriaValueText={handleMaxPrice}
                    aria-labelledby="discrete-slider-custom"
                    step={10}
                    valueLabelDisplay="auto"
                    style={{ width: '72%', color: '#a794c1' }}
                  />
                </div>
              </div>
            </Typography>
          </Popover>
        </div>

        <ButtonGroup
          onClick={handleCategoryChange}
          aria-label="contained primary button group"
        >
          <Button
            style={{ border: 'none' }}
            classes={{
              label: category === 'all' ? 'active-category' : 'category-btn',
            }}
          >
            all
          </Button>
          <Button
            style={{ border: 'none' }}
            classes={{
              label:
                category === 'flowers' ? 'active-category' : 'category-btn',
            }}
          >
            flowers
          </Button>
          <Button
            style={{ border: 'none' }}
            classes={{
              label:
                category === 'accessories' ? 'active-category' : 'category-btn',
            }}
          >
            accessories
          </Button>
          <Button
            style={{ border: 'none' }}
            classes={{
              label:
                category === 'perfumes' ? 'active-category' : 'category-btn',
            }}
          >
            perfumes
          </Button>
          <Button
            style={{ border: 'none' }}
            classes={{
              label: category === 'sweets' ? 'active-category' : 'category-btn',
            }}
          >
            sweets
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Filter;
