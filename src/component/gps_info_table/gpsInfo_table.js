import React, { useState } from 'react';
import {
    Paper,
    Grid,
    makeStyles,
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControl,
    FormGroup,
    Checkbox,
    FormControlLabel,
    FormLabel
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import { Print } from '@material-ui/icons';
import './gpsInfo_table.scss'
import NMEFTextPhoneField from '../nmef-phone-text/nmef-phone-text';
import GoogleMap from '../GmapAutoComplete/GoogleMap';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'right',
        color: theme.palette.text.primary,
    },
    radioButton: {
        position: 'relative', 
        left: -105,
        top: 0, 
    },
    borderBottom: {
        borderBottom: '1.8px solid #BDC3C7'
    },
    leftText: {
        textAlign: 'right',
        color: '#17202A'
    }
}));

const GpsInfoTable = () => {
    const classes = useStyles();

    const [state, setState] = useState({

        StandAlone: false,
        Rush: false,
        ClientToInstall: false,
        VendorToInstall: false,
        PrivateParty: false,
        AdditionalNotes: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [locationstate, setMapState] = useState({
        location: ''
    });

    const updateMapInfo = (data) => {
        setMapState({
            location: data.location
        });
    }

    const [GpsOrder, setGpsOrder] = useState(false);
    const [AspenOrdered, setAspenOrder] = useState(false);
    const [GPSScheduled, setGpsScheduled] = useState(false);
    const [GPSInstalled, setGPSInstalled] = useState(false);
    const [primaryNumber, setPrimaryNumber] = useState({
        cleave: ""
    });
    const [secondaryNumber, setSecondaryNumber] = useState({
        cleave: ""
    });

    const customePrimaryNumber = name => event => {
        setPrimaryNumber({
            [name]: event.target.value
        });
    };

    const customeSecondaryNumber = name => event => {
        setSecondaryNumber({
            [name]: event.target.value
        });
    };

    return (
        <div className={classes.root} >
            <form>
                <Paper className='gps-table'>
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" className={classes.borderBottom}>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">GPS Serial #</FormLabel>
                        </Grid>

                        <Grid item xs={3} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                            <TextField className={classes.paper} fullWidth placeholder="Enter Gps Id" size="small" variant="outlined" />
                        </Grid>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">GPS Order</FormLabel>
                        </Grid>

                        <Grid item xs={5}>
                            <FormControl component="fieldset" className={GpsOrder ? '' : classes.radioButton}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="No">

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        onChange={() => setGpsOrder(false)}
                                        label="No"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Yes"
                                        onChange={() => setGpsOrder(true)}
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="start"
                                    />
                                    {GpsOrder? <TextField type="date" style={{ paddingLeft: '20px' }} size="small" variant="outlined" /> : null}
                                </RadioGroup>

                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* Business Name */}
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" style={{ borderBottom: '1.8px solid #BDC3C7' }}>
                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">Business Name</FormLabel>
                        </Grid>

                        <Grid item xs={3} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                            <TextField className={classes.paper} fullWidth placeholder="Business Name" size="small" variant="outlined" />
                        </Grid>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">Aspen Ordered</FormLabel>
                        </Grid>

                        <Grid item xs={5}>
                            <FormControl component="fieldset" className={AspenOrdered?'': classes.radioButton}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="No">

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        onChange={()=>setAspenOrder(false)}
                                        label="No"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        onChange={() => setAspenOrder(true)}
                                        label="Yes"
                                        labelPlacement="start"
                                    />
                                    {AspenOrdered?<TextField type="date" style={{ paddingLeft: '20px' }} size="small" variant="outlined" /> : null}
                                </RadioGroup>

                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* Business Name */}

                    {/* Contact person  */}
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" style={{ borderBottom: '1.8px solid #BDC3C7' }}>
                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">* Contact Person</FormLabel>
                        </Grid>

                        <Grid item xs={3} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                            <TextField className={classes.paper} fullWidth placeholder="Enter Contact Person" color="secondary" size="small" variant="outlined" />
                        </Grid>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">GPS Scheduled</FormLabel>
                        </Grid>

                        <Grid item xs={5}>
                            <FormControl component="fieldset" className={GPSScheduled? '': classes.radioButton}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="No">

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        onChange={()=> setGpsScheduled(false)}
                                        label="No"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        onChange={()=> setGpsScheduled(true)}
                                        label="Yes"
                                        labelPlacement="start"
                                    />

                                    {GPSScheduled? <TextField type="datetime-local" style={{ paddingLeft: '20px', width: '212px' }} size="small" variant="outlined" /> : null}

                                </RadioGroup>

                            </FormControl>
                        </Grid>
                    </Grid>

                    {/** Contact Person */}

                    {/*Phone Number Primary*/}
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" style={{ borderBottom: '1.8px solid #BDC3C7' }}>
                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">* Phone Number Primary</FormLabel>
                        </Grid>

                        <Grid item xs={3} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                            
                            < NMEFTextPhoneField
                                placeholder="Enter Primary Number"
                                value={primaryNumber}
                                onChange={customePrimaryNumber}
                            />

                        </Grid>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">GPS Installed</FormLabel>
                        </Grid>

                        <Grid item xs={5}>
                            <FormControl component="fieldset" className={GPSInstalled? '': classes.radioButton}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="No">

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        onChange={() => setGPSInstalled(false)}
                                        label="No"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        onChange={() => setGPSInstalled(true)}
                                        label="Yes"
                                        labelPlacement="start"
                                    />
                                    {GPSInstalled? <TextField type="date" style={{ paddingLeft: '20px' }} size="small" variant="outlined" /> : null}
                                </RadioGroup>

                            </FormControl>
                        </Grid>
                    </Grid>
                    {/*Phone Number Primary*/}

                    {/*Phone Number Secondary*/}
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" style={{ borderBottom: '1.8px solid #BDC3C7' }}>
                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">* Phone Number Secondary</FormLabel>
                        </Grid>

                        <Grid item xs={3} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                            < NMEFTextPhoneField
                                placeholder="Enter Secondary Number"
                                value={secondaryNumber}
                                onChange={customeSecondaryNumber}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">GPS Located</FormLabel>
                        </Grid>

                        <Grid item xs={5}>
                            <FormControl component="fieldset" className={classes.radioButton}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="No">

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="start"
                                    />

                                </RadioGroup>

                            </FormControl>
                        </Grid>
                    </Grid>

                    {/*Phone Number Secondary*/}

                    {/*Email*/}
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" style={{ borderBottom: '1.8px solid #BDC3C7' }}>
                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">Email</FormLabel>
                        </Grid>

                        <Grid item xs={3} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                            <TextField className={classes.paper} fullWidth placeholder="Enter Email" size="small" variant="outlined" />
                        </Grid>

                        <Grid item xs={2}>
                            <FormLabel className={classes.leftText} component="legend">GPS Auto-Report Successful</FormLabel>
                        </Grid>

                        <Grid item xs={5}>
                            <FormControl component="fieldset" className={classes.radioButton}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="No">

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>

                            </FormControl>
                        </Grid>
                    </Grid>
                    {/*Email*/}

                    {/*GPS Tracking*/}
                    <Grid container direction="row" spacing={1} justify="center" alignItems="center" style={{ borderBottom: '1.8px solid #BDC3C7' }}>

                        <Grid container direction='column' item xs={4}>
                            <Grid container direction="row" justify="center" alignItems="center" >
                                <Grid item xs={3}>
                                    <FormLabel className={classes.leftText} component="legend">GPS Tracking</FormLabel>
                                </Grid>

                                <Grid item xs={9}>
                                    <TextField className={classes.paper} fullWidth placeholder="Enter GPS Tracking data" size="small" variant="outlined" />
                                </Grid>

                                <Grid item xs={3}>
                                    <FormLabel className={classes.leftText} component="legend">* Address</FormLabel>
                                </Grid>

                                <Grid item xs={9}>
                                    <GoogleMap className={classes.paper} placeholder="Enter Address"  updateMapInfo={updateMapInfo} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container direction='column' item xs={6} style={{ borderLeft: '1.8px solid #BDC3C7' }}>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={3}>
                                    <FormLabel className={classes.leftText} component="legend">Special Requests</FormLabel>
                                </Grid>

                                <Grid item xs={7}>
                                    <FormControl required component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" checked={state.StandAlone} onChange={handleChange} name="StandAlone" />}
                                                label="Stand Alone"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" checked={state.Rush} onChange={handleChange} name="Rush" />}
                                                label="Jason Killian"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" checked={state.ClientToInstall} onChange={handleChange} name="ClientToInstall" />}
                                                label="Rush"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" checked={state.VendorToInstall} onChange={handleChange} name="VendorToInstall" />}
                                                label="Vendor To Install"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" checked={state.PrivateParty} onChange={handleChange} name="PrivateParty" />}
                                                label="Private Party"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                    {/*GPS Tracking*/}

                </Paper>

                {/*Additional Notes*/}
                <Grid container direction="row" spacing={1} justify="center" alignItems="center">
                    <Grid item xs={2}>
                        <FormLabel className={classes.leftText} component="legend">Additional Notes</FormLabel>
                    </Grid>

                    <Grid item xs={10} style={{ borderRight: '1.8px solid #BDC3C7' }}>
                        <TextField className={classes.paper} fullWidth placeholder="Additional Notes" size="medium" variant="outlined" />
                    </Grid>
                </Grid>
                {/*Additional Notes*/}
                <Button
                    style={{ float: 'right', marginRight: '10px', background: 'green' }}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}>
                    Save
                </Button>

                <Button
                    style={{float:'right',marginRight:'10px'}}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<Print />}>
                    Print
                </Button>

            </form>
        </div>
    );
}

export default GpsInfoTable;