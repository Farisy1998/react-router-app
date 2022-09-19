import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.replace('/products')
    // In case of push(), a new path or url space/memory is created in the browser's history
    // stack. But in case of replace(), the new path or url is relplaced with the
    // current url in the stack to where the top of the stack is pointing.
  };

  render() {
    return (
      <div>
        <h1>Product Details - { this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
