import { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";

const Home = ({navigateTo}) => {

  const [formValues, setFormValues] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const navigateTo = (newPage) => {
  //     setPage(newPage);
  //   };

  const handleSubmit = (e) => {
      e.preventDefault();
      // setFormErrors(validate(formValues));
      setIsSubmit(true);
  };
  const openRegistrationPage = () => {
    // This opens the registration page in a new tab
    window.open('/Register', '_blank');
  };
  const   opendashboard = () => {
    // This opens the registration page in a new tab
    window.open('/dashboard', '_blank');
  };

  return (
      <>
      {/* <div className="bgImg"> */}
    
      <div className="container">
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">
                  Signed in successfully
              </div>
          ) : (
              console.log("Entered Details", formValues)
          )} */}

          <form onSubmit={handleSubmit} className="form">
              <h1 style={{marginBottom:'20%',marginTop:'1%',color:'black'}}>Login</h1>
              {/* <div className="ui divider"></div> */}
              <div className="ui form">
                  <div className="field">
                      <label style={{color:"blue" ,fontFamily:'initial', width: '50%',marginBottom:'15%',marginTop:'-8%',marginLeft:'4%'}}>Login PIN</label>

{/*                         
                      <input  className="input"
                          type="text"
                          name="Enter Login PIN" 
                          placeholder="Enter Login PIN" 
                          style={{background :"transparent",
                              padding:'5%',color:"blue",
                              // border: '2px solid gray',marginTop:'-1%',
                              backgroundColor:'blue',
                              // width: 1200,
                              justifyContent:'flex-start'}}
                        value={formValues.username}
                          onChange={handleChange}
                      /> */}
                      {/* <FaLock  className="icon"/> */}
                     
                     {/* <h4> <a  style={{color:"red",textAlign:"end"}} classNamehref="pin">Generate/Forget PIN</a></h4> */}
                  </div>

<div className="field">

                  <input  className="input" required
                          type="text"
                          name="Enter Login PIN" 
                          placeholder="Enter Login PIN" 
                          style={{background :"transparent",
                              padding:'4%',
                              color:'aliceblue',
                              marginLeft:'4%',
                              paddingLeft:'-35%',
                              borderRadius:'3%',
                              marginRight:'-10',
                              width:'92%',
                              border: '3px solid gray',
                              marginTop:'-10%',
                              fontFamily:'initial',
                              fontSize:'16px'
                              
                          }}
                        value={formValues}
                          onChange={(e) => setFormValues(e.target.value)}
                      />
                       <FaLock  className="icon"/>
                       </div>
                       <h3><div style={{color:'red',marginLeft:'50%',fontSize:'16px',cursor:'pointer',marginBottom:'-10%'}}
                       onClick={() => alert('"Rad9234" is your PIN')}
                       >Generate/Forget PIN </div></h3>
                       
                  {/* <p>{formErrors.username}</p>
                  <div className="field">
                      <label>Email</label>
                      <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={formValues.email}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.email}</p>
                  <div className="field">
                      <label>Password</label>
                      <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formValues.password}
                          onChange={handleChange}
                      />
                  </div>
                  <p>{formErrors.password}</p>
                  <div className="field">
                      <label>Confirm Password</label>
                      <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm password"
                          value={formValues.confirmPassword}
                          onChange={handleChange}
                      /> */}
                  </div>
                  {/* <p>{formErrors.confirmPassword}</p> */}
                  <button style={{background :"#5E70E7",padding:'5%',color:"white",  cursor: 'pointer',border: '2px solid gray', border:'none',borderRadius:"5px",width:'83%',marginLeft:'9%',marginTop:'-2%'}} className="fluid ui button blue"
                  onClick={opendashboard}>Login</button>
              {/* </div> */}
              <div className="text" style={{fontFamily:'initial',fontSize:'20px'}}>
              
          Are You New For Insta Credit? <br></br></div>
             <div> <a className="reg" href="#" onClick={openRegistrationPage} style={{marginTop:'-10%'}}> Register!</a>
          </div>
          </form>
          {/* <div className="text">
              
          Are You New For Insta Credit? 
              <a className="reg" href="#" onClick={openRegistrationPage}> Register!</a>
          </div> */}
      </div>
      {/* {isSubmit && <RegisterScreen />} */}
      {/* </div> */}
  </>
  );
};

export default Home;