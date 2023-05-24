import React from 'react'
import { FaFacebookF, FaYoutube,FaInstagram } from "react-icons/fa"
function Footer() {
  return (
    <footer>
        {/* Test Text &copy; */}
        <section className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-6'>
                <h4>Products</h4>
                <ul className='list-unstyled'>
                    <li><a href='#'>Pianos</a></li>
                    <li><a href='#'>Keyboard Instruments</a></li>
                    <li><a href='#'>Guitars, Basses & Amps</a></li>
                    <li><a href='#'>Drums</a></li>

                    <li><a href='#'>Brass & Woodwinds</a></li>
                    <li><a href='#'>Strings</a></li>
                    <li><a href='#'>Percussion</a></li>
                    <li><a href='#'>Marching Instruments</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-6'>
                <h4>Support</h4>
                <ul className='list-unstyled'>
                    <li>Contact Us</li>
                    <li>Yamaha Guarantee for customers</li>
                    <li>MusicCast FAQ</li>

                    <li>Membership FAQ</li>
                    <li>FAQ</li>
                    <li>Firmware / Software Updates</li>
                </ul>
                <br></br>
                <h4>About Yamaha</h4>
                <ul className='list-unstyled'>
                    <li>Corporate Information</li>
                    <li>Corporate Profile Video</li>
                    <li>Yamaha Philosophy</li>

                    <li>Sustainability</li>
                    <li>Investor Relations</li>
                    <li>Promises to Stakeholders</li>
                </ul>
              </div>
              <div className='col-md-3 col-6'>
                <h4>Yamaha Music ID Registration</h4>
                <ul className='list-unstyled'>
                    <li><a href='tel:0981037234'>Sign up for newsletters</a></li>
                    <li><a href='tel:0981037234'>Register your products</a></li>
                    <li><a href='tel:0981037234'>Membership FAQ</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-6'>
                <h4>Social Media</h4>
                <div className='footer-icons'>
                 <a href='#'><FaFacebookF/></a>
                 <a href='#'><FaYoutube/></a>
                  <a href='#'><FaInstagram/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </footer>
  )
}

export default Footer