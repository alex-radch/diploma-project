import React, { Component, Fragment } from 'react';
import Product from './Product';

function Products() {
  return (
    <Fragment>
      <Product
        img={'img/outer1.jpg'}
        title={'13 дюймов Обод'}
        cost={'2000 руб.'}
      />
    </Fragment>
  );
}

export default Products;
