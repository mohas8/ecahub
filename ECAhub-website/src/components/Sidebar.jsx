import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'


const Sidebar = () => {
    const [PopularOpportunities, setPopularOpportunities] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs').then(res => res.json()).then(data => setPopularOpportunities(data.slice(0, 15)))
    }, [])


    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold px-4'>Latest opportunities</h3>
                <div>
                    {
                        PopularOpportunities.slice(0,5).map(opportunity => <div key={opportunity.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{opportunity.title}</h4>
                            <Link to="/" className="text-base pb-2 hover:bg-orange-500 inline-flex items-center py-1">Read More<FaArrowRight className="mt-1 ml-2" /></Link>
                        </div>)
                    }

                </div>
            </div>
                    {/* popular blogs*/}
            <div>
                <h3 className='text-2xl font-semibold px-4 mt-20'>Popular opportunities</h3>
                <div>
                    {
                        PopularOpportunities.slice(6,10).map(opportunity => <div key={opportunity.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{opportunity.title}</h4>
                            <Link to="/" className="text-base pb-2 hover:bg-orange-500 inline-flex items-center py-1">Read More<FaArrowRight className="mt-1 ml-2" /></Link>
                        </div>)
                    }

                </div>
            </div>
        </div >

        

    )
}

export default Sidebar