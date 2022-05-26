import React from 'react';

const Projects = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center mt-28 mb-10'>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
                <h1 className='text-gray-500 text-2xl font-medium font-serif'>Recent Projects</h1>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
            </div>
            <div className='grid grid-cols-3 gap-x-5 gap-y-3'>
                <div className="w-80 h-60 text-center flex flex-col items-center justify-center border border-gray-300 relative z-20">skill-1</div>
                <div className="w-80 h-60 text-center flex flex-col items-center justify-center border border-gray-300 relative z-20">skill-2</div>
                <div className="w-80 h-60 text-center flex flex-col items-center justify-center border border-gray-300 relative z-20">skill-3</div>
            </div>
        </div>
    );
};

export default Projects;