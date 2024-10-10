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
    const[pin,setPincode]=useState('')
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

    // email validation
   
    // const EmailInput = () => {
      // const [email, setEmail] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      const validateEmail = (e) => {
        const value = e.target.value;
        setemail(value);
    
        // Regular expression for basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(value)) {
          setErrorMessage('Invalid email format');
        } else {
          setErrorMessage('');
        }
      };
    // }
    // pan validation

    // const PanInput = () => {
    //   const [pan, setPan] = useState('');
      const [errorpan, setErrorpan] = useState('');
    
      const validatePan = (e) => {
        const value = e.target.value;
        setpan(value);
    
        // Regular expression for PAN number validation
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    
        if (!panPattern.test(value)) {
          setErrorpan('Invalid PAN number format');
        } else {
          setErrorpan('');
        }
      };
      // }
      // pincode validation

      const [errorpin, setErrorpin] = useState('');

      const validatePincode = (e) => {
      const value = e.target.value;
      setPincode(value);

    // Regular expression for validating Indian Pincode (6 digits)
    const pincodePattern = /^[1-9][0-9]{5}$/;

    if (!pincodePattern.test(value)) {
      setErrorpin('Invalid Pincode format');
    } else {
      setErrorpin('');
    }
     };
      // gst validation

    //  const [gst, setGst] = useState('');
     const [errorgst, setErrorgst] = useState('');
   
     const validateGst = (e) => {
       const value = e.target.value;
       setgstin(value);
   
       // Regular expression for validating GST number
       const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
   
       if (!gstPattern.test(value)) {
         setErrorgst('Invalid GST number format');
       } else {
         setErrorgst('');
       }
     };

    // checkbox

   

    return (

        <div>
     <div>
     <h1 style={{marginTop:"2%",color:'red'}}>Welcome to Registration Page</h1>
     </div>
     <div className="box">
        <div className="box1">

        <h3 style={{color:'white',marginLeft:'0%',backgroundColor:'darkblue',width:'86%',padding:'12px 15px'}}>User/Personal Details</h3>
        <div className="rowone"style={{fontFamily:'initial',fontSize:'20px'}}>
           <div style={{flexDirection:'column',marginRight:'10%'}}> 
            <div style={{display:'flex',flexDirection:'row',}}> 
              <lable style={{color:'blue'}}>Business/shop Name</lable>
        <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
         <input type="text" placeholder="Ex-Krishna Sweets"
          style={{background :"aliceblue",
            width: '250px',
            // marginTop:'-50%',
            
            color:'black',
            padding: '12px 15px',
            border: '3px solid darkblue', /* Light border color */
            borderRadius: '8px', /* Rounded corners */
           backgroundColor: "transparent", /* Light blue background */
            fontSize:'16px',
            // color: '#333',/* Text color */
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
            outline: 'none',
            transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
                 }}
         value={value}
         onChange={(e) =>{ setvalue(e.target.value)}}
         ></input><br></br><br></br></div>

     <div style={{flexDirection:'column',marginRight:'10%'}}>
     <div style={{display:'flex',flexDirection:'row',}}>
      <lable style={{color:'blue',}}>Type of Ownership</lable>
      <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>         {/* <input type="text" placeholder="Select Ownership" */}
         <select
          style={{width: '250px',
            // marginTop:'8%',
            color:'black',
            padding: '12px 15px',
            border: '3px solid darkblue', /* Light border color */
            borderRadius: '8px', /* Rounded corners */
           backgroundColor: 'transparent', /* Light blue background */
            fontSize:'16px',
            // color: '#333',/* Text color */
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
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
       </select><br></br><br></br></div>

 <div style={{flexDirection:'column',marginRight:'10%',}}>
 <div style={{display:'flex',flexDirection:'row',}}> 
 <lable style={{color:'blue', whiteSpace: 'nowrap'}}>Nature of Business/Business Category</lable>
 <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
 {/* <br></br> */}
         <input type="text" placeholder="Ex-SuperMarket"
          style={{width: '250px',
            // marginTop:'8%',
            color:'black',
            padding: '12px 15px',
            border: '3px solid darkblue', /* Light border color */
            borderRadius: '8px', /* Rounded corners */
           backgroundColor:'transparent', /* Light blue background */
            fontSize:'16px',
            //  color: '#333',
           /* Text color */
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',/* Light shadow for elevation */
            outline: 'none',
            transition: 'box-shadow 0.3s ease' /* Smooth transition for hover effect */
            }}
         value={name}
         onChange={(e) =>{ setname(e.target.value)}}
         ></input><br></br><br></br></div>

     <div style={{flexDirection:'column',marginRight:'10%'}}>
     <div style={{display:'flex',flexDirection:'row',}}>
      <lable style={{color:'blue'}}>Owner's/Director's Name</lable>
      <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
         <input type="text" placeholder="Owner's/Director's"
          style={{background :'transparent',
                 color:'black',
                 border: '3px solid darkblue',
                 outline: 'none',
                 fontSize:'16px',
                 borderRadius: '8px',
                 width:'250px',
                  padding: '12px 15px',
                 outline: 'none',
                 transition: 'box-shadow 0.3s ease',
                // paddingTop:'1%',
                // paddingBottom:'1%',
                // marginTop:'8%',
            }}
         value={third}
         onChange={(e) =>{ sethird(e.target.value)}}
         ></input><br></br><br></br> </div></div>

<div className="rowtwo " style={{fontFamily:'initial',fontSize:'20px'}}> <div style={{flexDirection:'column',marginRight:'6.5%'}}>
   <div  className="col-3" style={{display:'flex',flexDirection:'row',}}>
   <lable style={{color:'blue', whiteSpace: 'nowrap'}}>Owners's/Diretor's Mobile Number</lable>
   <h2 style={{marginTop:-9,marginLeft:10,color:'red'}}>*</h2></div>
         <input type="text" placeholder="Owners/Directors Mobile Number"
          style={{background :'transparent',
            color:'black',
            border: '3px solid darkblue',
            outline: 'none',
            fontSize:'16px',
            borderRadius: '8px',
            width:'250px',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
          // marginTop:'8%',
            }}
         value={twelve}
         onChange={(e) =>{ setwelve(e.target.value)}}
         ></input><br></br><br></br></div>

 <div  style={{flexDirection:'column',marginRight:'10%'}}> 
  <lable style={{color:'blue'}}>Secondary Mobile Number</lable>
  <br></br>
         <input type="text" placeholder="Secondary Number"
          style={{background :'transparent',
            color:'black',
            border: '3px solid darkblue',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'250px',
             padding: '12px 15px',
            outline: 'none',
            // transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
          marginTop:'8%',
            }}
         value={four}
         onChange={(e) =>{ setfour(e.target.value)}}
         ></input><br></br><br></br></div>
<div style={{flexDirection:'column',marginRight:'10%'}}>
 
  <lable style={{color:'blue', whiteSpace: 'nowrap'}}>GSTIN(Mandatory if GST bill Required)</lable><br></br>
  
         <input type="text" placeholder="GSTIN"
          style={{background :'transparent',
            color:'black',
            border: '3px solid darkblue',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'250px',
             padding: '12px 15px',
            outline: 'none',
          marginTop:'8%',
            }}
         value={gstin}
        //  onChange={(e) =>{ setgstin(e.target.value)}}
         onChange={validateGst}
         ></input><br></br> {errorgst && <span style={{ color: 'red' }}>{errorgst}</span>}<br></br></div>
  <div   style={{flexDirection:'column',marginRight:'10%'}}>
    <lable style={{color:'blue'}}>Email</lable>
    
         <input type="text" placeholder="Enter Email"
          style={{background :'transparent',
            color:'black',
            border: '3px solid darkblue',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'250px',
             padding: '12px 15px',
            outline: 'none',
          marginTop:'8%',
            }}
         value={email}
        //  onChange={(e) =>{ setemail(e.target.value)}}
        onChange={validateEmail}
         ></input>
         <br></br>  {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}      <br></br> </div></div> 
   <div className="rowthree" style={{fontFamily:'initial',fontSize:'20px'}}>
    <div style={{flexDirection:'column',marginRight:'7.5%'}}> 
    <div style={{display:'flex',flexDirection:'row',}}>
    <lable style={{color:'blue'}}>Owner's/Company PAN Number</lable>
    <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
    
         <input type="text" placeholder="PAN No(Name Must Match)"
          style={{background :'transparent',
            color:'black',
            border: '3px solid darkblue',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'250px',
             padding: '12px 15px',
            outline: 'none',
          // marginTop:'8%',
            }}
         value={pan}
        //  onChange={(e) =>{ setpan(e.target.value)}}
        onChange={validatePan} 
         ></input><br></br> 
         {errorpan&& <span style={{ color: 'red' }}>{errorpan}</span>} 
         <br></br> </div>
   <div style={{flexDirection:'column',marginRight:'10%'}}>
   <div style={{display:'flex',flexDirection:'row',}}>
    <lable style={{color:'blue'}}>Owners's/Director's Aadhar number</lable>
    <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
    
         <input type="text" placeholder="Aadhar No(Name must Match)"
          style={{background :'transparent',
            color:'black',
            border: '3px solid darkblue',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'250px',
             padding: '12px 15px',
            outline: 'none',
            // marginTop:'8%', 
            }}
         value={aadhar}
         onChange={(e) =>{ setaadhar(e.target.value)}}
         ></input><br></br><br></br></div>

         
         </div></div>


        {/* billing */}
        <div className="box2">

        <h3 style={{color:'white',marginLeft:'0%',backgroundColor:'darkblue',width:'90%',padding:'12px 15px'}}>Billing/Owner Address</h3>
    <div className="line1" style={{fontFamily:'initial',fontSize:'20px'}}><div style={{flexDirection:'column',marginRight:"10%"}}>
    <div style={{display:'flex',flexDirection:'row',}}>
       <lable style={{color:'blue' }}>Door No </lable>
       <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
       
         <input type="text" placeholder="Enter Door No"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            borderRadius: '8px',
            width:'111%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
          // marginTop:'8%',
            }}
         value={five}
         onChange={(e) =>{ setfive(e.target.value)}}
         ></input><br></br><br></br></div>

 <div style={{flexDirection:'column',marginRight:'10%'}}> 
 <div style={{display:'flex',flexDirection:'row',}}>
  <lable style={{color:'blue'}}>Street Address 1</lable>
  <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
  
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
          // marginTop:'8%',
            }}
         value={six}
         onChange={(e) =>{ setsix(e.target.value)}}
         ></input><br></br><br></br></div>

 <div style={{flexDirection:'column',marginRight:'10%'}}>
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
          marginTop:'8%',
            }}
         value={seven}
         onChange={(e) =>{ setseven(e.target.value)}}
         ></input><br></br><br></br></div>

 <div style={{flexDirection:'column',marginRight:'10%'}}>
 <div style={{display:'flex',flexDirection:'row',}}>
  <lable style={{color:'blue'}}>Landmark</lable>
  <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
  
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
          // marginTop:'8%',
            }}
         value={eight}
         onChange={(e) =>{ seteight(e.target.value)}}
         ></input><br></br><br></br></div></div>

