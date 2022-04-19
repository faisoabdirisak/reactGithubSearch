import './App.css';
const DispalyData = ({data, repositories}) => {
    return ( 
        <>
        <div class="container">
             <div className="profile">
            <div class="row">
                <div class="col-md-3">
                    <div className="profile-sidebar">
                        <div id="profile"> 
                        <div className="profile-userpic">
                              {!data.avatar_url?(""):(<img className="d-block"
                                    src={data.avatar_url}
                                    alt={data.avatar_url}/>)}
                            <div className='profile-usertitle'>
                                <div className="profile-usertitle-name">
                                    {data.name}
                                </div>
                                 <div className="profile-usertitle-job">
                                     {data.login}
                                 </div>
                            </div>
                               <div class="portlet light bordered">

            <div class="row list-separated profile-stat">
            <div class="col-md-6 col-sm-6 col-xs-6" >
                 <div class="uppercase profile-stat-title">{data.followers}</div>
                 <div class="uppercase profile-stat-text">Followers</div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="uppercase profile-stat-title">{data.following}</div>
            <div class="uppercase profile-stat-text">Following</div>
            </div>
            </div>
            <div><h4 className="profile-desc-title">About </h4>
        <span className="profile-desc-text">{data.bio}</span></div>
        
            </div>
                        </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div className="profile-content">
                      
                        <ol class="d-flex flex-wrap list-style-none gutter-condensed mb-4" id="repos">
                            <li class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6">
            <div class="card" className='card1'>
              <div class="card-body">
              <div class="card-title">
                  <h4>Repositories</h4>
                   <p>{repositories.map(repo=>(
                <div key={repo.name}>
                    <h5><a target="_blank" href="{repo.html_url}">{repo.name}</a></h5>
                     <p><a href={repo.html_url} className="repo" >{repo.html_url}</a></p>
                     <p class="card-text">{repo.description }</p>
                       <i class="fas fa-circle">{repo.language}</i> 

                     </div>
               
            ))}</p>
                 
            </div>
            </div>
            </div>
            </li>
                        </ol>
                    </div>
                   
                </div>
            </div>
        </div>
        
        </div>
        </>
     );
}
 
export default DispalyData;