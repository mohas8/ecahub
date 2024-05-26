import React from 'react';
import { Link } from 'react-router-dom'; // Using react-router-dom for navigation links
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
                {/* About Section */}
                <div className="col-span-2">
                    <img src="/path-to-your-logo.png" alt="ECAhub Logo" className="mb-4 w-48" />
                    <p>Welcome to ECAhub! Your go-to hub for discovering exciting competitions, workshops, courses, scholarships, and internships. We're dedicated to fueling your personal and professional growth by connecting you with endless opportunities.</p>
                    <div className="flex mt-4">
                        <Link to="#" className="mr-2 text-xl"><FaFacebookF /></Link>
                        <Link to="#" className="mr-2 text-xl"><FaInstagram /></Link>
                        <Link to="#" className="mr-2 text-xl"><FaLinkedinIn /></Link>
                        <Link to="#" className="mr-2 text-xl"><FaTwitter /></Link>
                    </div>
                </div>

                {/* Newsletter Subscription Section */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Subscribe for Updates!</h3>
                    <p>Join over 100,000 subscribers to receive weekly summaries of opportunities directly in your inbox.</p>
                    <form className="mt-4">
                        <input type="email" placeholder="Enter your email" className="p-2 w-full text-black" />
                        <button type="submit" className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
