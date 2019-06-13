import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../ProductList';

class Products extends Component {
  render() {
    return (
        <ProductList items={this.props.items} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products
  }
};

export default connect(mapStateToProps)(Products);
