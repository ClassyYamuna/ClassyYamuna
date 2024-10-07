import { useState, useEffect } from "react";

//   registration form
const Register = ({navigateTo}) => {
    const[value,setvalue]=useState('')
    const[name,setname]=useState('')
    const[third,sethird]=useState('')
    const[four,setfour]=useState('')
    const[five,setfive]=useState('')
    const[six,setsix]=useState('')
    const[seven,setseven]=useState('')
    const[eight,seteight]=useState('')
    const[nine,setnine]=useState('')
    const[ten,seten]=useState('')
    const[eleven,setleven]=useState('')
    const[twelve,setwelve]=useState('')
    const[gstin,setgstin]=useState('')
    const[email,setemail]=useState('')
    const[pan,setpan]=useState('')
    const[aadhar,setaadhar]=useState('')
    const[district,setdistrict]=useState('')
    const[empid,setid]=useState('')
    const[refnum,setrefnum]=useState('')
    
    const openRegistrationPage = () => {
        // This opens the registration page in a new tab
        window.open('/Home', '_blank');
      };

    
    return (

        <div>
     <div>
     <h1 style={{marginTop:"2%"}}>Welcome to Registration Page</h1>
     </div>
     
     <div className="box">
        <div className="box1">
        <h3 style={{color:'red',marginLeft:'3%'}}>User/Personal Details</h3>
          <lable style={{color:'blue',}}>Business/shop Name</lable><br></br>
         <input type="text" placeholder="Ex-Krishna Sweets"
          style={{background :"aliceblue",
            width: '250px',
            marginTop:'1%',
            color:'black',
            padding: '12px 15px',
            border: '2px solid gray', /* Light border color */
            borderRadius: '8px', /* Rounded corners */
           backgroundColor: "transparent", /* Light blue background */
            fontSize:'16px',
            // color: '#333',/* Text color */
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
            outline: 'none',
            transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
                 }}
         value={value}
         onChange={(e) =>{ setvalue(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Type of Ownership</lable><br></br>
         {/* <input type="text" placeholder="Select Ownership" */}
         <select
          style={{width: '250px',
            marginTop:'1%',
            color:'black',
            padding: '12px 15px',
            border: '2px solid gray', /* Light border color */
            borderRadius: '8px', /* Rounded corners */
           backgroundColor: 'transparent', /* Light blue background */
            fontSize:'16px',
            // color: '#333',/* Text color */
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
            outline: 'none',
            transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
            }}

         value={eleven}
         onChange={(e) =>{ setleven(e.target.value)}}
         >     <option value="">Select Ownership</option> {/* Placeholder option */}
         <option value="Private">Limited</option>
         <option value="Public">Private Ltd</option>
         <option value="Partnership">LLP</option>
         <option value="Sole Proprietorship">Partnership</option>
         <option value="Partnership">Proprietor</option>
         <option value="Individual">Individual</option>
       </select><br></br><br></br>

<lable style={{color:'blue'}}>Nature of Business/Business Category</lable><br></br>
         <input type="text" placeholder="Ex-SuperMarket"
          style={{width: '100%',
            marginTop:'1%',
            color:'black',
            padding: '12px 15px',
            border: '2px solid gray', /* Light border color */
            borderRadius: '8px', /* Rounded corners */
           backgroundColor:'transparent', /* Light blue background */
            fontSize:'16px',
            //  color: '#333',
           /* Text color */
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
            outline: 'none',
            transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
            }}
         value={name}
         onChange={(e) =>{ setname(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Owner's/Director's Name</lable><br></br>
         <input type="text" placeholder="Owner's/Director's"
          style={{background :'transparent',
                 color:'black',
                 border: '2px solid gray',
                 outline: 'none',
                 fontSize:'16px',
                 transition: 'box-shadow 0.3s ease',
                 borderRadius: '8px',
                 width:'100%',
                  padding: '12px 15px',
                 outline: 'none',
                 transition: 'box-shadow 0.3s ease',
                // paddingTop:'1%',
                // paddingBottom:'1%',
                marginTop:'1%'
            }}
         value={third}
         onChange={(e) =>{ sethird(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Owners's/Diretor's Mobile Number</lable><br></br>
         <input type="text" placeholder="Owners/Directors Mobile Number"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'100%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={twelve}
         onChange={(e) =>{ setwelve(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Secondary Mobile Number</lable><br></br>
         <input type="text" placeholder="Secondary Number"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'100%',
             padding: '12px 15px',
            outline: 'none',
            // transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={four}
         onChange={(e) =>{ setfour(e.target.value)}}
         ></input><br></br><br></br>
<lable style={{color:'blue'}}>GSTIN(Mandatory if GST bill Required)</lable><br></br>
         <input type="text" placeholder="GSTIN"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'100%',
             padding: '12px 15px',
            outline: 'none',
            // transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={gstin}
         onChange={(e) =>{ setgstin(e.target.value)}}
         ></input><br></br><br></br>
 <lable style={{color:'blue'}}>Email</lable><br></br>
         <input type="text" placeholder="Enter Email"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'100%',
             padding: '12px 15px',
            outline: 'none',
            // transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={email}
         onChange={(e) =>{ setemail(e.target.value)}}
         ></input><br></br><br></br>
  <lable style={{color:'blue'}}>Owner's/Company PAN Number</lable><br></br>
         <input type="text" placeholder="PAN No(Name Must Match)"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'100%',
             padding: '12px 15px',
            outline: 'none',
            // transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={pan}
         onChange={(e) =>{ setpan(e.target.value)}}
         ></input><br></br><br></br>
<lable style={{color:'blue'}}>Owners's/Director's Aadhar number</lable><br></br>
         <input type="text" placeholder="Aadhar No(Name must Match)"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'100%',
             padding: '12px 15px',
            outline: 'none',
            // transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={aadhar}
         onChange={(e) =>{ setaadhar(e.target.value)}}
         ></input><br></br><br></br>
         </div>

        {/* billing */}
        <div className="box2">

        <h3 style={{color:'red',marginLeft:'3%'}}>Billing/Owner Address</h3>
     <lable style={{color:'blue' }}>Door No </lable><br></br>
         <input type="text" placeholder="Enter Door No"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={five}
         onChange={(e) =>{ setfive(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Street Address 1</lable><br></br>
         <input type="text" placeholder="Enter Address 1"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={six}
         onChange={(e) =>{ setsix(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Street Address 2</lable><br></br>
         <input type="text" placeholder="Enter Address 2"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={seven}
         onChange={(e) =>{ setseven(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Landmark</lable><br></br>
         <input type="text" placeholder="Enter Landmark"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={eight}
         onChange={(e) =>{ seteight(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>Pincode</lable><br></br>
         <input type="text" placeholder="Enter Pincode" maxLength={6}
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={nine}
         onChange={(e) =>{ setnine(e.target.value)}}
         ></input><br></br><br></br>

<lable style={{color:'blue'}}>State</lable><br></br>
         <input type="text" placeholder="Select State"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={ten}
         onChange={(e) =>{ seten(e.target.value)}}
         ></input><br></br><br></br>
<lable style={{color:'blue'}}>District</lable><br></br>
         <input type="text" placeholder="Select District"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={district}
         onChange={(e) =>{ setdistrict(e.target.value)}}
         ></input><br></br><br></br>
         <h3 style={{color:'red',marginLeft:'3%'}}>Referred By</h3><br></br>
  <lable style={{color:'blue'}}>Emoloyee ID/Name</lable><br></br>
         <input type="text" placeholder="Ex-RAD0001 or Raja"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={empid}
         onChange={(e) =>{ setid(e.target.value)}}
         ></input><br></br><br></br>
  <lable style={{color:'blue'}}>Referrer's Mobile Number</lable><br></br>
         <input type="text" placeholder="Referrer's Mobile Number"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={refnum}
         onChange={(e) =>{ setrefnum(e.target.value)}}
         ></input><br></br>
        </div>
    
        </div>

    
    <div className="dummy">
     <div>
      <h4 style={{marginLeft:'47%',color:'black',marginBottom:'-1%',
      paddingTop:'1%'
     }} > <input type="checkbox" style={{ marginRight: '15px',border:'white',background:'blue',marginLeft:'-2%' }}
     
     ></input>Accept Terms and Condition </h4></div>
        <div> <button 
          type="submit"
          style={{
            backgroundColor:'blue',// Green color
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '2%',
            marginLeft:'47%',
            width: '10%',
            fontSize: '16px',
            
          }}
          onClick={() => alert('Successfully Registered')}
        >
          Submit
        </button></div> 
    
     <div>
      <h2 style={{color:'red',marginLeft:'46%',marginTop:'1%'}} onClick={openRegistrationPage}>Login or Back to home</h2>
     </div>
     </div>

        </div>
    );
        };

export default Register;