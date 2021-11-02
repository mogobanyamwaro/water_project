import React, { Fragment } from 'react';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import ProductList from '../components/productList/ProductList';

function Welcome() {
  return (
    <>
      <FeaturedInfo />
      <ProductList />
    </>
  );
}

export default Welcome;
