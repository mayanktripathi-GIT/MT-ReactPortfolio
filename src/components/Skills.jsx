import React from 'react';
// import html from "../assets/html.png" 
// import css from "../assets/css.png" 
// import javascript from "../assets/javascript.png" 
// import react from "../assets/react.png" 
// import github from "../assets/github.png" 
// import nodejs from "../assets/nodejs.png" 
// //import mongodb from "../assets/mongodb.png" 
// import awslogo from "../assets/awslogo.png" 
// //import Django from "../assets/Django.png" 
// import nintex from "../assets/nintex.png" 
// // import Mongodb from "../assets/mongodb.png" 
// // import graphql from "../assets/graphql.png" 


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-1 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img src={html} alt =""/> */}
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {/* <img src={css} alt =""/> */}
                  <p className='my-4'>CSS OR TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {/* <img src={javascript} alt =""/> */}
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img src={react} alt =""/> */}
                  <p className='my-4'>REACT JS & KNOCKOUT JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img src={github} alt =""/> */}
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img src={nodejs} alt =""/> */}
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   {/* <img src={mongodb} alt =""/> */}
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   {/* <img src={awslogo} alt =""/> */}
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img src={Django} alt =""/> */}
                  <p className='my-4'>EXPRESS JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {/* <img src={nintex} alt =""/> */}
                  <p className='my-4'>SharePoint Nintex</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {/* <img src={Mongodb} alt =""/> */}
                  <p className='my-4'>HIVE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img src={graphql} alt =""/> */}
                  <p className='my-4'>REACT 18</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;