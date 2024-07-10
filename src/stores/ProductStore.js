import { makeAutoObservable } from 'mobx';

class ProductStore {
  title = '';
  price = '';
  stockQuantity = '';
  description = '';
  error = '';
  success = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title) {
    this.title = title;
  }

  setPrice(price) {
    this.price = price;
  }

  setStockQuantity(stockQuantity) {
    this.stockQuantity = stockQuantity;
  }

  setDescription(description) {
    this.description = description;
  }

  validateForm() {
    if (!this.title || !this.price || !this.stockQuantity || !this.description) {
      this.error = 'All fields are required';
      return false;
    }
    this.error = '';
    return true;
  }

  async submitForm() {
    if (!this.validateForm()) {
      return;
    }

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.success = 'Product created successfully';
      this.error = '';

      // Clear the success message after 5 seconds
      setTimeout(() => {
        this.success = '';
      }, 5000);
    } catch (error) {
      this.error = 'Failed to create product';
      this.success = '';
    }
  }
}

const productStore = new ProductStore();
export default productStore;
