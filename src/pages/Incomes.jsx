import React from "react";
import { useState, useEffect } from "react";

import Form from "../components/Form";
import Table from "../components/Table";

import '../css/Incomes.css'

const emptyRow = {
    reason: '',
    amount: '',
    date: ''
}

export default function Incomes( {formRef, closeForm} ) {

    const [rows, setRows] = useState([])

    const [newRow, setNewRow] = useState(emptyRow)

    useEffect(() => {        
        if(!localStorage.getItem('Incomes')) {
            localStorage.setItem('Incomes', JSON.stringify(rows))
        } else {
            setRows(JSON.parse(localStorage.getItem('Incomes'))) 
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Incomes', JSON.stringify(rows))
    }, [rows])


    const handleSetNewRow = (e) => {
        const aux = {...newRow}
        aux[e.target.name] = e.target.value
        setNewRow(aux)
    }

    const handleSetRows = (newRow) => setRows([...rows, newRow])

    const deleteRow = (idx) => setRows(rows.filter( (row, i) => idx != i))
        
    const handleSubmit = (e) => {
        e.preventDefault()

        handleSetRows(newRow)
        setNewRow(emptyRow)
        closeForm()
    }


    return (
        <>
            <Form handleSubmit={handleSubmit} handleSetNewRow={handleSetNewRow} newRow={newRow} formRef={formRef} closeForm={closeForm} />
            <Table rows={rows} deleteRow={deleteRow}/>
            <button onClick={closeForm} className='mg-inline form-btn'>+ Add new</button>
        </>

    )
}