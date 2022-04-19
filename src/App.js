import { useState } from "react";
import './App.css';
import DispalyData from "./Display";

function App() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const [repositories,setRepositories]=useState([]);

   

  const onChangeHandle=(e)=>{
    setUsername(e.target.value);
  }
  const submitHandler=async e=>{
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
   
    const profileJson= await profile.json();
    // console.log(profileJson)
    const repositories= await fetch(profileJson.repos_url);
    const repoJson =await repositories.json();
    console.log(repoJson);
    if (profileJson){
      setData(profileJson);
      setRepositories(repoJson)
    }
   
  };
  return (
    <>
     <div class="container">
        <div class="row justify-content-center pt-5 searchblock">
            <div class="col-12 col-md-10 col-lg-8">
                <div id="message"></div>
                    <h1>Github Search</h1>
                <form id="searchForm" class="card card-sm" method="POST">
                    <div class="card-body row no-gutters align-items-center">
                         <div class="col-auto">
                            <i class="fas fa-search h4 text-body"></i>
                        </div>
                      
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search"
                                placeholder="Search Github Profile" 
                                autocomplete="off" value={username} onChange={onChangeHandle}/>
                        </div>
                    
                        <div class="col-auto">
                            <button class="btn btn-lg btn-success ml-9" type="submit" onClick={submitHandler}>Search</button>
                        </div>
                    
                    </div>
                </form>
                 <DispalyData data={data} repositories={repositories}/>
            </div>
          
        </div>
        </div>
     {/* <h2>Github Search</h2>
    <div className="git">
     
  <div className="form">
  <input className="input" class="form-control" placeholder="Search Github User" 
  type="text" value={username} onChange={onChangeHandle}/>
  <button type="submit" class="btn btn-primary justify-content-center" onClick={submitHandler}>Submit</button>
   
    </div>
    </div> */}
    </>

  );
}

export default App;
