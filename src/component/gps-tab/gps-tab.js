import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import './gps-tab.scss'

import AssetInfoTable from '../asset_info_table/AssetInfoTable';
import GpsInfoTable from '../gps_info_table/gpsInfo_table';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div className='gps-entry-layout'>
                        {children}
                    </div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TabsWrappedLabel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="wrapped label tabs example">

                    {/* make conditonal render tabs */}
                    <Tab label="2020 KML 1160-7" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />

                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <AssetInfoTable />
                <GpsInfoTable />

            </TabPanel>
            <TabPanel value={value} index={1}>
                item two
            </TabPanel>

        </div>
    );
}