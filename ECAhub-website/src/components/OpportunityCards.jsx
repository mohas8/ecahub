import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const OpportunityCards = ({ opportunities, currentPage, selectedCategory, pageSize }) => {
    const filteredOpportunities = opportunities
        .filter(opportunity => !selectedCategory || opportunity.category === selectedCategory)
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    console.log(filteredOpportunities);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filteredOpportunities.map(opportunity => <Link to={`/blogs/${opportunity.id}`}key={opportunity.id} className='p-5 shadow-lg rounded cursor-pointer'>
                    <div>
                        <img src={opportunity.image} alt="" className='w-full' />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{opportunity.title}</h3>
                    <p className='mt-2 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{opportunity.author}</p>
                    <p className='mb-2 text-gray-500'> Published: {opportunity.published_date}</p>

                </Link>)
            }
        </div>
    )
}

export default OpportunityCards