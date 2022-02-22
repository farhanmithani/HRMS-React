import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PropTypes } from "prop-types";

const DataGrid = ({ rows, column, fecthmore }) => {
    const [key, Setkey] = useState([]);

    const fectchRowKey = (rows) => {
        Setkey(Object.keys(rows[0]))
    }
    useEffect(() => {
        fectchRowKey(rows);
    }, [rows])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 'md' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                column.map((item, index) => (
                                    <TableCell key={index}>{item}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        <InfiniteScroll
                            dataLength={rows.length}
                            next={fecthmore}
                            hasMore={true}
                            // loader={ }    // add skeleton loader for the data grid
                            // endMessage={ } // add end of the data messgae
                        >
                            {
                                rows.map((row,elem) =>{ 
                                    return (
                                <>
                                    <TableRow
                                        key={elem}
                                        sx={{ maxWidth: 'md' }}
                                    >
                                        {
                                            key.map((item,index)=>{
                                                console.log(item,"item")
                                            return (
                                                <TableCell component="th" scope="row" key={index}>
                                                {row[item]}
                                                </TableCell>
                                            )}) 
                                        }
                                    </TableRow>
                                </>
                                )})
                            }
                        </InfiniteScroll>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

DataGrid.propTypes = {
    rows: PropTypes.array.isRequired,
    column: PropTypes.array.isRequired,
    fecthmore: PropTypes.func
}

export default DataGrid