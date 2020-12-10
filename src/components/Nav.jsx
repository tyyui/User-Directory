import React from 'react';

function NavBar ({onSearch, search, arrbyName, arrbyDept}) {
    return (
        <div className='md:flex justify-between'>
            <div>
                <button onClick={arrbyName} className='bg-white focus:bg-blue-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 px-8 py-1 mr-4 hover:bg-blue-500 hover:text-white'>Name</button>
                <button onClick={arrbyDept} className='bg-white focus:bg-blue-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 px-8 py-1 hover:bg-blue-500 hover:text-white'>Department</button>
            </div>
            <form>
                <input 
                    value={search}
                    onChange={onSearch}
                    className='shadow'
                    type='text'
                    placeholder='search for employee'
                />
            </form>
        </div>

    )
}

export default NavBar;