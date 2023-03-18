import React, { useEffect, useState } from 'react';

import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';

import './styles.css';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
 
  const [selectedPrice, setSelectedPrice] = useState([1, 1000]);
 
  
 

  const [list, setList] = useState([])
  const [filter, setFilter] = useState(list)

  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: `men's clothing` },
    { id: 2, checked: false, label: 'jewelery' },
    { id: 3, checked: false, label: 'electronics' },
  ]);


  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      setList(await response.clone().json())
      setFilter(await response.json());
      setResultsFound(true)
     
    
    }
    getProducts();

  }, [])
 
  
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);


  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;

    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (e,value) => {
    setSelectedPrice(value);
  };
  const prices=list.map(product=>product.price)

  const minprice=Math.min(...prices)
  const maxprice=Math.max(...prices)

  console.log('max',typeof maxprice);
  console.log('min',minprice);
  console.log('price',selectedPrice);

  const applyFilters = () => {
    let updatedList = filter;
    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
   
  
    // Category Filter
    if (selectedCategory) {

      if (selectedCategory === 'all') {
        updatedList = updatedList.filter(
          (item) => item.category
        );
      } else {
        updatedList = updatedList.filter(
          (item) => item.category === selectedCategory
        );

      }
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());


    if (cuisinesChecked.length) {

      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

   
  

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    console.log('day la minPrice',minPrice)

    console.log('day la maxPrice',maxPrice)

    updatedList = updatedList.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
    );
   
    setList(updatedList);
    // console.log(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);


  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice,]);
  const Loading = () => {
    return (<>Loading...</>)
  }
  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}

        changeInput={(e) => setSearchInput(e.target.value)}
      />
      
      <div className='home_panelList-wrap '>
        {/* Filter Panel */}
        <div className='home_panel-wrap' >
        
          <FilterPanel
            maxprice={maxprice}
            minprice={minprice}
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            changePrice={handleChangePrice}

          />
        </div>
        
        {/* List & Empty View */}
        <div className='home_list-wrap'>
        
          <h1 style={{textAlign:"center"}}>Products</h1><hr/>
          {resultsFound ? <List list={list} /> : <Loading />}
          
        </div>

      </div>
    </div>
    
  );
};


export default Home;
