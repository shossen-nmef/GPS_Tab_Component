import React from "react";

import {
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import { Edit, Delete } from '@material-ui/icons';

import './eSignature.scss';

const ApplicantEdit = () => {

    const SelectionData = [
        {
            label: 'Debtor',
            value: 'Debtor'
        }
    ];

    const GuarantorData = [
        {
            label: 'Primary Guarantor',
            value: 'Primary Guarantor'
        },
        {
            label: 'Co-Guarantor',
            value: 'Co-Guarantor'
        },
        {
            label: 'Corporate Guarantor',
            value: 'Corporate Guarantor'
        }
    ]

    return (
        <form noValidate autoComplete="off">

            <TableContainer component={Paper} className='esignature-table'>
                
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan="5"><span className='heading'>Information for Corporation</span></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: '20%',fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell style={{width: '20%',fontWeight: 'bold'}}>Title</TableCell>
                            <TableCell style={{width: '25%', fontWeight: 'bold'}}>Selection</TableCell>
                            <TableCell style={{width: '24.5%',fontWeight: 'bold'}}>Email Address</TableCell>
                            <TableCell style={{width: '10.5%',fontWeight: 'bold'}}>Actions</TableCell>
                        </TableRow >
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="left"> 
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left">
                                <TextField  variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={SelectionData}
                                    getOptionLabel={(option) => option.label}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left">
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Edit style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan="5"><span className='heading'>Legal Documents for Loan</span></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="left" style={{ width: '20%' }}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" style={{ width: '20%' }}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={GuarantorData}
                                    getOptionLabel={(option) => option.label}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" style={{ display:'flex' }}>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Edit style={{fontSize: '28px'}} />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Delete style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left" style={{ width: '20%' }}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" style={{ width: '20%' }}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={GuarantorData}
                                    getOptionLabel={(option) => option.label}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" style={{ display: 'flex' }}>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Edit style={{ fontSize: '28px' }} />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Delete style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left" style={{ width: '20%' }}>
                                <TextField variant="outlined" size="small" id="filled-basic" value="NMEF Eexcutive" disabled="true"/>
                            </TableCell>
                            <TableCell align="left" style={{ width: '20%' }}>
                                <TextField variant="outlined" size="small" id="filled-basic" disabled="true" />
                            </TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>
                                <TextField variant="outlined" size="small" fullWidth disabled="true" id="filled-basic" value="Secured Party" />
                            </TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" disabled="true" value="docexecs@nmef.com" />
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

            </TableContainer>
        </form>
    );


}
export default ApplicantEdit;
