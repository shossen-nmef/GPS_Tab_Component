import React, {useState, useEffect} from "react";

import {
    CssBaseline,
    makeStyles,
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead,
    Button, 
    TableRow} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import { Edit, Delete } from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SaveIcon from '@material-ui/icons/Save';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteConfirmModal from './deleteConfirm';

import './eSignature.scss';


const useStyles = makeStyles((theme) => ({
    name: {
        width: '20%',
        '& .MuiInputBase-input': {
            background: 'none !important',
            border: '1px solid #AAB7B8',
            borderRadius: '5px'
        }
    },
    firstRow: {
        '& .MuiInputBase-input': {
            background: 'none !important',
            borderRadius: '5px'
        }
    },
    type: {
        width: '20%',
        '& .MuiInputBase-input': {
            background: 'none !important',
            border: '1px solid #AAB7B8',
            borderRadius: '5px'
        }
    },
    selection: {
        width: '20%',
        '& .MuiInputBase-input': {
            background: 'none !important',
            borderRadius: '5px'
        }
    },
    email: {
        width: '25%',
        '& .MuiInputBase-input': {
            background: 'none !important',
            border: '1px solid #AAB7B8',
            borderRadius: '5px'
        }
    },
    action: {
        width: '15%',
        display: 'flex'
    }
}));

