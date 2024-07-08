import './Cardstyle.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import LatestNews from './LatestNews';

export default function Latest(){
    
    
    const [arr,setArr]=useState([]);
    
    useEffect(()=>{
        Axios.get("https://samplemern-backend.onrender.com/newsRoute/")
        .then((res)=>{
            if(res.status===200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    })

    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <LatestNews obj={val}/>
        })
    }

       
    return(
        <div className="container">
        <h1 className="text-center mt-3">Latest<span className="badge bg-danger text dark">News</span></h1>
        <div className="row">
            {ListItems()}
        </div>
        </div>
    )
}

