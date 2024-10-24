import { useEffect, useState } from "react";
import { CategoryService, Category } from "../service/categories.service";

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categoryService = new CategoryService();

    const fetchCategories = async () => {
      try {
        const response = await categoryService.getCategories();
        setCategories(response);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
