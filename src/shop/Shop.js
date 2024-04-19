import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from "../products.json";
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults = "Showing 01-12 of 139 Results";

function Shop() {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate indexes of products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  //filter products based on category
  const [selectedCategory,setSelectedCategory]=useState("All")
  const menuItems=[...new Set(Data.map((Val)=>Val.category))]
  
  const filterItem=(curcat)=>{
    const newItem=Data.filter((newVal)=>{
      return newVal.category===curcat
    })

    setSelectedCategory(curcat)
    setProducts(newItem)
  }
  
  return (
    <div>
      <PageHeader title="Our shop Page" curPage="Shop" />
      <div className='shop-page padding-tb'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridactive" : "listActive"}`}>
                    <button className='grid' onClick={() => setGridList(true)}>
                      <i className='icofont-ghost'></i>
                    </button>
                    <button className='list' onClick={() => setGridList(false)}>
                      <i className='icofont-listine-dots'></i>
                    </button>
                  </div>
                </div>
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>

                <Pagination 
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className='col-lg-4 col-12'>
             <aside>
              <Search products={products} GridList={GridList} />
              <ShopCategory 
              filterItem={filterItem}
              setItem={setProducts}
              menuItems={menuItems}
              setProducts={setProducts}
              selectedCategory={selectedCategory}
              />
              <PopularPost />
              <Tags />
             </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
