import React from 'react';
type DestinationCardProps={
  data:{
    name:string;
  image:string;
  }
}
function DestinationCard({ data }:DestinationCardProps) {
  return (
    <div className="relative w-[320px]">
      <img src={data.image} alt="" className="h-72 object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h1 className="text-white font-semibold">{data.name}</h1>
        <div className="flex items-center mt-2">
          <h2 className="bg-gray-200 h-6 w-6 flex items-center justify-center rounded-md text-black font-bold mr-2">
            {3.7}
          </h2>
          <p className="text-white text-sm">stars </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
