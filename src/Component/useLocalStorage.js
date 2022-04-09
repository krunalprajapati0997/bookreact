// // import { useState, useEffect } from 'react';

// // const useLocalStorage = (key, initialValue) => {
// //   const [value, setValue] = useState(() => {
// //     try {
// //       const localValue = window.localStorage.getItem(key);
// //       return localValue ? JSON.parse(localValue) : initialValue;
// //     } catch (error) {
// //       return initialValue;
// //     }
// //   });

// //   useEffect(() => {
// //     window.localStorage.setItem(key, JSON.stringify(value));
// //   }, [key, value]);

// //   return [value, setValue];
// // };

// // export default useLocalStorage;
// import MaterialTable from 'material-table';
// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button, Figure, } from 'react-bootstrap'
// import { Grid, Paper, CardActions } from '@material-ui/core';
// import NoteCard from './NoteCard';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// function Table() {
//   const { id } = useParams()
//   let history = useHistory();

//   const [user, setuser] = useState([])
//   const [myArray, setMyArray] = useState([]);
//   useEffect(() => {
//     // if (localStorage.getItem("shoping") != null) {
//       const fhyh = JSON.parse(localStorage.getItem("shoping"))
//       console.log("hgdfghfgfgdrtg", fhyh)
//     setMyArray([...myArray,fhyh])
//     // }
//     data()
//   }, [])

//   function data() {
//     // let token = localStorage.getItem('token')
//     axios.get(`http://localhost:8080/food`)
//       .then(res => {
//         const tableData = res.data.data;
//         setuser(tableData)
//         console.log('heyyyy________', res.data)
//       })
//   }

//   function deleteuser(id) {
//     // let token = localStorage.getItem('token')
//     console.log(id);
//     axios.delete(`http://localhost:8080/food/${id}`)
//       .then((result) => {
//         console.log("result.data", result.data);
//         data()
//       })

//   }
//   // function adduser() {

//   //   console.log('hey______add');
//   //   history.push('/add')

//   // }
//   // function updateuser(id) {

//   //   console.log('heyy_____put', id);
//   //   history.push(`/e/${id}`);

//   // }
//   function addCart(data) {
//     // myArray.push(data);

//     setMyArray([...myArray,data])
//     console.log(myArray)
//     localStorage.setItem("shoping", JSON.stringify(data))
  
//       // history.push('/Cart') 
    

      
//   }

//   // const columns = [
//   //     {
//   //         title: 'name', field: 'name'
//   //     },
//   //             {
//   //         title: 'Description', field: 'description'
//   //     },
//   //     {
//   //         title: 'Quantities', field: 'quantities'
//   //     },
//   //     {
//   //         title: 'Price (per one quantity)', field: 'price'
//   //     },
//   //     {
//   //         title: "Image", field: "profile_url", render: (rowData) => <img src={rowData.profile_url} style={{ width: 120, height: 100}} alt="" />,
//   //     },

//   // ]
//   return (

//     <div>
    

//       {/* <MaterialTable title=" Material Table"
//                 data={user}
//                 columns={columns}

//                 actions={[
//                     {
                        
//                         icon: 'edit',
//                         tooltip: 'Edit User',
//                         // onClick: (event, rowData) => updateuser(rowData._id),
                       
//                     },
                    

//                     {
//                         icon: 'delete',
//                         tooltip: 'Delete User',
//                         // onClick: (event, rowData) => deleteuser(rowData._id)

//                     }, 
//                     {
//                         icon: 'add',
//                         tooltip: 'Add User',
//                         isFreeAction: true ,
//                         // onClick: (event, rowData) => adduser(rowData._id)
//                       }
//                 ]}
//             /> */}

//       <CardActions>
//         <Link to='/Add'> <AddCircleOutlineIcon />Add</Link>

//       </CardActions>

//       <Container>
//         <Grid container spacing={3}>
//           {user.map(user => (
//             <Grid item key={user.id} xs={12} md={6} lg={4}>
//               <NoteCard note={user} handleclick={deleteuser} addcart={addCart} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>


//     </div>
//   )
// }





// export default Table