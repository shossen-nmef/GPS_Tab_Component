import React from 'react'
import { Table } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './AssetInfoTable.scss'

const AssetInfoTable =()=> {
    return(
        <Table bordered size="sm" className='asset-table'>
            <thead>
                <tr>
                    <th>Asset #</th>
                    <th>Year/Make/Model</th>
                    <th>VIN</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A-0107091</td>
                    <td>2020 KML 1160-7</td>
                    <td>99121299121</td>
                    <td>Concrete Pump</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default AssetInfoTable;