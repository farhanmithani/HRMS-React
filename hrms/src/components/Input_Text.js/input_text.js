import './input_text.css'
import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { PropTypes} from 'prop-types'
import { isRejected } from '@reduxjs/toolkit';


const Input_Text = ({value,input,handleChange}) => {
   
    return (
        <>
            <TextField data-testid="rawText" label={value} variant="outlined" onChange={handleChange}/>

        </>);
};
Input_Text.propTypes={
    value:PropTypes.string.isRequired,
    handleChange:PropTypes.func,
}

export default Input_Text;