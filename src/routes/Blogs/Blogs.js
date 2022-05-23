import React from 'react';

const Blogs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 my-16 md:mx-40">

            <div id="multiCollapseExample1">
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    <span className='text-gray-400'>### Answer No. 1</span> <br />
                    <span className='font-medium text-sky-700 text-lg'>The performance of a React Application will be improved by,</span><br />
                    * Keeping component state local where necessary. <br />
                    * Memoizing React components to prevent unnecessary re-renders. <br />
                    * Code-splitting in React using dynamic import() <br />
                    * Windowing or list virtualization in React. <br />
                    * Lazy loading images in React. <br />
                </div>
            </div>

            <div id="multiCollapseExample2">
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    <span className='text-gray-400'>### Answer No. 2</span> <br />
                    <span className='font-medium text-sky-700 text-lg'>There are four main types of state that we need to properly manage in our React apps,</span><br />
                    - Local state, <br />
                    - Global state, <br />
                    - Server state, <br />
                    - URL state
                </div>
            </div>

            <div id="multiCollapseExample1">
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    <span className='text-gray-400'>### Answer No. 3</span> <br />
                    <span className='font-medium text-sky-700 text-lg'>How Prototypal Inheritance works</span><br />
                    It is a method by which an object can inherit the properties and methods of another object. to get and set the Prototype of an object, we use Object. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                </div>
            </div>

            <div id="multiCollapseExample2">
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    <span className='text-gray-400'>### Answer No. 4</span> <br />
                    <span className='font-medium text-sky-700 text-lg'>Suppose, I have an array of products. Each product has a name, price, description, etc. How will I implement a search to find products by name?</span><br />
                    As we need to fetch value from a object which is in an array. So, I'll go with, <br /> products[x].products.name
                </div>
            </div>

            <div id="multiCollapseExample2">
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    <span className='text-gray-400'>### Answer No. 5</span> <br />
                    <span className='font-medium text-sky-700 text-lg'>The purpose of jwt & How it works</span><br />
                    to share security information between two parties — a client and a server. JWT is a token based stateless authentication mechanism. <br />
                    It works in this way that, Server generates a token that certifies user's identity, and sends it to the client. The client will send the token back to the server for each subsequent request, so the server knows the request comes from a particular identity.
                </div>
            </div>
        </div>
    );
};

export default Blogs;