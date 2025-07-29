import './App.css';
import Card from './Card.js';
import { useEffect, useState } from "react";
import { Octokit } from "octokit";

function App() {
    const [repos, setRepos] = useState([]);

    useEffect(() => 
    {
        const octokit = new Octokit({
          // auth: ''
        })

        async function loadRepos()
        {
            try
            {
                const response = await octokit.request('GET /users/parkerbritt/repos', {
                  headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                  }
                })

                console.log("Reponse data:", response.data)
                setRepos(response.data);
            }
            catch(err)
            {
                    console.error("Error fetching repos:", err);

            }
        }

        loadRepos();
    }, []);


    const cards = [];
    for(let i=0; i<repos.length; ++i)
    {
        cards.push( <Card title={repos.at(i).name} content={repos.at(i).description} url={repos.at(i).html_url}/>)
    }

    return (
        <div className="App">
              <section className='card-grid'>
                    {cards}
              </section>
        </div>
    );
}

export default App;
