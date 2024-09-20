import about_data from '../data/about-data.json'

export default function About() {
    const skills = about_data.skills
    return(
        <>
           <div className="contact">
                <h2> {about_data.headers[0]} </h2>
                <p> {about_data.email} <i className="fa-solid fa-envelope"></i> </p>
                <p> {about_data['phone-number']} <i className="fa-solid fa-phone"></i> </p>
                <p> {about_data.address}  <i className="fa-solid fa-location-dot"></i> 
                </p>
                <span>
                    <a href="https://www.linkedin.com/in/kristenz-mingoy-644885292/" target='_blank'> {about_data.socials[0]} </a> 
                    <i className="fa-brands fa-linkedin"></i>
                </span>
                <span>
                    <a href="https://github.com/Kristenz24" target='_blank'> {about_data.socials[1]} </a> 
                    <i className="fa-brands fa-github"></i>
                </span>
           </div>

           <div className="education">
                <h2> {about_data.headers[1]} </h2>
                <p> {about_data.degree} </p>
                <p> {about_data.field} </p>
                <p> {about_data['school-name']} </p>
                <p> {about_data['school-year']} </p>
                <p> {about_data['school-address']} </p>
           </div>

           <div className="skills">
                <h2> {about_data.headers[2]} </h2>
                {skills.map((skill, index)=>(
                    <p key={index}>{skill}</p>
                ))}
           </div>
        </>
    )
};