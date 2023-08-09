import axios from "axios";
import { useState } from "react";
import RepoDetails from "./RepoDetails";
import './App.css'

function App() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDateilsLoading] = useState(false)
  const handelSubmit = (e) =>{
    e.preventDefault();
    serchRepos();
  }
  const serchRepos = ()=>{
    setLoading(true)
    axios({
      method: 'get',
      url: `https://api.github.com/users/${userName}/repos`,
    }).then(res =>{
      setLoading(false)
      setRepos(res.data)
    })
  }
  function renderRepo(repo){
    return(
      <div className="result__container" key={repo.id} onClick={() => getDetails(repo.name)}>
        <h2 className="result__title">
          {repo.name}
        </h2>
      </div>
    )
  }
  function getDetails (repoName){
    setDateilsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${userName}/${repoName}`,
    }).then(res =>{
        setDateilsLoading(false);
        setDetails(res.data)
    })
  }
  return (
    <div className="wrap">
      <div className="main__container">
        <header>
          <input 
          className="input__search" 
          value={userName}
          placeholder="Enter your github login"
          onChange={e => setUserName(e.target.value)}
          />
          <button className="button__search" onClick={handelSubmit}>{loading ? "Serching..." : 'Serch'}</button>
        </header>
      
        <div className="search__result">
          {repos.map(renderRepo)}
        </div>
      </div>
      <hr />
      <RepoDetails details={details} loading={detailsLoading}/>
    </div>
  );
}

export default App;
