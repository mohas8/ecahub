import React, { useEffect, useState } from "react";
import OpportunityCards from "./OpportunityCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // number of opportunities per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchOpportunities() {
      let url = `http://localhost:5000/blogs?_page=${currentPage}&_limit=${pageSize}`;

      // if a category is selected, filter the opportunities by category
      if (selectedCategory) {
        url = `http://localhost:5000/blogs?category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setOpportunities(data);
    }

    fetchOpportunities();
  }, [currentPage, pageSize, selectedCategory]);

  //page changing buttons
  const handlePageChange = (pagenumber) => {
    setSelectedCategory
    setCurrentPage(pagenumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (


    <div>


      {/* category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}
          activeCategory={activeCategory} />
      </div>


      {/* opportunitycard section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/*blog cards components*/}
        <Sidebar />
        <OpportunityCards opportunities={opportunities} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} opportunities={opportunities} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default Opportunities;
