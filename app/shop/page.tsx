"use client";
import Image from "next/image";
import { useState } from "react";
import "@/shop/styles.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    imageUrl: "",
    price: 23.99,
    category: "Category 1",
  },
];

export default function Shop() {
  const [searchItem, setSearchItem] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchItem.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li onClick={() => setSelectedCategory("All")}>All</li>
          <li onClick={() => setSelectedCategory("Category 1")}>Category 1</li>
          <li onClick={() => setSelectedCategory("Category 2")}>Category 2</li>
        </ul>
      </div>

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <div className="sortOptions">
        <label htmlFor="sort">Sort by price:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="recommended">Recommended</option>
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
      </div>

      <div className="productList">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Image src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No product found</p>
        )}
      </div>
    </>
  );
}
