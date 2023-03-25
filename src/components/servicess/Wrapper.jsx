import React from 'react'

const Wrapper = () => {
    const data = [
        {
            title: "LOOKING FOR EXCLUSIVE SERVICE ?",
            heading: "Get The Best For your Business",
            desc: "Lorem ipsum dolor sit amet, consect tuer adipiscing elit enean consect tuer adipiscing elit enean",
        }
    ]
  return (
    <>
      <section className="branding wrapper">
        <div className="container">{data.map((val) => {
            return(
            <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <button className="primary-btn">Contact Us</button>
            </div>
            )
        })}   
        </div>
      </section>
    </>
  )
}

export default Wrapper
