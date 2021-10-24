import React from 'react';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import ProductList from '../components/productList/ProductList';
import { useGlobalContext } from '../context';

function Welcome() {
  const { loading } = useGlobalContext();
  return (
    <>
      
      <ProductList />
    </>
  );
}

export default Welcome;
