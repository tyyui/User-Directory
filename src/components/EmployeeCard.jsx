import React from  'react';


function EmplyeeCard ({name, image, dept, email, phone}) {
    return (
        <div className='md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300'>
            <img 
                style={{maxWidth: '100px'}}
                className='rounded-full shadow-md border border-blue-300'
                src={image}
                alt={name}
            />
            <p className='font-bold text-md'>{name}</p>
            <p>{dept}</p>
            <p className='text-blue-800'>{email}</p>
            <p>{phone}</p>
        </div>
    )
} 

export default EmplyeeCard;