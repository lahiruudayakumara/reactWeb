import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container1 grid1">
            <div className="box">
                <h2>Logo</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="scoialIcon">
                    <i className='fab fa-facebook facebook'></i>
                    <i className='fab fa-instagram instagram'></i>
                    <i className='fab fa-twitter twitter'></i>
                    <i className='fab fa-youtube youtube'></i>
                    <i className='fab fa-pinterest pinterest'></i>
                    <i className='fab fa-dribbble dribbble'></i>
                </div>
            </div>
            <div className="box">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Protofolio</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className="text">
                    <p>Commerce plugins to boot sale</p>
                    <span>29 March 2023</span>
                </div>
                <div className="text">
                    <p>Commerce plugins to boot sale</p>
                    <span>29 March 2023</span>
                </div>
                <div className="text">
                    <p>Commerce plugins to boot sale</p>
                    <span>29 March 2023</span>
                </div>
            </div>
            <div className="box">
                <h2>Get in Touch</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="icon">
                    <i className="fa fa-location-dot"></i>
                    <label htmlFor=""> Location : 191 2a</label>
                </div>
                <div className="icon">
                    <i className="fa fa-phone"></i>
                    <label htmlFor=""> Phone : 07XXXXXXXXX</label>
                </div>
                <div className="icon">
                    <i className="fa fa-envelope"></i>
                    <label htmlFor=""> lahiru6616@gmail.com</label>
                </div>
            </div>
        </div>
        <div className="legal container">
            <p>Copyright @2022. All rights reserved</p>
            <label htmlFor="">Design & Developed by <span>Dev</span></label>
        </div>
    </footer>
    </>
  )
}

export default Footer
