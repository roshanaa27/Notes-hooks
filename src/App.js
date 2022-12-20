
import './App.css';
import React, {useState} from "react";
const App=()=>{
  const [msg,updatemsg]=useState([])
  const [data,setdata]=useState([
    {
      title:"",
      comments:"",
    }
  ])
  function Changehandle(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  let Title=data.title;
  let Comments=data.comments;

  function Changesubmit(e){
    e.preventDefault();
    updatemsg([...msg,{Title,Comments}])
    setdata({title:"",comments:""})
  }
  const Changedelete=(i)=>{
    const updatemsg1=[...msg];
    updatemsg1.splice(i,1)
    updatemsg(updatemsg1)
  }
  return(
    <div>
    <div><h2>Keeper</h2></div>
    <form className="set"> 
      <input className="txt" name="title" value={Title} onChange={Changehandle} placeholder="Title"/>
      <br/>
      <textarea name="comments" value={Comments} onChange={Changehandle} placeholder="Type your notes here..."/>
      <br/>
      <button className="btn"onClick={Changesubmit}>+</button>
    </form>
    {
      msg.map((info,ind)=>{
        return (
          <div className="fix-table">
            <div key={ind}>
              <p><b>{info.Title}</b></p>
              <p>{info.Comments}</p>
            </div>
            <button className="del" onClick={()=>Changedelete(ind)}>Delete</button>
          </div>
        )
      })
    }
    </div>
  )
}
export default App;