import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import Sidebar from './Sidebar';

const SingleOpportunity = () => {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];

    console.log(data);
    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>

                {/* opportunity  details*/}
                <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                    <div className='lg:w-3/5 mx-auto'>
                        <div>
                            <img src={image} alt="" className='w-full mx-auto rounded' />
                        </div>

                        <h2 className='text-3xl font-bold mt-8 text-blue-500 cursor-pointer'>{title}</h2>
                        <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'></FaUser> {author} | {published_date}</p>
                        <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'></FaClock>{reading_time}</p>
                        <p className='text-sm text-gray-500 mb-6'>{content}</p>


                        <div>
                            <div>
                                <h2>Event Details</h2>
                                <p>Event Date: 01-03 July, 2024<br />
                                    Event Time: 9:00 AM - 6:00 PM<br />
                                    Event Location: Daffodil International University, Daffodil Smart City, Birulia, Savar, Dhaka-1216, Bangladesh
                                </p>
                                <main>
                                    <div id="home">
                                        <h1>4th International Robo Tech Olympiad - 2024</h1>
                                        <h2>Smart Cities of Tomorrow</h2>
                                        <p>Registration Start : 01 April, 2024<br />
                                            Registration End : 30 May, 2024<br />
                                            <strong>Take advantage of our Early Bird Registration, available until May 30, 2024. After the deadline, penalties may be applied.</strong>
                                        </p>
                                        <button onClick={() => window.location.href = 'https://robotecholympiad.org/'}>REGISTER NOW</button>
                                        <p>Do you need Pickup Service?<br />
                                            Your Location: Daffodil International University Campus
                                        </p>
                                    </div>

                                    <div id="another-event">
                                        <h2>5th International Science & Robotics Olympiad 2024</h2>
                                        <p>Registration is going on<br />
                                            Venue: 1876 Wallace Str, Regina, SK, S4N, Canada.<br />
                                            The top 10 winners from the Project Showcase and Idea Competition at the 4th International Olympiad will receive invitations to participate in this Olympiad.
                                        </p>
                                        <button onClick={() => window.location.href = 'https://robotecholympiad.org/'}>REGISTER NOW</button>
                                    </div>

                                    <div id="about">
                                        <h2>About</h2>
                                        <p>Robo Tech Valley and Daffodil International University have teamed up to host the 4th International Robo Tech Olympiad, focusing on 'Smart Cities of Tomorrow'. Concerns over energy consumption, waste management, and traffic congestion have arisen due to rapid urbanization; these issues align with the Sustainable Development Goals (SDGs), especially Goal 11: Sustainable Cities and Communities. This event seeks to promote smart technology and robotics as solutions for improving urban resilience, efficiency, and quality of life.</p>
                                        <p>Come and be a part of the International Robo Tech Olympiad 2024 at Daffodil International University. We are delighted to have you here.</p>
                                    </div>

                                    <div id="venue">
                                        <h2>Venue</h2>
                                        <p>Daffodil International University, Daffodil Smart City, Birulia, Savar, Dhaka-1216, Bangladesh</p>
                                    </div>

                                    {/* Further content can be added similarly with appropriate sections and formatting */}
                                </main>

                                <footer>
                                    <p>© 2024 - Robo Tech Valley. All Rights Reserved.</p>
                                </footer>
                            </div>

                        </div>
                    </div>
                    <div className='lg:w-1/2 mx-auto'>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleOpportunity
