import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { TextField } from "@mui/material";


const API = process.env.REACT_APP_API_URL;

const SearchBar = () => {

    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get(API + "/resources")
            .then((response) => {
                console.log(response)
                setResources(response.data.result);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    const [searchInput, setSeachInput] = useState("")

    const handleChange = (event) => {
        event.preventDefault()
        setSeachInput(event.target.value)
    };

    if (searchInput.length > 0) {
        resources.filter((resource) => {
            return resource.resource_category.match(searchInput)
        })
    }

    return (
        <div>
            <TextField
            id="filled_basic"
            label="Search"
                type="search"
                placeholder="Search here"
                onChance={handleChange}
                value={searchInput}
            />

        </div>
    )
}

export default SearchBar