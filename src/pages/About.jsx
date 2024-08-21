import React from 'react'
import '../styles/About.css'
import bgimg from '../assets/img/about.png'
import mixer from '../assets/img/about2.jpg'
import Footer from '../components/Footer'


function About() {
  return (
    <>
      <div>
        <div className='bg-img'></div>
        <div className="about">
          <div className="aboutContainer">
            <div className="allcontent">
              <div className="first-section">
                <div className='content-about'>
                  <h1> BEPI</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores magnam cumque nam autem enim beatae minus adipisci praesentium distinctio! Fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur velit corporis doloremque commodi ad nostrum deserunt repellendus eligendi exercitationem.</p>
                </div>
                <img src={bgimg} alt="img" className='aboutImg' />
              </div>

              <div className="second-section">
                <div className="team-info">
                  <h3>Music Team Information</h3>
                  <p>Bepi - Singer</p>
                  <p>Budi - Drum</p>
                  <p>etc - etc</p>
                </div>
                <div className="company-info">
                  <h3>Company Information</h3>
                  <p>Address</p>
                  <p>Email</p>
                  <p>Phone Number</p>
                </div>
              </div>

              <section className="bottom-content">
                <div className="image-container">
                  <img src={mixer} alt="Mixer" className="mixer-image" />
                </div>
                <div className="additional-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pharetra integer maecenas ipsum sit aliquam lectus urna pulvinar. Malesuada morbi faucibus ut scelerisque est justo placerat nunc. Leo enim tellus a venenatis quis lobortis. Nec sit feugiat lorem sed adipiscing. Posuere cursus velit tellus in scelerisque est feugiat. Nec morbi aliquet nisi cras eget et quis. Gravida consequat risus maecenas tellus amet. Tincidunt lobortis vulputate tortor felis nisi ipsum sem. Eget sit in arcu purus donec arcu aliquet tortor.
                  </p>
                  <p>
                    Consequat et amet condimentum enim aliquet faucibus ut nisl erat. Pulvinar vitae etiam tempus pellentesque non. Nisl augue enim etiam maecenas cursus est tellus malesuada nisl. Cursus odio massa avelit venenatis pretium. Nibh nisl non nibh in ut vulputate neque quam. Sed cursus augue odio amet. Donec velit id volutpat parturient viverra aenean lobortis venenatis scelerisque. Eget adipiscing volutpat nulla tortor sit eu cras. Netus vulputate id ullamcorper acctor. Sapien libero turpis ut bibendum vehicula nullam nunc hendrerit. Pellentesque molestie a nulla auctor semper pellentesque lectus a. Laoreet sed nunc lacus has. Scelerisque id varius accumsan odio hendrerit urna. Commodo malesuada placerat quis sed viverra ut scelerisque. Ura eu nunc feugiat facilisis egestas scelerisque venenatis eu quis.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </div>


    </>
  );
}

export default About