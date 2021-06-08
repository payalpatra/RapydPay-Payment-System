import React from 'react';
import { InfoSection, ProductCard } from '../../components';
import { homeObjOne } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <ProductCard/>
    </>
  );
}

export default Products;
