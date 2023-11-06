import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Addtask} from '../Redux/Actions/Actions'

const Addtask=()=> {
const [desc, setdesc] = useState("")
const [isdone, setisdone] = useState (false)
const dispatch=useDispatch()

const handleClick =()=> {
dispatch(Addtask(desc,isdone))
}
  return (
<div>
<h3>Add task:</h3>
<input onChange={(e)=>setdesc(e.target.value)}/>
<button onClick={handleClick}>save</button>
</div>

  )
}
export default Addtask
