import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
            {/* HOME PAGE */}
            <br/>
      <button type='button' style={{marginRight:"20px", margin: '10px',marginBottom:"20px", background:"blue", color:"white"}} onClick={() => navigate("/form")}>Form</button>
      <button type='button' style={{background:"blue"}} onClick={() => navigate("/table")}>Table</button>
    </div>
  )
}

export default Home
