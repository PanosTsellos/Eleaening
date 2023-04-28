/**
 * @author Panagiotis Tsellos w20024460
 */

import React, { useState, useEffect } from 'react';
import Footer from './footer';
 

function Emailinfo(props) {
 
 
    const [emaildata, setEmaildata] = useState([]);
    const [visible, setVisible] = useState(false);

 
    const getSubmissions = () => {
        fetch("http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/contactinfo?id="+props.data.id)
            .then(
                (response) => response.json()
            )
            .then(
                (json) => {
                    setEmaildata(json.data)
                    console.log(json.data)
                }
            )
            .catch(
                (e) => {
                    console.log(e.message)
                }
            )
    }

    const visibleDetails = () => {
        getSubmissions();
        setVisible(!visible);
      }


    return (
        <div onClick={visibleDetails}>
            <div className='border'>

            <h2>{props.data.name}</h2>
            {visible && <div>
            <p><strong>Email:</strong> {props.data.email}</p>
            <p><strong>Message: </strong>{props.data.message}</p>


            {props.loading && <p>Loading...</p>}
            </div>}
            </div>

        </div>
    )
}
 
 
export default Emailinfo;