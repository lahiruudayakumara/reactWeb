import React from 'react'

const About = () => {
  const data = [
    {
        title: "Who I am And What I do",
        desc1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        desc2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        desc3: "Contrary to popular belief, Lorem Ipsum is not simply random text",
        cover: "./assets/2.jpg"
    }
  ]
  return (
    <>
        <section className="about topMargin">
            <div className="container flex">
                {data.map(val => {
                    return(
                        <>
                        <div className="left mtop">
                            <div className="heading">
                                <h3>About Me</h3>
                                <h1>{val.title}</h1>
                            </div>
                            <p>{val.desc1}</p>
                            <p>{val.desc2}</p>
                            <p>{val.desc3}</p>
                            <button className="primary-btn">Download CV</button>
                        </div>
                        <div className="right">
                            <div className="img">
                                <img src={val.cover} alt="" width="100%" />
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </section>    
    </>
  )
}

export default About
