import axios from 'axios'
import React, { Component } from 'react'

   class GetData extends Component {
     constructor(props){
      super(props)
      
      this.state={
        userId:'',
        title:''
      }

     }

     changeHandler=(e)=>{
      this.setState({[e.target.name]: e.target.value})
     }

     submitHandler = e =>{
      e.preventDefault()
      console.log(this.state)
       axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
       .then(Response=>{
        console.log(Response)
       })
       .catch(err=>{
        console.log(err)
       })
     }
    
  render() {

    const {userId,title} = this.state
    return (
      <div>
       <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name='userId' value={userId} onChange={this.changeHandler}/>
            </div><br/>

            <div>
                <input type="text" name='title' value={title} onChange={this.changeHandler}/>
            </div><br/>
            
            <button type='submit'>Submit</button>
      </form>

      </div>
    )
  }
}

export default GetData