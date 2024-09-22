export default function Experience({objExperience}) {
    return(
        <div>
            <h3>{objExperience['college-year']}</h3>
            <p>{objExperience['school-name']}</p>
            <p>{objExperience['school-year']} / {objExperience.location}</p>
            <ul>
                <li>{objExperience.descriptions[0]}</li>
                <li>{objExperience.descriptions[1]}</li>
                <li>{objExperience.descriptions[2]}</li>
                <li>{objExperience.descriptions[3]}</li>
            </ul>
        </div>
    )
};