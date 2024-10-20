import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = categoryId 
          ? `https://fakestoreapi.com/products/category/${categoryId}` 
          : 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
          <p>{product.description}</p>
          <Link to={`/item/${product.id}`}>
            <button>Ver Detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;

