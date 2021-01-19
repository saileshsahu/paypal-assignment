import React, { useState } from "react";
import Carousel from "./components/Carousel";
import { Layout, Filter, FilterTitle, MainTitle } from "./style.js";
import { products } from "./datastore/store";
import { categories } from "./constants/constant";
import { capitalizeLetters } from "./utils/common.util";

const App = () => {
  const [selectedCategory, setCategory] = useState("all");
  return (
    <Layout>
      <MainTitle>Assignment</MainTitle>
      <Filter>
        <FilterTitle>Filter by </FilterTitle>
        <select onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => {
            return (
              <option value={category}>{capitalizeLetters(category)}</option>
            );
          })}
        </select>
      </Filter>
      <Carousel data={products} filter={selectedCategory} />
    </Layout>
  );
};

export default App;
