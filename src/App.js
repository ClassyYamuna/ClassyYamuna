import { useState, useEffect } from "react";
import "./App.css";
// import { FaLock } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Dashboard from "./Dashboard";



// function App() {
//     const [page,setPage]=useState('home')

//     const navigateTo = (newPage) => {
//         setPage(newPage);
//       };

//     return (
//       <div>
//         {/* <nav>

//         </nav> */}
//         {page === 'home' && <Home navigateTo={navigateTo} />}
//         {page === 'about' && <About navigateTo={navigateTo}/>}
//       </div>
//     );
// }
function App() {
  return (
    <Router>
      <Routes >
      <Route path="" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
// const Home = ({navigateTo}) => {

//     const [formValues, setFormValues] = useState("");
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     // const navigateTo = (newPage) => {
//     //     setPage(newPage);
//     //   };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // setFormErrors(validate(formValues));
//         setIsSubmit(true);
//     };

//     return (
//         <>
//         {/* <div className="bgImg"> */}
      
//         <div className="container">
//             {Object.keys(formErrors).length === 0 && isSubmit ? (
//                 <div className="ui message success">
//                     Signed in successfully
//                 </div>
//             ) : (
//                 console.log("Entered Details", formValues)
//             )}

//             <form onSubmit={handleSubmit} className="form">
//                 <h1 style={{marginBottom:'20%',marginTop:'1%'}}>Login</h1>
//                 {/* <div className="ui divider"></div> */}
//                 <div className="ui form">
//                     <div className="field">
//                         <label style={{color:"white" , width: '50%',marginBottom:'10%',marginTop:'-8%',marginLeft:'4%'}}>Login PIN</label>

// {/*                         
//                         <input  className="input"
//                             type="text"
//                             name="Enter Login PIN" 
//                             placeholder="Enter Login PIN" 
//                             style={{background :"transparent",
//                                 padding:'5%',color:"blue",
//                                 // border: '2px solid gray',marginTop:'-1%',
//                                 backgroundColor:'blue',
//                                 // width: 1200,
//                                 justifyContent:'flex-start'}}
//                           value={formValues.username}
//                             onChange={handleChange}
//                         /> */}
//                         {/* <FaLock  className="icon"/> */}
                       
//                        {/* <h4> <a  style={{color:"red",textAlign:"end"}} classNamehref="pin">Generate/Forget PIN</a></h4> */}
//                     </div>

// <div className="field">

//                     <input  className="input" required
//                             type="text"
//                             name="Enter Login PIN" 
//                             placeholder="Enter Login PIN" 
//                             style={{background :"transparent",
//                                 padding:'4%',
//                                 color:'white',
//                                 marginLeft:'4%',
//                                 paddingLeft:'-35%',
//                                 borderRadius:'1%',
//                                 marginRight:'-10',
//                                 width:'92%',
//                                 border: '2px solid white',
//                                 marginTop:'-10%',
                                
//                             }}
//                           value={formValues}
//                             onChange={(e) => setFormValues(e.target.value)}
//                         />
//                          <FaLock  className="icon"/>
//                          </div>
//                          <h3><div style={{color:'red',marginLeft:'50%',fontSize:'16px',cursor:'pointer',marginBottom:'-10%'}}
//                          onClick={() => alert('"Rad9234" is your PIN')}
//                          >Generate/Forget PIN </div></h3>
                         
//                     {/* <p>{formErrors.username}</p>
//                     <div className="field">
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder="Email"
//                             value={formValues.email}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <p>{formErrors.email}</p>
//                     <div className="field">
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={formValues.password}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <p>{formErrors.password}</p>
//                     <div className="field">
//                         <label>Confirm Password</label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm password"
//                             value={formValues.confirmPassword}
//                             onChange={handleChange}
//                         /> */}
//                     </div>
//                     {/* <p>{formErrors.confirmPassword}</p> */}
//                     <button style={{background :"blue",padding:'5%',color:"white",  cursor: 'pointer',border: '2px solid gray', border:'none',borderRadius:"5px",width:'83%',marginLeft:'9%',marginTop:'-2%'}} className="fluid ui button blue">Login</button>
//                 {/* </div> */}
//             </form>
//             <div className="text">
//                 {/* Are You New For Insta  Credit? <span onClick={() =>   navigateTo('about')}> Register !</span> */}
//                 Are You New For Insta Credit? 
//                 <a className="reg" href="#" onClick={() => navigateTo('about')}> Register!</a>
//             </div>
//         </div>
//         {/* {isSubmit && <RegisterScreen />} */}
//         {/* </div> */}
//     </>
//     );
//   };
// //   registration form
//   const About = ({navigateTo}) => {
//     const[value,setvalue]=useState('')
//     const[name,setname]=useState('')
//     const[third,sethird]=useState('')
//     const[four,setfour]=useState('')
//     const[five,setfive]=useState('')
//     const[six,setsix]=useState('')
//     const[seven,setseven]=useState('')
//     const[eight,seteight]=useState('')
//     const[nine,setnine]=useState('')
//     const[ten,seten]=useState('')
//     const[eleven,setleven]=useState('')
//     const[twelve,setwelve]=useState('')
//     const[gstin,setgstin]=useState('')
//     const[email,setemail]=useState('')
//     const[pan,setpan]=useState('')
//     const[aadhar,setaadhar]=useState('')
//     const[district,setdistrict]=useState('')
//     const[empid,setid]=useState('')
//     const[refnum,setrefnum]=useState('')

    
//     return (

//         <div>
//      <div>
//      <h1 style={{marginTop:"2%"}}>Welcome to Registration Page</h1>
//      </div>
     
//      <div className="box">
//         <div className="box1">
//         <h3 style={{color:'red',marginLeft:'3%'}}>User/Personal Details</h3>
//           <lable style={{color:'blue',}}>Business/shop Name</lable><br></br>
//          <input type="text" placeholder="Ex-Krishna Sweets"
//           style={{background :"aliceblue",
//             width: '250px',
//             marginTop:'1%',
//             color:'black',
//             padding: '12px 15px',
//             border: '2px solid gray', /* Light border color */
//             borderRadius: '8px', /* Rounded corners */
//            backgroundColor: "transparent", /* Light blue background */
//             fontSize:'16px',
//             // color: '#333',/* Text color */
//             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
//                  }}
//          value={value}
//          onChange={(e) =>{ setvalue(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Type of Ownership</lable><br></br>
//          <input type="text" placeholder="Select Ownership"
//           style={{width: '250px',
//             marginTop:'1%',
//             color:'black',
//             padding: '12px 15px',
//             border: '2px solid gray', /* Light border color */
//             borderRadius: '8px', /* Rounded corners */
//            backgroundColor: 'transparent', /* Light blue background */
//             fontSize:'16px',
//             // color: '#333',/* Text color */
//             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
//             }}

//          value={eleven}
//          onChange={(e) =>{ setleven(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Nature of Business/Business Category</lable><br></br>
//          <input type="text" placeholder="Ex-SuperMarket"
//           style={{width: '100%',
//             marginTop:'1%',
//             color:'black',
//             padding: '12px 15px',
//             border: '2px solid gray', /* Light border color */
//             borderRadius: '8px', /* Rounded corners */
//            backgroundColor:'transparent', /* Light blue background */
//             fontSize:'16px',
//             //  color: '#333',
//            /* Text color */
//             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
//             }}
//          value={name}
//          onChange={(e) =>{ setname(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Owner's/Director's Name</lable><br></br>
//          <input type="text" placeholder="Owner's/Director's"
//           style={{background :'transparent',
//                  color:'black',
//                  border: '2px solid gray',
//                  outline: 'none',
//                  fontSize:'16px',
//                  transition: 'box-shadow 0.3s ease',
//                  borderRadius: '8px',
//                  width:'100%',
//                   padding: '12px 15px',
//                  outline: 'none',
//                  transition: 'box-shadow 0.3s ease',
//                 // paddingTop:'1%',
//                 // paddingBottom:'1%',
//                 marginTop:'1%'
//             }}
//          value={third}
//          onChange={(e) =>{ sethird(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Owners's/Diretor's Mobile Number</lable><br></br>
//          <input type="text" placeholder="Owners/Directors Mobile Number"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'100%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={twelve}
//          onChange={(e) =>{ setwelve(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Secondary Mobile Number</lable><br></br>
//          <input type="text" placeholder="Secondary Number"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'100%',
//              padding: '12px 15px',
//             outline: 'none',
//             // transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={four}
//          onChange={(e) =>{ setfour(e.target.value)}}
//          ></input><br></br><br></br>
// <lable style={{color:'blue'}}>GSTIN(Mandatory if GST bill Required)</lable><br></br>
//          <input type="text" placeholder="Secondary Number"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'100%',
//              padding: '12px 15px',
//             outline: 'none',
//             // transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={gstin}
//          onChange={(e) =>{ setgstin(e.target.value)}}
//          ></input><br></br><br></br>
//  <lable style={{color:'blue'}}>Email</lable><br></br>
//          <input type="text" placeholder="Secondary Number"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'100%',
//              padding: '12px 15px',
//             outline: 'none',
//             // transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={email}
//          onChange={(e) =>{ setemail(e.target.value)}}
//          ></input><br></br><br></br>
//   <lable style={{color:'blue'}}>Owner's/Company PAN Number</lable><br></br>
//          <input type="text" placeholder="Secondary Number"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'100%',
//              padding: '12px 15px',
//             outline: 'none',
//             // transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={pan}
//          onChange={(e) =>{ setpan(e.target.value)}}
//          ></input><br></br><br></br>
// <lable style={{color:'blue'}}>Owners's/Director's Aadhar number</lable><br></br>
//          <input type="text" placeholder="Secondary Number"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'100%',
//              padding: '12px 15px',
//             outline: 'none',
//             // transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={aadhar}
//          onChange={(e) =>{ setaadhar(e.target.value)}}
//          ></input><br></br><br></br>
//          </div>

//         {/* billing */}
//         <div className="box2">

//         <h3 style={{color:'red',marginLeft:'3%'}}>Billing/Owner Address</h3>
//      <lable style={{color:'blue' }}>Door No </lable><br></br>
//          <input type="text" placeholder="Enter Door No"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={five}
//          onChange={(e) =>{ setfive(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Street Address 1</lable><br></br>
//          <input type="text" placeholder="Enter Address 1"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={six}
//          onChange={(e) =>{ setsix(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Street Address 2</lable><br></br>
//          <input type="text" placeholder="Enter Address 2"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={seven}
//          onChange={(e) =>{ setseven(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Landmark</lable><br></br>
//          <input type="text" placeholder="Enter Landmark"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={eight}
//          onChange={(e) =>{ seteight(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>Pincode</lable><br></br>
//          <input type="text" placeholder="Enter Pincode"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={nine}
//          onChange={(e) =>{ setnine(e.target.value)}}
//          ></input><br></br><br></br>

// <lable style={{color:'blue'}}>State</lable><br></br>
//          <input type="text" placeholder="Select State"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={ten}
//          onChange={(e) =>{ seten(e.target.value)}}
//          ></input><br></br><br></br>
// <lable style={{color:'blue'}}>District</lable><br></br>
//          <input type="text" placeholder="Select State"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={district}
//          onChange={(e) =>{ setdistrict(e.target.value)}}
//          ></input><br></br><br></br>
//          <h3 style={{color:'red',marginLeft:'3%'}}>Referred By</h3><br></br>
//   <lable style={{color:'blue'}}>Emoloyee ID/Name</lable><br></br>
//          <input type="text" placeholder="Select State"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={empid}
//          onChange={(e) =>{ setid(e.target.value)}}
//          ></input><br></br><br></br>
//   <lable style={{color:'blue'}}>Referrer's Mobile Number</lable><br></br>
//          <input type="text" placeholder="Select State"
//           style={{background :'transparent',
//             color:'black',
//             border: '2px solid gray',
//             outline: 'none',
//             fontSize:'16px',
//             transition: 'box-shadow 0.3s ease',
//             borderRadius: '8px',
//             width:'111%',
//              padding: '12px 15px',
//             outline: 'none',
//             transition: 'box-shadow 0.3s ease',
//           //  paddingTop:'1%',
//           //  paddingBottom:'1%',
//            marginTop:'1%'
//             }}
//          value={refnum}
//          onChange={(e) =>{ setrefnum(e.target.value)}}
//          ></input><br></br>
//         </div>
    
//         </div>

    
//     <div className="dummy">
//      <div>
//       <h4 style={{marginLeft:'47%',color:'black',marginBottom:'-1%',
//       paddingTop:'1%'
//      }} > <input type="checkbox" style={{ marginRight: '15px',border:'white',background:'blue',marginLeft:'-2%' }}
     
//      ></input>Accept Terms and Condition </h4></div>
//         <div> <button 
//           type="submit"
//           style={{
//             backgroundColor:'blue',// Green color
//             color: 'white',
//             padding: '10px 20px',
//             border: 'none',
//             cursor: 'pointer',
//             borderRadius: '5px',
//             marginTop: '2%',
//             marginLeft:'47%',
//             width: '10%',
//             fontSize: '16px',
            
//           }}
//           onClick={() => alert('Successfully Registered')}
//         >
//           Submit
//         </button></div> 
    
//      <div>
//       <h2 style={{color:'red',marginLeft:'46%',marginTop:'1%'}} onClick={()=>navigateTo('home')}>Login or Back to home</h2>
//      </div>
//      </div>

//         </div>
        
//     );
//   };
 
// export default App;
