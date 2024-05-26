import React from 'react'

const CategorySelection = ({onSelectCategory, activeCategory}) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
            <button onClick={() => onSelectCategory(null)}>All</button>
            {
                categories.map((category) => (
                    <button
                        onClick={() => onSelectCategory(category)}
                        className={`mr-2 space-x-16 ${activeCategory === category ? "active-button": ""}`}
                        key={category}>
                    {category}
                    </button>
                ))
            }
        </div> // Add closing tag for div
    )
}

export default CategorySelection