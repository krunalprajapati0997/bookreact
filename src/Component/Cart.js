import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import { Button } from 'react-bootstrap'
import { initial } from 'lodash';
import html2canvas from 'html2canvas';

function Cart() {

    const initialize = JSON.parse(localStorage.getItem("addtocart"))

    const [myArray, setMyArray] = useState(initialize);

    let history = useHistory

    const Remove = (items) => {

        localStorage.removeItem(`addtocart`);
        setTimeout(() => {
            window.location.reload(true)
            history.push('/Table')
        }, 1000);
        console.log("remove", items)
    }


    const Prints = () => {

        const divToDisplay = document.getElementById('div')
        html2canvas(divToDisplay,
            {
                useCORS: true,
                onrendered: function (canvas) {
                    divToDisplay.appendChild(canvas);
                }
            }).then(function (canvas) {
                const divImage = canvas.toDataURL("image/png");
                const pdf = new jsPDF();
                pdf.addImage(divImage, 'PNG', 0, 0);
                pdf.save("download.pdf");
            })

    }

    const Print = () => {
        window.print()
    }





    return (

        <div id='div'>
            <table class="table table-bordered">

                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantities</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                {
                    myArray.map((items) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>
                                        {items.name}
                                    </td>
                                    <td>
                                        {items.description}
                                    </td>
                                    <td>
                                        {items.quantities}
                                    </td>
                                    <td>
                                        {items.price}
                                    </td>
                                    <td>
                                        <img src={items.profile_url} width='120' height='100' />
                                    </td>
                                    <td>
                                        <Button onClick={() => Remove()}>Remove From Item</Button>
                                    </td>
                                    <td>
                                        <Button onClick={Prints}>print</Button>
                                    </td>
                                    <td>

                                        <Button onClick={Print}>JS Print</Button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>


        </div>




    )
}


export default Cart