import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Table from './Table'
import { jsx } from 'react/jsx-runtime'
import { useDispatch, useSelector } from 'react-redux'
import { getUserdata } from '../redux/Action'

const Form = () => {
    const navigate = useNavigate()
    const [userDetils, setDetils] = useState({
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        vehicle: []
    })

    const [userData, setData] = useState([])
    const [editIndex, setIndex] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()
    const tableData = useSelector((state) => state?.data) || [];
    const editData = useSelector((state) => state?.editObj) || {
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        vehicle: []
    };

    useEffect(() => {
        if(params.id){
            setDetils(editData)
            setIndex(params?.id)
        }
        setData(tableData)
    }, [])

    // console.log(userDetils);
    // console.log(userData);


    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setDetils({
            ...userDetils, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        const arr = [...userData]
        if (editIndex !== null) {
            arr[editIndex] = userDetils
        } else {
            arr.push(userDetils)
        }
        setData(arr)
        dispatch(getUserdata(arr))
        setIndex(null)
        handleReset()
    }

    const handleReset = () => {
        setDetils({
            firstName: "",
            lastName: "",
            country: "",
            language: "",
            vehicle: []
        })
    }


    const handleChangecheckbox = (e) => {
        const checkArr = [...userDetils.vehicle]
        // console.log(e.target.checked);
        // console.log(e.target.value);
        if (e.target.checked) {
            checkArr.push(e.target.value)
        } else {
            const removeData = checkArr.indexOf(e.target.value)
            checkArr.splice(removeData, 1)
        }
        setDetils({
            ...userDetils, vehicle: checkArr
        })
    }
    // console.log(userData, "uaerdata========");

    return (

        <div>
            <h1>FORM</h1>
            <div class="container">
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" value={userDetils.firstName} onChange={(e) => handleChange(e)} placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastName" value={userDetils.lastName} onChange={(e) => handleChange(e)} placeholder="Your last name.." />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" value={userDetils.country} onChange={(e) => handleChange(e)}>
                        <option value="select your city">select your city</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select><br />

                    <p>Please select your favorite Web language:</p>
                    <input type="radio" id="html" name="language" value="HTML" checked={userDetils.language === "HTML"} onChange={(e) => handleChange(e)} />
                    <label htmlFor="html">HTML</label><br />
                    <input type="radio" id="css" name="language" value="CSS" checked={userDetils.language === "CSS"} onChange={(e) => handleChange(e)} />
                    <label htmlFor="css">CSS</label><br />
                    <input type="radio" id="javascript" name="language" value="JavaScript" checked={userDetils.language === "JavaScript"} onChange={(e) => handleChange(e)} />
                    <label htmlFor="javascript">JavaScript</label><br /><br />


                    <p>Please select your favorite vehicle:</p>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={userDetils.vehicle.includes("Bike")} onChange={(e) => handleChangecheckbox(e)} />
                    <label htmlFor="vehicle1"> I have a bike</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={userDetils.vehicle.includes("Car")} onChange={(e) => handleChangecheckbox(e)} />
                    <label htmlFor="vehicle2"> I have a car</label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={userDetils.vehicle.includes("Boat")} onChange={(e) => handleChangecheckbox(e)} />
                    <label htmlFor="vehicle3"> I have a boat</label><br /><br />

                    <button type='button' onClick={() => handleSubmit()}>submit</button>

                </form>
            </div>
            <br />
            <br />


        </div>
    )
}

export default Form
