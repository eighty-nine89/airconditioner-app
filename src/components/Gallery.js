import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const Gallery = () => {
  return (
    <div>
        <ScrollReveal>
        <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:mb-10 lg:px-52 xl:px-80 mx-auto'>
          <div className='text-center'>
            <Link to={'/gallery'}><h1 className='text-3xl font-pt-serif font-light capitalize'>our gallery</h1></Link>
            <hr className='mt-5 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal animationClass="animate-slide-left" threshold={0.2} delay={300}>
        <div className='backgroundImg mt-16 mb-16 px-4 sm:px-10 lg:px-32 xl:px-80'>
          <div className='gallery grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            {["mega1.jpg", "refrigerator.jpg", "gasrepair.jpg", "ac1.avif", "acrepairs.jpg", "openac.jpg"].map((img, index) => (
              <div className='cardImg' key={index}>
                <figure>
                  <img src={`../assets/gallery/${img}`} alt='Preview' className='w-full h-auto rounded-lg shadow-md' />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default Gallery