import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPostdetail } from "./Helper";
import "./seedetail.css"
const SeeDetails  =()=>{
    const [data,setData] = useState({})
    const [loader, setLoder] = useState(true)
    const history = useHistory();
    useEffect(()=>{
        getPostdetail(history.location.state.id).then((res)=>{
            setData(res)
            setLoder(false)
        }).catch(()=>{
            setLoder(false)
        })
         
    },[])
    return(
        <>
            <div className="detail-main-container">
               <h1 >Post Detail</h1>
               <div className="devide-blocks-detail"></div>
               <div>
                 <h3 className="title-heading">Title</h3>
                 {loader ? <Skeleton/> :  <span>{data?.title}</span>}
                
               </div>
               <div>
                 <h3 className="title-heading">Description</h3>
                 {loader ? <Skeleton/> :  <p className="description-block">{data?.body}</p>}
               </div>
            </div>
        </>
    )
}


export default SeeDetails;