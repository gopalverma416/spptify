import React from 'react'

const Card = ({ id, name, image }) => {
    return (
      <div className="h-96 w-96 relative rounded-lg object-cover object-center">
        <img src={image} alt={name} className="w-full h-full object-cover object-center cursor-pointer" />
        <div className="absolute inset-0  "> {/* New caption container */}
          <p className="text-white font-serif font-bold text-lg rounded p-2">{name}</p> {/* Caption content */}
        </div>
      </div>
    );
  };
  
  export default Card;