const ApplicantEdit = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [deleteItem, seDeleteItem] = useState({});
    const [carbonCopies, setCarbonCopies] = useState([]);


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
    ];

    const CarbonCopies = [
        {
            name: 'Daniel Lizarazo',
            title: 'Agency Person',
            selection: [{
                label: 'Carbon Copies',
                value: 'Carbon Copies'
            }],
            email: 'dlizarazo@mmpcapital.com',
            isDisabled: true
        },
        {
            name: 'Carla Gokey',
            title: 'Account Manager',
            selection: [{
                label: 'Carbon Copies',
                value: 'Carbon Copies'
            }],
            email: 'cgokey@northmillef.com.invalid',
            isDisabled: true
        }
    ];

    useEffect(() => {
        
        setCarbonCopies(CarbonCopies);

        return () => {
            setCarbonCopies({});
        }
    }, []);

    const handleCorboneCopies =(indx, type)=> {

        const tempData = {
            name: '',
            title: '',
            selection: [{
                label: 'Carbon Copies',
                value: 'Carbon Copies'
            }],
            email: '',
            isDisabled: false
        };

        if(type=='edit') {

            let data = [...carbonCopies];
            let item = {...carbonCopies[indx], isDisabled: false};
            data[indx] = item;
            setCarbonCopies(data);
        }
        if(type == 'add'){
            setCarbonCopies([...carbonCopies, tempData]);
        }
    }

    const DeleteItem = confirm => {
        setOpen(false);
        if(confirm) {
            if(deleteItem.type=='carboncopy') {
            
               let data = carbonCopies.filter((item, itemIndx) => itemIndx !== deleteItem.indx);
            //    console.log('data-- ', data);
                setCarbonCopies(data);
                seDeleteItem({});
            }
        }
    }

    const handleCarbonCopyTextvalue=(indx, e)=> {
        e.preventDefault();
        let data = [...carbonCopies];
        let item = { ...carbonCopies[indx],  [e.target.name]:e.target.value};
        data[indx] = item;
        setCarbonCopies(data);
    }

    return (
        <>
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
                            <TableCell className={classes.name} style={{fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell className={classes.title} style={{fontWeight: 'bold'}}>Title</TableCell>
                            <TableCell className={classes.selection} style={{fontWeight: 'bold'}}>Selection</TableCell>
                            <TableCell className={classes.email} style={{fontWeight: 'bold'}}>Email Address</TableCell>
                            <TableCell style={{fontWeight: 'bold', width:'15%'}}>Actions</TableCell>
                        </TableRow >
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="left" className={classes.firstRow}> 
                                <TextField  variant="outlined" fullWidth size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.firstRow}>
                                <TextField  variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.firstRow}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={SelectionData}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" className={classes.firstRow}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left">
                                <IconButton color="primary" component="span">
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
                            <TableCell align="left" className={classes.name}>
                                <TextField variant="outlined" fullWidth size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.type}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.selection}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={GuarantorData}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" className={classes.email}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.action}>
                                <IconButton color="primary" component="span">
                                    <Edit style={{fontSize: '28px'}} />
                                </IconButton>
                                <IconButton color="secondary" component="span">
                                    <Delete style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left" className={classes.name}>
                                <TextField variant="outlined" fullWidth size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.type}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.selection}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={GuarantorData}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" className={classes.email}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.action}>
                                <IconButton color="primary" component="span">
                                    <Edit style={{ fontSize: '28px' }} />
                                </IconButton>
                                <IconButton color="secondary" component="span">
                                    <Delete style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left" className={classes.name}>
                                <TextField variant="outlined" fullWidth size="small" id="filled-basic" value="NMEF Eexcutive" disabled={true}/>
                            </TableCell>
                            <TableCell align="left" className={classes.type}>
                                <TextField variant="outlined" size="small" id="filled-basic" disabled={true} />
                            </TableCell>
                            <TableCell align="left" className={classes.selection}>
                                <TextField variant="outlined" size="small" fullWidth disabled={true} id="filled-basic" value="Secured Party" />
                            </TableCell>
                            <TableCell align="left" className={classes.email}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" disabled={true} value="docexecs@nmef.com" />
                            </TableCell>
                            <TableCell className={classes.action}>

                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan="5"><span className='heading'>Authorization Agreement for Automatic Withdrawal</span></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="left" className={classes.name}>
                                <TextField variant="outlined" size="small" fullWidth fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.type}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.selection}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={SelectionData}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" className={classes.email}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.action}>
                                <IconButton color="primary" component="span">
                                    <Edit style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan="5"><span className='heading'>Billing Instruction / Pay Proceeds</span></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="left" className={classes.name}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.type}>
                                <TextField variant="outlined" size="small" id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.selection}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={SelectionData}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                />
                            </TableCell>
                            <TableCell align="left" className={classes.email}>
                                <TextField variant="outlined" size="small" fullWidth id="filled-basic" />
                            </TableCell>
                            <TableCell align="left" className={classes.action}>
                                <IconButton color="primary" component="span">
                                    <Edit style={{ fontSize: '28px' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan="5"><span className='heading'>Carbon Copies</span></TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    
                        {
                            carbonCopies && carbonCopies.map((item, indx) => (
                            
                                <TableRow key={indx}>
                                    <TableCell align="left" className={classes.name}>
                                        <TextField variant="outlined" disabled={item.isDisabled} name='name' value={item.name} onChange={(e) => handleCarbonCopyTextvalue(indx, e)} size="small" fullWidth id="filled-basic" />
                                    </TableCell>
                                    <TableCell align="left" className={classes.type}>
                                        <TextField variant="outlined" disabled={item.isDisabled} name='title' value={item.title} onChange={(e) => handleCarbonCopyTextvalue(indx, e)} size="small" id="filled-basic" />
                                    </TableCell>
                                    
                                    <TableCell align="left" className={classes.selection}>
                                        <Autocomplete
                                            id="combo-box-demo"
                                            disabled={item.isDisabled}
                                            options={item.selection}
                                            getOptionLabel={(option) => option.label}
                                            value={item.selection[0]}
                                            renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                                        />
                                    </TableCell>
                                    <TableCell align="left" className={classes.email}>
                                        <TextField variant="outlined" name='email' disabled={item.isDisabled} value={item.email} onChange={(e) => handleCarbonCopyTextvalue(indx, e)} size="small" fullWidth id="filled-basic" />
                                    </TableCell>
                                    <TableCell align="left" className={classes.action}>
                                        <IconButton color="primary" component="span" onClick={()=> handleCorboneCopies(indx, 'edit')}>
                                            <Edit style={{ fontSize: '28px' }} />
                                        </IconButton>
                                        <IconButton color="secondary" component="span" onClick={() => {
                                            setOpen(true); 
                                            seDeleteItem({type:'carboncopy', indx: indx});
                                        }}>
                                            <Delete style={{ fontSize: '28px' }} />
                                        </IconButton>
                                        <IconButton color="primary" component="span" onClick={() => handleCorboneCopies(indx, 'add')}>
                                            <AddCircleOutlineIcon style={{ fontSize: '28px', color: 'green' }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

            </TableContainer>

            <Button
                style={{ float: 'left', margin:'20px'}}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}>
                Save
            </Button>
            <CssBaseline/>
        </form>

        <DeleteConfirmModal openModal={open} removeItem={DeleteItem}/>

        </>
    );


}
export default ApplicantEdit;
