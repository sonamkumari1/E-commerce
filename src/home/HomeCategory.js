import React from 'react';
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'assets/images/category/01.jpg',
    imgAlt: 'DSLR Camera',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    imgUrl: 'assets/images/category/02.jpg',
    imgAlt: 'Shoes',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
  },
  {
    imgUrl: 'assets/images/category/03.jpg',
    imgAlt: 'Photography',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
  },
  {
    imgUrl: 'assets/images/category/04.jpg',
    imgAlt: 'Formal Dress',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    imgUrl: 'assets/images/category/05.jpg',
    imgAlt: 'Colorful Bags',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: 'assets/images/category/06.jpg',
    imgAlt: 'Home Decor',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },
];

function HomeCategory() {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle'>{subTitle}</span>
          <h2 className='title'>{title}</h2>
          <Link to="/shop" className="btn btn-primary">{btnText}</Link>
        </div>

         {/* section card */}

        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {
              categoryList.map((val, i) => (
                <div key={i} className='col'>
                  <Link to="/shop" className="category-item">
                    <div className='category-inner'>

                      {/* image thumbnail */}

                      <div className='category-thumb'>
                        <img src={val.imgUrl} alt={val.imgAlt} />
                      </div>
                       {/* content */}
                      <div className='category-content'>
                        <div className='cate-icon'>
                          <i className={val.iconName}></i>
                        </div>
                        <Link to="/shop"><h6>{val.title}</h6></Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>

           {/* btn get started */}
           <div className='text-center mt-5'>
            <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
           </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
