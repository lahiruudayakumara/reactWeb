import React from 'react'

const Home = () => {
  return (
    <>
    <section className="home">
        <div className="container flex">
            <div className="left">
                <div className="img">
                    <img src="./assets/1.png" alt="" width="100%" />
                </div>
            </div>
            <div className="right topMargin">
                <h1>
                    I AM A<br />
                    WEB DESIGNER
                </h1>
                <div className="scoialIcon">
                    <i className='fab fa-facebook facebook'></i>
                    <i className='fab fa-instagram instagram'></i>
                    <i className='fab fa-twitter twitter'></i>
                    <i className='fab fa-youtube youtube'></i>
                    <i className='fab fa-pinterest pinterest'></i>
                    <i className='fab fa-dribbble dribbble'></i>

                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className="primary-btn">Contact Uss</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
