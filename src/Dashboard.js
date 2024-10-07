import React from 'react'

const Dashboard = () => {
    const   backtohome = () => {
        // This opens the registration page in a new tab
        window.open('/Home', '_blank');
      };
  return (
    <div><h1 style={{color:'red',marginTop:'20%'}}> <a href='' style={{color:'red'}} onClick={backtohome}>Back to Home </a></h1></div>
  )
}

export default Dashboard