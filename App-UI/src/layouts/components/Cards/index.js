import React from "react";
import sunset from "./../../../assets/sunset.jpg";

export default function Cards({ ...otherProps }) {
  return (
    <div className='flex flex-row flex-wrap py-14 justify-center '>
      <div
        className='
      w-full lg:w-3/6 xl:w-4/12
      px-2.5 mb-5'
      >
        <div className='bg-white'>
          <div>
            <img src={sunset} className='w-full' alt='sunset' />
          </div>
          <div className='p-2.5'>
            <ul>
              <li className='list-none'>
                <span className='font-bold text-base'>Title</span>
              </li>
              <li className='list-none'>
                <span className='text-base'>Desc</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className='
      w-full lg:w-3/6 xl:w-4/12
      px-2.5 mb-5'
      >
        <div className='bg-white'>
          <div>
            <img src={sunset} className='w-full' alt='sunset' />
          </div>
          <div className='p-2.5'>
            <ul>
              <li className='list-none'>
                <span className='font-bold text-base'>Title</span>
              </li>
              <li className='list-none'>
                <span className='text-base'>Desc</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
