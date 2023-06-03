'use client'
import React, { useState } from 'react'
import Display from "./display"
type Props = {}
// postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv
const Input = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState('')
  const [showComponent, setShowComponent] = useState(false);
  // const navigate = useNavigate()
  const handleURI = async(value, e) => {
    e.preventDefault();
    const response = await fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({
        URI: value
      })
    })
    .then(response => response.json())
    .then(data => {
      setShowComponent(true)
    })
    
  }
  if (!showComponent){
    return (
      <div>
         <p>URI :</p>
        <input type="text" placeholder='URI' value={value} onChange={(event)=>setValue(event.target.value)}>
        </input>
  
          <button onClick={(e)=> handleURI(value, e)}>SUBMIT</button>

      </div>
    )
  } else{
    return(
    <Display uri={value} />
    )
  }
}

export default Input