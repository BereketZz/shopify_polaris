import React from 'react';
import { observer } from 'mobx-react';
import { FormLayout, TextField, Button, Banner, Page, Card } from '@shopify/polaris';
import productStore from '../stores/ProductStore';

const ProductForm = observer(() => {
  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.submitForm();
  };

  const cardStyle = {
    width: '800px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white'
  };

  const buttonStyle = {
    backgroundColor: '#5c6ac4', // Custom button color
    color: 'white',
    border: 'none'
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width:'100%'
     // Full viewport height
  };
  const headingStyle = {
    fontSize: '2rem', // Larger font size for the heading
    marginBottom: '20px' // Bottom margin for spacing
  };

  return (
    <Page>
      <div style={formContainerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Create Product</h1>
          {productStore.error && (
            <Banner status="critical">{productStore.error}</Banner>
          )}
          {productStore.success && (
            <Banner status="success">{productStore.success}</Banner>
          )}
          <form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                label="Title"
                value={productStore.title}
                onChange={(value) => productStore.setTitle(value)}
                autoComplete="off"
                placeholder="Enter product title"
              />
              <TextField
                label="Price"
                type="number"
                value={productStore.price}
                onChange={(value) => productStore.setPrice(value)}
                autoComplete="off"
                prefix="$"
                placeholder="Enter product price"
              />
              <TextField
                label="Stock Quantity"
                type="number"
                value={productStore.stockQuantity}
                onChange={(value) => productStore.setStockQuantity(value)}
                autoComplete="off"
                placeholder="Enter stock quantity"
              />
              <TextField
                label="Description"
                multiline={4}
                value={productStore.description}
                onChange={(value) => productStore.setDescription(value)}
                autoComplete="off"
                placeholder="Enter product description"
              />
              <Button submit primary style={buttonStyle}>
                Submit
              </Button>
            </FormLayout>
          </form>
        </div>
      </div>
    </Page>
  );
});

export default ProductForm;
