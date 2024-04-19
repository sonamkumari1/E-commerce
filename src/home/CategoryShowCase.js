import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Ratting from '../components/Ratting';

const title = "Our Products";

const ProductData = [
{
imgUrl: `assets/images/categoryTab/01.jpg`,
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: 'assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: 'assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: 'assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: 'assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: 'assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: 'assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
];

{/*function CategoryShowCase() {

    const [items,setItem]=useState(ProductData);

    //category based filter

    const filterItem=(categoryItem)=>{
        const updateItem=ProductData.filter((curElem)=>{
          return curElem.cate===categoryItem;
        });
        setItem(updateItem);
    }*/}

    function CategoryShowCase() {

      const [items, setItem] = useState(ProductData);
      const [originalItems, setOriginalItems] = useState(ProductData); // Store original data
  
      // Category based filter
      const filterItem = (categoryItem) => {
          if (categoryItem === "All") {
              setItem(originalItems); // If "All" is selected, set items to original data
          } else {
              const updatedItems = originalItems.filter((curElem) => {
                  return curElem.cate === categoryItem;
              });
              setItem(updatedItems);
          }
      }
  
      useEffect(() => {
          // Store original data when component mounts
          setOriginalItems(ProductData);
      }, []);

    return (
      <div className='course-section style-3 padding-tb'>
        {/* shape */}
        <div className='course-shape one'>
          <img src="src/assets/images/shape-img/icon/01.png" alt="Shape One" />
        </div>
        <div className='course-shape two'>
          <img src="src/assets/images/shape-img/icon/02.png" alt="Shape Two" />
        </div>
  
        {/* main section */}
        <div className='container'>
          {/* section header */}
          <div className='section-header'>
            <h2 className='title'>{title}</h2>
            <div className='course-filter-group'>
              <ul className='lab-ul'>
                <li onClick={() => filterItem("All")}>All</li>
                <li onClick={() => filterItem("Shoes")}>Shoes</li>
                <li onClick={() => filterItem("Bags")}>Bags</li>
                <li onClick={() => filterItem("Phones")}>Phones</li>
                <li onClick={() => filterItem("Beauty")}>Beauty</li>
              </ul>
            </div>
          </div>
  
          {/*  section body  */}
          <div className='section-wrapper'>
            <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-lg-2 row-cols-1 course-filter'>
              {items.map((product) =>
                <div key={product.id} className='col'>
                  <div className='course-item style-4'>
                    <div className='course-inner'>
                      <div className='course-thumb'>
                        <img src={product.imgUrl} alt={product.title} />
                        <div className='course-category'>
                          <div className='course-cate'>
                            <a href="#">{product.cate}</a>
                          </div>
                          <div className='course-review'>
                            <Ratting />
                          </div>
                        </div>
                        {/* Other product information */}
                      </div>
  
                      {/* content  */}
                      <div className='course-content'>
                        <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
                        <div className='course-footer'>
                          <div className='course-author'>
                            <Link to="/" className="ca-name">{product.brand}</Link>
                          </div>
                          <div className='course-price'>
                            {product.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CategoryShowCase;