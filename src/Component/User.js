// import MaterialTable from 'material-table';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";


// function Copy() {
//     let history = useHistory();
//     const [user, setuser] = useState([])
//     useEffect(() => {
//         data()
//     }, [])

//     function data() {
//         let token = localStorage.getItem("token");

//         axios.get(`https://bookstorelibrary.herokuapp.com`,{ headers: { 'x-access-token': token } })
//             .then(res => {
//                 console.log(res)
//                 const tableData = res.data.data
//                 // const array = [];
//                 //  array.push(tableData);
//                 setuser(tableData)
//                 console.log(user)

//             })

//     }
//     function deleteuser(_id) {
//         console.log(_id);
//         let token = localStorage.getItem("token");
//         axios.delete(`http://localhost:6544/${_id}`,{ headers: { 'x-access-token': token } }).then((result) => {
//             console.log("result.data", result);
//             data()

//         })

//     }


//     const columns = [
//         {
//             title: 'Username', field: "username"
//         },
//         {
//             title: "Email", field: "email"

//         },
//         {
//             title: "Mobilenumber", field: "phone"

//         },
//         {
//             title: "Image", field: "profile_url", render: (rowData) => <img src={rowData.profile_url} style={{ width: 120, height: 100}} alt="" />
//         }
//     ]


//     return (

//         <div>

//             <MaterialTable title=" User List"

//                 data={user}
//                 columns={columns}

//                 actions={[
//                     {
//                         icon: 'delete',
//                         tooltip: 'Delete User',
//                         onClick: (event, rowData) => deleteuser(rowData._id)

//                     }
//                 ]}
//             />


//         </div>
//     )
// }




// export default Copy

import SimpleImageSlider from "react-simple-image-slider";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const images = [

  { url: "https://media.istockphoto.com/photos/open-book-close-up-at-the-library-picture-id1302676874?b=1&k=20&m=1302676874&s=170667a&w=0&h=MCUK_eGWI-FkGrUgv1sPW_5D3gZa0sMTHhRCd_wqUxQ=" },
  { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  { url: "https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=" },
  { url: "https://media.istockphoto.com/photos/stack-of-books-on-a-shelf-multicolored-book-spines-picture-id507071472?k=20&m=507071472&s=612x612&w=0&h=lJXM_A9BSC_X_8ffZsA9ZoaInUz7nazNWu3Vj1yOFN8=" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
];

const User = () => {
  return (
    <div className="container fluid">
      <SimpleImageSlider
        width={1000}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={1.2}
      />
      <Button type='button' variant="info"><Link to='/Table'>Return</Link></Button>
    </div>
  );
}

export default User
