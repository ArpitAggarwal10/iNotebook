import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import pic from "./Arpit.jpg";

const About = () => {
    const a = useContext(noteContext);
    console.log(a);
    const imageStyle = {
        width: "15vw",
        height: "30vh",
        borderRadius: "100%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
    const containerStyle = {
        border: "1px solid black",
        padding: "20px 20px",
        backgroundColor: "white",
        borderRadius: "2%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }
    const paragraphClass = {
        margin: "10px 0px",
        fontSize: "15px"
    }
    const headingClass = {
        margin: "10px 0px",
        fontSize: "20px"
    }
    const ulClass = {
        margin: "10px 0px",
        fontSize: "15px"
    }
    const liClass = {
        margin: "2px 0px",
        fontSize: "15px"
    }
    const text = {
        textDecoration: "none"
    }
    return (
        <div className="container">
            <h1 className="my-3 text-center">About iNotebook</h1>
            <div className="container d-flex " style={containerStyle}>
                <div className="container">
                    <p style={paragraphClass}>
                        iNotebook Is A Web Application Designed To Help You Organize And Manage Your Notes Effectively.
                        Whether You're A Student, Professional, Or Anyone Who Loves To Stay Organized, iNotebook Provides
                        A User - Friendly Interface To Create, Edit And Delete Notes Seamlessly.
                        <br />
                        iNotebook Is Crafted With Passion And Expertise By <strong>Arpit Aggarwal</strong>.
                    </p>
                    <h3 style={headingClass}>Key Features</h3>
                    <ul style={ulClass}>
                        <li style={liClass}>Create And Store Notes With Titles, Descriptions And Tags.</li>
                        <li style={liClass}>Edit And Update Your Notes Whenever You Need.</li>
                        <li style={liClass}>Delete Notes You No Longer Require.</li>
                        <li style={liClass}>User Authentication To Keep Your Notes Secure.</li>
                    </ul>

                    <h3 style={headingClass}>How To Use</h3>
                    <p style={paragraphClass}>
                        Simply Signup Or Login To Get Started. Once Logged In, You Can Access Your Personal Dashboard,
                        Create New Notes And Manage Your Existing Notes Effortlessly.
                    </p>

                    <h3 style={headingClass}>Contact Us</h3>
                    <p style={paragraphClass}>
                        If You Have Any Questions, Feedback Or Issues, Feel Free To Reach Out To Our Support Team.
                    </p>
                </div>
            </div>
            <h1 className="my-3 text-center">About Developer</h1>
            <div className="container d-flex mb-5" style={containerStyle}>
                <img style={imageStyle} src={pic} alt="" />
                <div className="container">
                    <p style={paragraphClass}>Hi, I Am <strong>Arpit Aggarwal</strong>, An Aspiring Big Data Analyst And New Computer Languages And Technologies Enthusiast. I Am A Qualified Software Developer And A Web
                        Developer Looking Forward To Earning The Position Of A Developer At A Leading Organization To Showcase My Skills In Programming To
                        Generate High - End Solutions To General Issues Along With Drawing Better User Experience. </p>
                    <p style={paragraphClass}>
                        If You Have Any Technical Inquiries, Suggestions Or Collaboration Opportunities, You Can
                        Reach Out To Me At <a style={text} href="mailTo:arpitaggarwal1012@gmail.com" target="_blank" rel="noopener noreferrer">arpitaggarwal1012@gmail.com</a>.
                    </p>
                    <p style={paragraphClass}>
                        Connect With Me On LinkedIn {'->'} <a style={text} href="https://www.linkedin.com/in/arpit-aggarwal10" target="_blank" rel="noopener noreferrer">Arpit Aggarwal : LinkedIn</a>
                        <br />
                        Explore My Projects On GitHub {'->'} <a style={text} href="https://github.com/ArpitAggarwal10" target="_blank" rel="noopener noreferrer">Arpit Aggarwal : GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;