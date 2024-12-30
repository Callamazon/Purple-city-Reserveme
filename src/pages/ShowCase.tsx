import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from '../assets/pexels-camcasey-1722183.jpg';
import pic2 from '../assets/pexels-pixabay-290275.jpg';

const locations = [
  {
    id: 1,
    name: 'Cucrid Auditorium',
    description: 'Experience the best seating and air conditioning for ultimate comfort.',
    image: pic2, // Replace with your image path
    detailPath: '/cucrid-auditorium',
  },
  {
    id: 2,
    name: 'HSL Studio',
    description: 'A studio with the best lighting and sound system for your events.',
    image: pic1, // Replace with your image path
    detailPath: '/hsl-studio',
  },
];

const ShowCase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {locations.map((location) => (
        <div
          key={location.id}
          className="relative group overflow-hidden"
        >
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-3xl text-white font-bold mb-4">
              {location.name}
            </h2>
            <p className="text-white mb-6">{location.description}</p>
            <button
              onClick={() => navigate(`/location`)}
              className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-500 transition"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
