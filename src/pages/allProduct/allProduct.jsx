import { useEffect, useState } from "react";
import ProductList from "../../components/cards";
import { useGetBrandsQuery, useGetCategoriesQuery, useGetProductsQuery } from "../../services/api";

const AllProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState(200);

  const { data: brandsData, error: brandsError, isLoading: brandsLoading } = useGetBrandsQuery();
  const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery();
  const { data: productsData, error: productsError, isLoading: productsLoading } = useGetProductsQuery();

  useEffect(() => {
    if (categoriesData) setCategories(categoriesData.data);
  }, [categoriesData]);

  useEffect(() => {
    if (productsData) setProducts(productsData.data);
  }, [productsData]);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    filterProducts(id, selectedBrands, priceRange);
  };

  const handleBrandChange = (brandName) => {
    const updatedBrands = selectedBrands.includes(brandName)
      ? selectedBrands.filter((brand) => brand !== brandName)
      : [...selectedBrands, brandName];
    setSelectedBrands(updatedBrands);
    filterProducts(selectedCategory, updatedBrands, priceRange);
  };

  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    setPriceRange(value);
    filterProducts(selectedCategory, selectedBrands, value);
  };

  const filterProducts = (categoryId, brands, price) => {
    if (!productsData || !Array.isArray(productsData.data)) return;

    let filteredProducts = productsData.data;

    if (categoryId) {
      filteredProducts = filteredProducts.filter((product) => product.categoryId === categoryId);
    }

    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) => brands.includes(product.brandName));
    }

    filteredProducts = filteredProducts.filter((product) => product.price <= price);

    setProducts(filteredProducts);
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    let sortedProducts = [...products];

    if (sortValue === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  if (categoriesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }

  if (categoriesError) {
    return <div>No categories available</div>;
  }

  return (
    <div className="flex flex-row sm:flex-col p-4">
      <aside className="w-1/4 sm:w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-4 md:mb-0">
        <section>
          <h1 className="text-xl font-bold mb-4">Category</h1>
          <ul className="border-b-2 border-t-2 border-black mb-4">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedCategory === category.id ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.categoryName}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Brands</h1>
          {brandsLoading ? (
            <p>Loading brands...</p>
          ) : brandsError ? (
            <p>Error fetching brands: {brandsError.message}</p>
          ) : brandsData && brandsData.data.length > 0 ? (
            brandsData.data.map((brand) => (
              <div key={brand.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="brand"
                  value={brand.brandName}
                  className="mr-2"
                  checked={selectedBrands.includes(brand.brandName)}
                  onChange={() => handleBrandChange(brand.brandName)}
                />
                {brand.brandName}
              </div>
            ))
          ) : (
            <p>No brands available</p>
          )}
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Price Range</h1>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange} 
            onChange={handlePriceChange} 
            name="price" 
            className="w-full" 
          />
          <span className="block text-gray-700 dark:text-gray-300 mt-2">
            Price: $0 - ${priceRange}
          </span>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Sort By</h1>
          <select 
            name="sort" 
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Filter By Color</h1>
          {["red", "blue", "green"].map((color) => (
            <div key={color} className="flex items-center mb-2">
              <input type="checkbox" name="color" value={color} className="mr-2" />{" "}
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </div>
          ))}
        </section>
      </aside>

      <main className="w-3/4 sm:w-full p-4">
        {productsLoading ? (
          <p>Loading products...</p>
        ) : productsError ? (
          <p>Error fetching products: {productsError.message}</p>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
};

export default AllProduct;
