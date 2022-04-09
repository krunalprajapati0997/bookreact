
// import React, { useState } from 'react'
// import { Grid, Paper, TextField, IconButton, InputAdornment } from '@material-ui/core'
// import { Link, useHistory } from 'react-router-dom';
// import { omit } from 'lodash'
// import { Button } from 'react-bootstrap'
// import axios from 'axios';
// import Snackbar from '@mui/material/Snackbar';
// import Slide from '@mui/material/Slide';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import EmailIcon from '@mui/icons-material/Email'
// import PhoneIcon from '@mui/icons-material/Phone';

// function Otp() {
//     const [open, setOpen] = React.useState(false);
//     const [transition, setTransition] = React.useState(undefined);
//     const [password, setpassword] = useState(false)
//     let history = useHistory()
//     const [errors, setErrors] = useState('');
//     const [values, setValues] = useState({
//         code:''
//     })
//     const handleChange = (event) => {
//         event.preventDefault();
//         event.persist();
//         let name = event.target.name;
//         let value = event.target.value;

//         validate(event, name, value);
//         setValues({
//             ...values,
//             [name]: value,  
//         })
//     }
//     function postdata(e) {

//         e.preventDefault();
//         let item = {
//             mobilenumber: localStorage.getItem('mobile'),
//             code:values.code
//         }
//         console.log(item)
//         axios.post("http://localhost:9900/verify", item).then((res) => {
//             console.log("updare", res)
//             if (res.data.success === true) {
//                 localStorage.setItem("token", res.data.token)
//                 window.location.reload(true);
//             }
        
//         })

//     }
//     const validate = (event, name, value) => {
//         switch (name) {
//             case 'code':
//                 if (
//                     !new RegExp(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/).test(value)
//                 ) {
//                     setErrors({
//                         ...errors,
//                         code: 'Mobile number must be 10 digits.'
//                     })
//                 } else {

//                     let newObj = omit(errors, "code");
//                     setErrors(newObj);

//                 }
//                 break;
//         }
//     }
//     const handleonclick = () => {
//         setpassword(!password)
//     }
//     const handleonmousedown = () => {
//         setpassword(!password)
//     }
//     return (
//         <div>
//             <section class="h-100 gradient-form" style={{ backgroundcolor: "#eee" }}>
//                 <div class="container py-5 h-100">
//                     <div class="row d-flex justify-content-center align-items-center h-100">
//                         <div class="col-xl-10">
//                             <div class="card rounded-3 text-black">
//                                 <div class="row g-0">
//                                     <div class="col-lg-6">
//                                         <div class="card-body p-md-5 mx-md-4">

//                                             <div class="text-center">
//                                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ width: "185px" }} alt="logo" />
//                                                 <h4 class="mt-1 mb-5 pb-1">We are The Medicine Team</h4>
//                                             </div>

//                                             <form>
//                                                 <p>Please login to your account</p>

//                                                 <div class="form-outline mb-4">
//                                                     <TextField name='code'
//                                                         type='number'
//                                                         fullWidth label='OTP'
//                                                         variant='outlined'
//                                                         value={values.code}
//                                                         onChange={handleChange}
//                                                         // error={Boolean(errors.phone)}
//                                                         // helperText={errors.phone}
//                                                         // InputProps={{
//                                                         //     endAdornment: (
//                                                         //         <InputAdornment position='end'>
//                                                         //             <IconButton>
//                                                         //                 <PhoneIcon />
//                                                         //             </IconButton>
//                                                         //         </InputAdornment>
//                                                         //     )
//                                                         // }}
//                                                     />
//                                                 </div>
//                                                 <div class="form-outline mb-4">
//                                                     <button className="btn btn-dark " type="button" onClick={postdata}>Enter</button>
//                                                 </div>

//                                             </form>

//                                         </div>
//                                     </div>
//                                     <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
//                                         <div class="text-black px-5 py-4 p-md-5 mx-md-4">
//                                             <h4 class="mb-4">We are more than just a company</h4>
//                                             <p class="small mb-0">The archetypical online medical database portal is Entrez, established and maintained by the National Center for Biotechnology Information or NCBI (Figure 3). Entrez is a good example of a useful portal to online medical database because the data are referenced, the site is free of commercial influence, it's run by a government agency with academic oversight, it's easy to use, it's updated daily, and, fortunately, it's free.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Otp