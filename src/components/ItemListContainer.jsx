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
        // Llamada a la API para obtener productos
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
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Link to={`/item/${product.id}`}>Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;

