import React from 'react';
// import { categoryList, ratingList } from '../../../constants';

import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import './styles.css';
const categoryList = [
  {
    id: 0,
    value: `all`,
    label: `all`,
  },
  {
    id: 1,
    value: `men's clothing`,
    label: `mem's clothing`,
  },
  {
    id: 2,
    value: 'electronics',
    label: 'electronics',
  },
  {
    id: 3,
    value: `women's clothing`,
    label: `women's clothing`,
  },


]

const FilterPanel = ({
  minprice,
  maxprice,
  selectedCategory,
  selectCategory,
  selectedPrice,
  changePrice,
 
}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Category</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
       
      />
    </div>
   
    <div className='input-price' >
      <p className='label-range'>Price Range</p>
      <SliderProton minprice={minprice} maxprice={maxprice} value={selectedPrice} changePrice={changePrice} />
    </div>
   
  </div>
);

export default FilterPanel;
