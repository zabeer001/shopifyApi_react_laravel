import { useState } from 'react';
import { TextField, Button, FormLayout } from '@shopify/polaris';

function ProductForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission to Laravel backend
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ title, description, price, productType }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data); // You can handle success or error here
  };

  return (
    <FormLayout>
      <TextField
        label="Product Title"
        value={title}
        onChange={(value) => setTitle(value)}
      />
      <TextField
        label="Product Description"
        value={description}
        onChange={(value) => setDescription(value)}
        multiline
      />
      <TextField
        label="Price"
        value={price}
        onChange={(value) => setPrice(value)}
        type="number"
      />
      <TextField
        label="Product Type"
        value={productType}
        onChange={(value) => setProductType(value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </FormLayout>
  );
}

export default ProductForm;
