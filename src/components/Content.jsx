import Experience from './Experience'
import About from './About'
import experience_data from '../data/experience-data.json'

export default function Content() {
    return (
        <main className='content-container'>
            <section className='about'>
                <About />
            </section>

            <section className='work-experience'>
                <h2>College Experience</h2>
                <Experience objExperience={experience_data.data[2]} />
                <Experience objExperience={experience_data.data[1]} />
                <Experience objExperience={experience_data.data[0]} />
            </section>
        </main>
    )  
};




