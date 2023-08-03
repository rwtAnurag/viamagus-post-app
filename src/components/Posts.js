import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getPostsData } from "./Helper";
import { useHistory } from "react-router-dom";
import { Skeleton } from "antd/lib";
import "./post.css";
const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Description",
    dataIndex: "body",
  },
];

const shimmerData = [
  {
    title: <Skeleton />,
    id: <Skeleton />,
    body: <Skeleton />,
  },
  {
    title: <Skeleton />,
    id: <Skeleton />,
    body: <Skeleton />,
  },
  {
    title: <Skeleton />,
    id: <Skeleton />,
    body: <Skeleton />,
  },
];

const Posts = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true)
  const [currentIndex,setCurrentIndex] = useState(0)
  const [hideNext, setHideNext] = useState(false)
  const history = useHistory();
  const handleClickRow =(id) =>{
    history.push({
      pathname: "/posts-details",
      state: {
        id:parseInt(id)
      },
    });
  }
  useEffect(() => {
    setLoader(true)
    getPostsData(currentIndex).then((res) => {
      const dataArray=[]
      res.forEach(element => {
       let obj= {
          "userId": element.userId,
          "id": element.id,
          "title": <div id={element.id} style={{cursor:"pointer"}} onClick={()=>{handleClickRow(element.id)}}>{element.title}</div>,
          "body": <div id={element.id} style={{cursor:"pointer"}} onClick={()=>{handleClickRow(element.id)}}>{element.body}</div>
        }
        dataArray.push(obj)
      });
      if(dataArray.length<8){
        setHideNext(true);
      }else{
        setHideNext(false);
      }
      setData(dataArray);
      setLoader(false)
    });
  }, [currentIndex]);

  const handleCreateNewPost = () => {
    history.push({
      pathname: "/create-new-post",
      state: {},
    });
  };
  const handleNext = ()=>{
     setCurrentIndex(prev=>prev+8)
  }
   
  useEffect(()=>{
     console.log(currentIndex)
  },[currentIndex])
  const handlePrev = () =>{
      setCurrentIndex((prev)=> prev -8)
  }

  return (
    <>
      <div className="create-new-post">
        <h1 className="post-text">Posts</h1>
        <button className="create-button" onClick={handleCreateNewPost}>
          Create New Posts
        </button>
      </div>
      <div className="create-manage-post">
        <h2>Create and manage posts</h2>
      </div>
      <div className="devide-blocks"></div>
      <div className="posts-list-table">
        <Table 
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  console.log(event.target.id)
                }, // click row
              };
            }}
           columns={columns} 
           pagination={false} 
           dataSource={loader ? shimmerData : data} 
           size="middle" />
      </div>
      <div>
        <div className="pagination-button">
          <button onClick={handlePrev} style={{visibility:`${currentIndex===0 ? "hidden" :"visible"}`}} className="prev-button" >Prev</button>
          <button  onClick={handleNext} style={{visibility:`${hideNext ? "hidden" :"visible"}`}} className="next-button">Next</button>
        </div>
      </div>
    </>
  );
};
export default Posts;
