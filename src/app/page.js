"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [dataSet, setDataSet] = useState([
    { id: "a1", name: "Yoga", category: "Fitness" },
    { id: "a2", name: "Pilates", category: "Fitness" },
    { id: "a3", name: "Zumba", category: "Fitness" },
    { id: "b1", name: "Painting", category: "Art" },
    { id: "b2", name: "Sculpture", category: "Art" },
    { id: "b3", name: "Photography", category: "Art" },
    { id: "c1", name: "Guitar", category: "Music" },
    { id: "c2", name: "Piano", category: "Music" },
    { id: "c3", name: "Singing", category: "Music" },
    { id: "d1", name: "Cooking", category: "Culinary" },
    { id: "d2", name: "Baking", category: "Culinary" },
    { id: "d3", name: "Wine Tasting", category: "Culinary" },
  ]);
  const [filteredDataSet, setFilteredDataSet] = useState(dataSet);
  const categories = ["All", "Fitness", "Art", "Music", "Culinary"];

  useEffect(() => {
    setFilteredDataSet(dataSet);
  }, [dataSet]);

  const handleSearchQuery = (query) => {
    if (query.trim() === "") {
      setSearchResults(filteredDataSet);
    } else {
      setSearchResults(
        filteredDataSet.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredDataSet(dataSet);
    } else {
      setFilteredDataSet(dataSet.filter((item) => item.category === category));
    }
  };

  return (
    <main className="container mx-auto p-4">
      <SearchBar onSearchChange={handleSearchQuery} />
      <div className="my-4">
        <CategoryFilter
          categories={categories}
          onCategorySelect={handleCategoryChange}
        />
      </div>
      <ul className="space-y-2">
        {searchResults.map((item) => (
          <li key={item.id} className="bg-gray-100 p-3 rounded">
            {item.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
