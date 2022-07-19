import React, { Component } from 'react'
import Axios from 'axios'

 class PostData extends Component {
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response);
            this.setState({posts:Response.data})
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

  render() {
    const { posts }=this.state
    return (
      <div>
           <p>Lists</p>
           {
             posts.length ?
             posts.map(post => <div key={post.id}>{post.title}</div>):
             null
            
           }
       

        </div>
    )
  }
}


export default PostData