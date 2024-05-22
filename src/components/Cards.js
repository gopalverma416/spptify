import React from 'react'
import Card from "../components/Card";

function Cards({ data }) {
   
  return (
    <div className='bg-slate-900'>
      <div className=' pl-13 pt-6 pb-8 text-gray-50 text-3xl'>
        <h1>Browse all</h1>
      </div>
      <div className='flex flex-wrap  h-max  p-1 gap-4 justify-center rounded-lg shadow-lg '>
        {data.map((card) => {
          return <Card key={card.id} {...card}></Card>;
        })}
      </div>
    </div>
  );
}

export default Cards