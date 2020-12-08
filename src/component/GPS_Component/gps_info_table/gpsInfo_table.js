import React, { useState } from "react";
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
  FormLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useReactToPrint } from "react-to-print";
import SaveIcon from "@material-ui/icons/Save";
import { Print } from "@material-ui/icons";
import NMEFTextPhoneField from "../nmef-phone-text/nmef-phone-text";
import AssetInfoTable from "../asset_info_table/AssetInfoTable";
import GoogleMap from "../GmapAutoComplete/GoogleMap";
import GpsInfoPrint from "./gps_info_print";
import "./gpsInfo_table.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "right",
    color: theme.palette.text.primary,
  },
  radioButton: {
    position: "relative",
    left: -105,
    top: 0,
  },
  borderBottom: {
    borderBottom: "1.8px solid #BDC3C7",
  },
  leftText: {
    textAlign: "right",
    color: "#17202A",
  },
  rightText: {
    textAlign: "right",
    color: "#17202A",
    position: "relative",
    top: -14,
  },
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
    location: "",
  });

  const updateMapInfo = (data) => {
    setMapState({
      location: data.location,
    });
  };

  const [GpsOrder, setGpsOrder] = useState(false);
  const [AspenOrdered, setAspenOrder] = useState(false);
  const [GPSScheduled, setGpsScheduled] = useState(false);
  const [GPSInstalled, setGPSInstalled] = useState(false);
  const [primaryNumber, setPrimaryNumber] = useState({
    cleave: "",
  });
  const [secondaryNumber, setSecondaryNumber] = useState({
    cleave: "",
  });

  const customePrimaryNumber = (name) => (event) => {
    setPrimaryNumber({
      [name]: event.target.value,
    });
  };

  const customeSecondaryNumber = (name) => (event) => {
    setSecondaryNumber({
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <AssetInfoTable />

      <form>
        <Paper className="gps-table">
          <TableContainer component={Paper} className="esignature-table">
            <Table size="small" aria-label="a dense table">
              <TableBody>
                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      GPS Serial #
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <TextField
                      className={classes.paper}
                      fullWidth
                      placeholder="Enter Gps Id"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      GPS Order
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="No"
                      >
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
                        {GpsOrder ? (
                          <TextField
                            type="date"
                            value="12/12/2020"
                            style={{ paddingLeft: "20px" }}
                            size="small"
                            variant="outlined"
                          />
                        ) : null}
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      Business Name
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <TextField
                      className={classes.paper}
                      fullWidth
                      placeholder="Business Name"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      Aspen Ordered
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="No"
                      >
                        <FormControlLabel
                          value="No"
                          control={<Radio color="primary" />}
                          onChange={() => setAspenOrder(false)}
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
                        {AspenOrdered ? (
                          <TextField
                            type="date"
                            style={{ paddingLeft: "20px" }}
                            size="small"
                            variant="outlined"
                          />
                        ) : null}
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      * Contact Person
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <TextField
                      className={classes.paper}
                      fullWidth
                      placeholder="Enter Contact Person"
                      color="secondary"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      GPS Scheduled
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="No"
                      >
                        <FormControlLabel
                          value="No"
                          control={<Radio color="primary" />}
                          onChange={() => setGpsScheduled(false)}
                          label="No"
                          labelPlacement="start"
                        />

                        <FormControlLabel
                          value="Yes"
                          control={<Radio color="primary" />}
                          onChange={() => setGpsScheduled(true)}
                          label="Yes"
                          labelPlacement="start"
                        />

                        {GPSScheduled ? (
                          <TextField
                            type="datetime-local"
                            style={{ paddingLeft: "20px", width: "212px" }}
                            size="small"
                            variant="outlined"
                          />
                        ) : null}
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      * Phone Number Primary
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <NMEFTextPhoneField
                      placeholder="Enter Primary Number"
                      value={primaryNumber}
                      onChange={customePrimaryNumber}
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      GPS Installed
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="No"
                      >
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
                        {GPSInstalled ? (
                          <TextField
                            type="date"
                            style={{ paddingLeft: "20px" }}
                            size="small"
                            variant="outlined"
                          />
                        ) : null}
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      * Phone Number Secondary
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <NMEFTextPhoneField
                      placeholder="Enter Secondary Number"
                      value={secondaryNumber}
                      onChange={customeSecondaryNumber}
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      GPS Located
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="No"
                      >
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
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      Email
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <TextField
                      className={classes.paper}
                      fullWidth
                      placeholder="Enter Email"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className={classes.rightText} component="legend">
                      GPS Auto-Report Successful
                    </FormLabel>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="No"
                      >
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
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className="gps-tracking" component="legend">
                      GPS Tracking
                    </FormLabel>
                    <FormLabel className="gps_address" component="legend">
                      Address
                    </FormLabel>
                  </TableCell>

                  <TableCell style={{ width: "30%" }}>
                    <TextField
                      className="gps_tracking_input"
                      fullWidth
                      placeholder="Enter GPS Tracking data"
                      size="small"
                      variant="outlined"
                    />
                    <GoogleMap
                      className="gps_address_input"
                      placeholder="Enter Address"
                      updateMapInfo={updateMapInfo}
                    />
                  </TableCell>

                  <TableCell style={{ width: "15%" }}>
                    <FormLabel className="special_request" component="legend">
                      Special Requests
                    </FormLabel>
                  </TableCell>

                  <TableCell style={{ width: "50%" }}>
                    <FormControl
                      required
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup className="special_request_checkbox">
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={state.VendorToInstall}
                              onChange={handleChange}
                              name="VendorToInstall"
                            />
                          }
                          label="Vendor To Install"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={state.StandAlone}
                              onChange={handleChange}
                              name="StandAlone"
                            />
                          }
                          label="Stand Alone"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={state.Rush}
                              onChange={handleChange}
                              name="Rush"
                            />
                          }
                          label="Jason Killian"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={state.PrivateParty}
                              onChange={handleChange}
                              name="PrivateParty"
                            />
                          }
                          label="Private Party"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={state.ClientToInstall}
                              onChange={handleChange}
                              name="ClientToInstall"
                            />
                          }
                          label="Rush"
                        />
                      </FormGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/*Additional Notes*/}
        <Grid
          container
          direction="row"
          spacing={1}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <FormLabel className={classes.leftText} component="legend">
              Additional Notes
            </FormLabel>
          </Grid>

          <Grid item xs={10} style={{ borderRight: "1.8px solid #BDC3C7" }}>
            <TextField
              className={classes.paper}
              fullWidth
              placeholder="Additional Notes"
              size="medium"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/*Additional Notes*/}
        <Button
          style={{ float: "right", marginRight: "10px", background: "green" }}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>

        <GpsInfoPrint />
      </form>
    </div>
  );
};

export default GpsInfoTable;
