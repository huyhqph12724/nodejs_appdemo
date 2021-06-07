import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);
  const addProduct = async (item) => {
    //Gọi API và thêm sp
    const response = await fetch('http://localhost:3001/products', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    const data = await response.json();
    //Render ra màn hình
    setProducts([
      ...products,
      item
    ]);
  }
  const removeProduct = async (id) => {
    let confirmRemove = window.confirm('Bạn có chắc muốn xóa sản phẩm?');
    if (confirmRemove) {
      await fetch(`http://localhost:3001/products/${id}`, {
        method:'DELETE'
      });
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    }

  }
  const editProduct = async (product) =>{
    await fetch(`http://localhost:3001/products/${product.id}`, {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  }
  return (
    <div className="App">
      <Routers
        products={products}
        onAdd={addProduct}
        onRemove={removeProduct}
        onEdit={editProduct}
      />
    </div>
  );
}

export default App;