<div className="line2" style={{fontFamily:'initial',fontSize:'20px'}}> <div style={{flexDirection:'column',marginRight:'10%'}}>
<div style={{display:'flex',flexDirection:'row', marginRight:'10%'}}>
  <lable style={{color:'blue'}}>Pincode</lable>
  <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
  
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
          // marginTop:'8%',
            }}
         value={pin}
        //  onChange={(e) =>{ setpin(e.target.value)}}
          onChange={validatePincode}
         ></input><br></br> {errorpin && <span style={{ color: 'red' }}>{errorpin}</span>}<br></br></div>

 <div style={{flexDirection:'column',marginRight:'10%'}}>
 <div style={{display:'flex',flexDirection:'row',}}><lable style={{color:'blue'}}>State</lable>
 <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
 
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
          // marginTop:'8%',
            }}
         value={ten}
         onChange={(e) =>{ seten(e.target.value)}}
         ></input><br></br><br></br></div>
<div style={{flexDirection:'column',marginRight:'50'}}>
<div style={{display:'flex',flexDirection:'row',}}>
  <lable style={{color:'blue'}}>District</lable>
  <h2 style={{marginTop:-9,marginRight: 10,color:'red'}}>*</h2></div>
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
          // marginTop:'8%',
            }}
         value={district}
         onChange={(e) =>{ setdistrict(e.target.value)}}
         ></input><br></br><br></br></div></div>
         <h3 style={{color:'white',marginLeft:'0%',backgroundColor:'darkblue',width:'90%',padding:'12px 15px'}}>Referred By</h3><br></br>
   <div style={{flexDirection:'column'}} ><lable style={{color:'blue',fontFamily:'initial',fontSize:'20px'}}>Emoloyee ID/Name</lable><br></br>
         <input type="text" placeholder="Ex-RAD0001 or Raja"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'13%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={empid}
         onChange={(e) =>{ setid(e.target.value)}}
         ></input>
         <br></br>
         <br></br>
         </div>
  <div style={{flexDirection:'column'}} ><lable style={{color:'blue',fontFamily:'initial',fontSize:'20px'}}>Referrer's Mobile Number</lable><br></br>
         <input type="text" placeholder="Referrer's Mobile Number"
          style={{background :'transparent',
            color:'black',
            border: '2px solid gray',
            outline: 'none',
            fontSize:'16px',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '8px',
            width:'13%',
             padding: '12px 15px',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          //  paddingTop:'1%',
          //  paddingBottom:'1%',
           marginTop:'1%'
            }}
         value={refnum}
         onChange={(e) =>{ setrefnum(e.target.value)}}
         ></input><br></br></div>
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
          // onClick={() => alert('Successfully Registered')}
        >
          Submit
        </button></div> 
    
     <div>
      <h2 style={{color:'red',marginLeft:'46%',marginTop:'1%'}} onClick={openRegistrationPage}>Login or Back to home</h2>
     </div>
     </div>

        </div>
    );
  }
        

export default Register;
