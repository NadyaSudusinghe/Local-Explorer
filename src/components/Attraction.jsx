import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';

const Attraction = ({ attraction }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = attraction.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    return (
        <div className='bg-white rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='mb-3'>
                    <img className='object-cover rounded-lg' src={attraction.image} alt='Local Explorer' />
                </div>

                <h1 className='mb-1 font-bold text-center text-red-600' style={{ fontSize: '1.3rem' }}>{attraction.name}</h1>
                <div className='mb-5'>{description}</div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? 'Less' : 'More'}</button>

                

                <div className='border border-gray-100 mb-5'></div>

                <div className='flex flex-col lg:flex-row justify-between mb-4'>
                    
                    <div className='text-orange-700 mb-3'>
                        <FaMapMarker className='inline text-lg mb-1 mr-1' />
                        {attraction.city}
                    </div>
                    <Link
                        to={`/jobs/${attraction.id}`}
                        className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Attraction