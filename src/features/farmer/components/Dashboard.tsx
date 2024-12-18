import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../productSlice';
import { Product } from '../types';

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
  };

  const handleUpdateProduct = (product: Product) => {
    dispatch(updateProduct(product));
  };

  const handleDeleteProduct = (productId: string) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div>
      <h1>Farmer Dashboard</h1>
      <button onClick={() => handleAddProduct({ /* product data */ })}>Add Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleUpdateProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}; 