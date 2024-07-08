import Axios from "axios";
import { Link } from "react-router-dom";

export default function LatestNews(Props){
    const{_id,url,headline,source,category}= Props.obj; 

    const handleClick =()=>{
        Axios.delete("https://samplemern-backend.onrender.com/newsRoute/deletenews/" +_id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record is deleted");
                window.location.reload();
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return(
        
        <div className="col-sm-3"> 
                <div className="card">
                    
            <a href={url} target="blank">
            
                    <div className="card-content  ">
                        <h3>{headline}</h3>
                    </div > 
            
                    <div className="details">
                        <h6>Source: {source}</h6>
                        <h6>Category: {category}</h6>
                    </div>
                    </a>
                    <div className="text-center mb-3">
                
                        <button class="btn btn-primary me-2">
                            <Link class="text-decoration-none text-light" to={"/editnews/"+_id}>Edit</Link>
                        </button>
                        <button onClick={handleClick} class="btn btn-danger">
                            Delete
                        </button>
                    </div>

                </div>
            
        </div>
        
    )
}