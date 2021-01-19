import React, { useEffect, useState } from "react";
import { Container, Button, Layout } from "./style";
import Item from "../Item";

const Carousel = (props) => {
  const allProducts = props.data;
  const [filteredProducts, setFilters] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    if (props.filter === "all") {
      const initialItems = allProducts.filter((item) => item.id <= 3);
      setActiveItems(initialItems);
      setFilters(allProducts);
    } else filterProducts();
  }, [props.filter]);

  const goToNext = () => {
    const currentId = activeItems[2].id;
    if (currentId !== filteredProducts[filteredProducts.length - 1].id) {
      setDirection("right");
      const updatedItems = activeItems.slice(1);
      const currentItem = filteredProducts.find(
        (item) => item.id === currentId + 1
      );
      updatedItems.push(currentItem);
      setActiveItems(updatedItems);
    } else {
      setDirection("reset");
      return;
    }
  };

  const goToPrevious = () => {
    const currentId = activeItems[0].id;
    if (currentId !== filteredProducts[0].id) {
      setDirection("left");
      activeItems.pop();
      const getPreviousItem = filteredProducts.find(
        (item) => item.id === currentId - 1
      );
      const updatedItems = [getPreviousItem, ...activeItems];
      setActiveItems(updatedItems);
    } else {
      setDirection("reset");
      return;
    }
  };

  const resetDirection = () => {
    setDirection("reset");
  };

  const filterProducts = () => {
    const filterProducts = allProducts.filter(
      (item) => item.category === props.filter
    );
    setFilters(filterProducts);
    const updateFilters = [...filterProducts];
    const initialItems = updateFilters.splice(0, 3);
    setActiveItems(initialItems);
  };

  return (
    <Layout>
      <Button onClick={goToPrevious}>
        &#8592; <span>Previous</span>
      </Button>
      <Container>
        {activeItems.map((item) => {
          return (
            <Item
              key={item.id}
              data={item}
              direction={direction}
              resetDirection={resetDirection}
              isCenter={item.id === activeItems[1].id}
            />
          );
        })}
      </Container>
      <Button onClick={goToNext}>
        <span>Next</span> &#8594;
      </Button>
    </Layout>
  );
};

export default Carousel;
