import React, { useEffect } from 'react'
import axios from 'axios'

const APIData = () => {

    // const fetchData = () => {
    //     fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aabc6a31a37b45b2bea490f8209d4d3c")
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }
    // const fetchData = async () => {
    //     const response = await fetch ("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aabc6a31a37b45b2bea490f8209d4d3c")
    //     const data = await response.json()
    //     console.log(data, "response======>");
    // }
    // const fetchData = () => {
    //     axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aabc6a31a37b45b2bea490f8209d4d3c")
    //     .then((response) => {
    //         console.log(response, "axiossssssssssssssssss");
    //     })
    // }
    const fetchData = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&q=Sunday Night Football&apiKey=aabc6a31a37b45b2bea490f8209d4d3c")
        console.log(response, "response========>");
    }
    const data = {
        firstName: "abc",
        lastName: "xyz",
        country: "us",
        language: "html",
        vehicle: ["car"]
    }

    // const postData = () => {
    //     fetch('https://dummyjson.com/products/add', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             data
    //         })
    //       })
    //       .then(res => res.json())
    // }

    const postData = async () => {
        const post = await axios.post('https://dummyjson.com/products/add', data)
        console.log(data, "response======>");
    }

    // const putData = () => {
    //     fetch('https://dummyjson.com/products/1', {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             data
    //         })
    //     })
    //         .then(res => res.json())
    // }

    const putData = async () => {
        const put = await axios.put('https://dummyjson.com/products/1', data)
    }

    // const deleteData = () => {
    //     fetch('https://dummyjson.com/products/1', {
    //         method:'DELETE'
    //     })
    //     .then(res => res.json())
    // }

    const deleteData = async () => {
        const data1 = await axios.delete('https://dummyjson.com/products/1', data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            APIData
            <button onClick={() => postData()}>save</button>
            <button onClick={() => putData()}>edit</button>
            <button onClick={() => deleteData()}>delete</button>
        </div>
    )
}

export default APIData
