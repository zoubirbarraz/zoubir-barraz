import { useState, useEffect } from "react";
import "./Projects.css"

const Projects = () => {
    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(
            `https://api.github.com/users/zoubirbarraz/repos?sort=updated&direction=desc&per_page=3`
            , {
                method: "GET",
                headers: {
                    Authorization: process.env.GITHUB_API_ACCESS_TOKEN
                }
            }).then( async (response) => {
                const data = await response.json();
                setdata(data);
                setLoading(false);
            })
                        
    }, []);

    

    if (loading) {
        return <div></div>;
    }

    return (
        <section className="projects" id="projects">
            <h1>Recent Projects</h1>

            <div class="cards">
                {/* A card with given width */}
                {data.filter(function(data) {
                            if (data.name !== "topomars") {
                            return true; // skip
                            }
                            return false;
                    }).map((data) => (
                    <div class="cards__item">
                        <div className="project-title">
                            <h3>{data.name}</h3>
                        </div>
                        <div className="project-description">
                            <p>
                                {data.description}
                            </p>
                        </div>
                        <div className="clone-repos">
                            <a role="button" href={data.clone_url} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                Clone project
                            </a>
                            <a role="button" href={data.html_url} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                Repo
                            </a>
                        </div>
                        <div className="separator"></div>
                        <div className="project-languages">
                            <span>Main Language: <strong>{data.language}</strong> </span>
                        </div>
                    </div>

                ))}
                <div class="cards__item">
                        <div className="project-title">
                            <h3>Artist Portfolio & Galerie</h3>
                        </div>
                        <div className="project-description">
                            <p>
                                An Artist portfolio developed using React, to show her work and where clients can reach her.
                            </p>
                        </div>
                        <div className="clone-repos">
                            <a role="button" href="https://quainthand.netlify.app" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
                            <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
                            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                            </svg>
                                Visit
                            </a>
                        </div>
                        <div className="separator"></div>
                        <div className="project-languages">
                            <span>Main Lainguage: <strong>Javascript</strong> </span>
                        </div>
                    </div>
                    <div class="cards__item">
                        <div className="project-title">
                            <h3>About Surveyors</h3>
                        </div>
                        <div className="project-description">
                            <p>
                            Web application to help clients locate and have better insights about land surveyors’ companies in Morocco.
                            </p>
                        </div>
                        <div className="clone-repos">
                            <a role="button" href="https://www.aboutsurveyors.com/en/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
                            <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
                            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                            </svg>
                                Visit
                            </a>
                        </div>
                        <div className="separator"></div>
                        <div className="project-languages">
                            <span>Main Lainguage: <strong>Python/Django</strong> </span>
                        </div>
                    </div>
                {/* Repeat other cards */}



            </div>

        </section>
    );
}

export default Projects;