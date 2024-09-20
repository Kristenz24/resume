export default function Experience({objExperience}) {
    return(
        <div>
            <h3>{objExperience.position}</h3>
            <p>{objExperience.company}</p>
            <p>{objExperience.date} / {objExperience.location}</p>
            <ul>
                <li>{objExperience.descriptions[0]}</li>
                <li>{objExperience.descriptions[1]}</li>
                <li>{objExperience.descriptions[2]}</li>
                <li>{objExperience.descriptions[3]}</li>
            </ul>
        </div>
    )
};