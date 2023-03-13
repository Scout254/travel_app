import React from 'react';

function TrendingCard({data}) {
  return (
    <div className=" relative w-[380px] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/2344572/pexels-photo-2344572.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="h-72 object-cover"
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">{data.name}</h1>
        <div className="flex space-x-4 mb-4">
          <h2 className="">4 activities</h2>
          <h2 className="">12 places</h2>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">${data.price}</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
