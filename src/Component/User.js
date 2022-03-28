import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Copy() {
    let history = useHistory();
    const [user, setuser] = useState([])
    useEffect(() => {
        data()
    }, [])

    function data() {
        let token = localStorage.getItem("token");

        axios.get(`https://bookstorelibrary.herokuapp.com/`,{ headers: { 'x-access-token': token } })
            .then(res => {
                console.log(res)
                const tableData = res.data.data
                // const array = [];
                //  array.push(tableData);
                setuser(tableData)
                console.log(user)

            })

    }
    function deleteuser(_id) {
        console.log(_id);
        let token = localStorage.getItem("token");
        axios.delete(`https://bookstorelibrary.herokuapp.com/${_id}`,{ headers: { 'x-access-token': token } }).then((result) => {
            console.log("result.data", result);
            data()

        })

    }


    const columns = [
        {
            title: 'Username', field: "username"
        },
        {
            title: "Email", field: "email"

        },
        {
            title: "Mobilenumber", field: "phone"

        },
        {
            title: "Image", field: "profile_url", render: (rowData) => <img src={rowData.profile_url} style={{ width: 120, height: 100}} alt="" />
        }
    ]


    return (

        <div>

            <MaterialTable title=" User List"

                data={user}
                columns={columns}

                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    }
                ]}
            />


        </div>
    )
}




export default Copy