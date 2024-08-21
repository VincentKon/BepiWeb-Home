import React, { useState } from 'react';
import '../styles/Career.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Footer from '../components/Footer'

// importing images
import firstImg from '../assets/img/music-section-images.avif';
import nobgImg from '../assets/img/about.png';
import mc from '../assets/img/career property/MoC.jpg';
import judges from '../assets/img/career property/judges.avif'
import imgABC from '../assets/img/career property/BA/ABC BA 1.jpg';
import imgAeroDili from '../assets/img/career property/BA/Aero Dili.jpg';
import imgAirTimor from '../assets/img/career property/BA/Air Timor 1.jpg';
import imgBintang from '../assets/img/career property/BA/Bintang BA 1.jpg';
import imgSamsung from '../assets/img/career property/BA/Samsung BA 1.jpg';

const carouselImages = [
  { src: imgABC, title: 'ABC', subtitle: '2000 - 2010', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgAeroDili, title: 'AERO Dili', subtitle: '2010 - 2020', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgAirTimor, title: 'Air Timor', subtitle: '2020 - Present', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgBintang, title: 'Bingtang', subtitle: '2020 - Present', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgSamsung, title: 'SAMSUNG', subtitle: '2020 - Present', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' }
];

function Career() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  // Get the previous and next images based on current index
  const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  const nextIndex = (currentIndex + 1) % carouselImages.length;

  return (
    <>
      <div className='bg-img'></div>
      <div className="career">
        <div className="careerContainer">
          <div className='container'>
            {/* Music Section */}
            <section className="section music">
              <h1>🎵 Music</h1>
              <hr className='line' />
              <div className='music-content'>
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Sub Title</h3>
                    <p>2000 - 2010</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium distinctio at illum officiis? Quisquam libero exercitationem sint autem possimus!</p>
                </div>
                <img src={firstImg} className='music-img' />
              </div>
              <div className='music-content'>
                <img src={nobgImg} className='music-img2' />
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Sub Title</h3>
                    <p>2000 - 2010</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </section>

            {/* MC Section */}
            <section className='section mc'>
              <h1 className='right-title'>Master Of Ceremony 🎤</h1>
              <hr className='line' />
              <div className='mc-content'>
                <img src={mc} alt="" className='mc-img' />
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Sub Title</h3>
                    <p>2000 - 2010</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium distinctio at illum officiis? Quisquam libero exercitationem sint autem possimus!</p>
                </div>
              </div>
            </section>

            {/* Influencer Section with Carousel */}
            <section className='section influencer'>
              <h1>🔗 Influencer</h1>
              <hr className='line' />
              <div className='content-influencer'>
                <div className="carousel-container">
                  <div className="carousel">
                    <div className="carousel-item prev" onClick={handlePrev}>
                      <img src={carouselImages[prevIndex].src} alt={`Previous: ${carouselImages[prevIndex].title}`} />
                    </div>

                    <div className="carousel-item active">
                      <img src={carouselImages[currentIndex].src} alt={`Active: ${carouselImages[currentIndex].title}`} />
                    </div>

                    <div className="carousel-item next" onClick={handleNext}>
                      <img src={carouselImages[nextIndex].src} alt={`Next: ${carouselImages[nextIndex].title}`} />
                    </div>
                  </div>
                  <div className="carousel-button">
                    <button onClick={handlePrev}> <GrFormPrevious size={25} /> </button>
                    <button onClick={handleNext}> <MdNavigateNext size={25} /> </button>
                  </div>
                </div>
                <div>
                  <div className='content-header-influencer'>
                    <h3>{carouselImages[currentIndex].title}</h3>
                    <p>{carouselImages[currentIndex].subtitle}</p>
                  </div>
                  <p>{carouselImages[currentIndex].description}</p>
                  <p>{carouselImages[currentIndex].description2}</p>
                </div>
              </div>
            </section>

            <section className='section judges'>
              <h1 className='right-title'>Judges  🎟</h1>
              <hr className='line' />
              <div className='judges-content'>
                <img src={judges} className='judges-img' />
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Sub Title</h3>
                    <p>2000 - 2010</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur laboriosam autem eveniet nisi eaque cupiditate! Voluptates sunt, assumenda officiis recusandae, maxime delectus dolor nihil officia numquam est, velit maiores.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus porro at voluptas officia quibusdam, in quod maxime voluptates optio velit fuga officiis consectetur reprehenderit itaque iure enim unde consequatur vitae laboriosam perspiciatis rem ut. Perspiciatis possimus a dolorem aliquid?</p>
                </div>
              </div>
            </section>
          </div>
        </div >
        <Footer />
      </div >
    </>
  );
}

export default Career;
