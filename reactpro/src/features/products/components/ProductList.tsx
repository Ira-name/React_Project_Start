import { useEffect, useState } from "react";
import { Product, ProductService } from "../service/products.service";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productService = new ProductService();

    const fetchProducts = async () => {
      try {
        const response = await productService.getProducts();
        setProducts(response.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="my-4 text-center">Products List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {product.rating}
                </p>
                <p className="card-text">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
