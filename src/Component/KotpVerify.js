import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function App() {
  const [code, setcode] = useState('');
  const [phone,setphone] = useState('')
  const [password,setpassword] = useState('');
  const { id } = useHistory
  let history = useHistory();

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   }

  const postData = (e) => {
    e.preventDefault()
    let item = {
      phone :localStorage.getItem('phone',phone),
      code: code
    }
    console.log(item)
    
    axios.post("http://localhost:6544/verify", item).then((res) => {
      console.log("updare", res)
      if (res.data.success === true) {
        localStorage.setItem('token', res.data.token);
        window.location.reload(true)
        // history.push('/User')
      }
    })
  }

  const postdata =(e)=>{
    e.preventDefault()
    let item = {
      phone : localStorage.getItem('phone',phone),
      code : code
      // password : localStorage.getItem('password',password)
    }
    console.log("hey item",item)

    axios.post('http://localhost:6544/resend',item).then((res)=>{
      console.log('heyyyy',res)
      if(res.data.success === true){
        localStorage.setItem('token',res.data.token)
        window.location.reload(true)
      }
    })
  }

  return (
    <div>
      <h1> Please enter the verification code sent to your mobile</h1>

      <OTPInput
        name='code'
        value={code}
        onChange={setcode}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        secure
       
      />
      <div>
        <button type='submit' onClick={postData}>Submit Otp</button>
      </div>
      <br/>
      {/* <br/> */}
      <div>
        <button type='submit' onClick={postdata}>Resend Otp</button>
      </div>
      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
    </div>
  );
}

export default App