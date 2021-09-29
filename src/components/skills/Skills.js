import './Skills.css'

const Skills = () => {
    return ( 
        <section className="skills" id="skills">
            <h1>Skills</h1>
            <div className="row">
                <div className="col">
                    <div className="head">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-drone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10h4v4h-4z"></path>
                            <line x1="10" y1="10" x2="6.5" y2="6.5"></line>
                            <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"></path>
                            <path d="M14 10l3.5 -3.5"></path>
                            <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"></path>
                            <line x1="14" y1="14" x2="17.5" y2="17.5"></line>
                            <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"></path>
                            <line x1="10" y1="14" x2="6.5" y2="17.5"></line>
                            <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96"></path>
                        </svg>
                        <span>Geomatics</span> 
                    </div>
                    <div className="elements">
                        <ul>
                            <li>Drone photogrammetry</li>
                            <li>Metasape Agisoft Photoscan</li>
                            <li>MicMac</li>
                            <li>Pix4D</li>
                            <li>Spatial Analysis</li>
                            <li>Cartography</li>
                            <li>3D Modeling</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="head">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="7 8 3 12 7 16"></polyline>
                            <polyline points="17 8 21 12 17 16"></polyline>
                            <line x1="14" y1="4" x2="10" y2="20"></line>
                        </svg>
                        <span>Developpement</span> 
                    </div>
                    <div className="elements">
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                            <li>SQL/PostgreSQL</li>
                            <li>Amazon Web Services</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="head">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
                            <line x1="9.7" y1="17" x2="14.3" y2="17"></line>
                        </svg>
                        <span>Personal</span> 
                    </div>
                    <div className="elements">
                        <ul>
                            <li>Creative and taking initiative</li>
                            <li>Fast learner</li>
                            <li>Autonomous and a team player </li>
                            <li>Passionate which enable me to excel</li>
                            <li>Curious about new things </li>
                            <li>Able to supervise work and projects</li>
                            <li>Fun to work with</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;