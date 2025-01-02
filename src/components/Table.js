import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUserData, editUserData } from '../redux/Action';

const Table = () => {
    const navigate = useNavigate()
    const tableData = useSelector((state) => state?.data) || [];
    const dispatch = useDispatch()

    const handleEdit = (index) => {
        navigate(`/edit/${index}`);
        console.log(index, "editindex======>");
        dispatch(editUserData(index))
    }

    const handleDelete = (index) => {
        console.log(index, "deleteindex======>");
        dispatch(deleteUserData(index))
    }
    return (
        <div>
            <h1>TABLE</h1>
            <table>
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>country</th>
                        <th>language</th>
                        <th>vehicle</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((value, index) => (
                        <tr>
                            <td>{value.firstName}</td>
                            <td>{value.lastName}</td>
                            <td>{value.country}</td>
                            <td>{value.language}</td>
                            <td>{value.vehicle}</td>
                            <td>
                                <button type='button' style={{ marginRight: "5px" }} onClick={() => handleEdit(index)}>Edit</button>
                                <button type='button' style={{ background: "red" }} onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
