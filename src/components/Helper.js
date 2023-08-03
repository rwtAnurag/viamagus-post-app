import axios from 'axios';

export const getPostsData = (start_index) => { 
    return new Promise((resolve, reject)=>{
        axios({
            method: 'get',
            url:`https://jsonplaceholder.typicode.com/posts?_start=${start_index}&_limit=${8}`                // 'https://jsonplaceholder.typicode.com/posts',

          })
            .then(function (response) {
                if(response?.status===200){
                    resolve(response.data)
                }
        }).catch(()=>{
             reject("Something went wrong")
        })
    })
}
export const addpostData = (title, description) => { 
    return new Promise((resolve, reject)=>{
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data:  {
                "title": title,
                "body": description
              }
          })
            .then(function (response) {
              
                    resolve(200)

        }).catch(()=>{
             reject("Something went wrong")
        })
    })
}

export const getPostdetail = (postId) => { 
    return new Promise((resolve, reject)=>{
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
          })
            .then(function (response) {
                if(response?.status===200){
                    resolve(response.data)
                }
        }).catch(()=>{
             reject("Something went wrong")
        })
    })
}
