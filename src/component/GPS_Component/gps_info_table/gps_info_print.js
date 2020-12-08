import React, { useRef, forwardRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@material-ui/core";
import { Print } from "@material-ui/icons";

import "./gps_info_print_style.scss";

const StepThree = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <title>Gps Information</title>

      <table style={{ width: "100%" }}>
        <thead className="gps_print_table">
          <th className="table_head">Asset #</th>
          <th className="table_head">Year/Make/Model</th>
          <th className="table_head">VIN</th>
          <th className="table_head">Description</th>
        </thead>
        <tbody>
          <td className="table_column">A-0108097 </td>
          <td className="table_column">2017 FREIGHTLINER CASCADIA</td>
          <td className="table_column">3AKJGLDR8HSHT4440</td>
          <td className="table_column">
            6x4 125in. BBC 'Cascadia' Conv. 72in. Raised Roof Sleeper Tractor w/
            Air Brakes
          </td>
        </tbody>
      </table>
      <br />

      <table className="gps_print_table">
        <tr>
          <th className="table_head">GPS Serial</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Business Name</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Contact Person</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Phone Number Primary</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Phone Number Secondary</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Address</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Email</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Ordered</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Ordered Date</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Aspen Ordered</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Aspen Ordered Date</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Scheduled</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Scheduled Date</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Installed</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Installed Date</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Located</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Auto-Report Successful</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">GPS Tracking</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Special Requests</th>
          <td className="table_column"></td>
        </tr>
        <tr>
          <th className="table_head">Additional Notes</th>
          <td className="table_column"></td>
        </tr>
      </table>
    </div>
  );
});

const PrintDocument = ({}) => {
  const [print, setPrint] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const printInfo = () => {
    setPrint(true);
  };

  useEffect(() => {
    handlePrint();

    return () => {
      setPrint(false);
    };
  }, [print]);

  return (
    <div className="container">
      {print ? <StepThree ref={componentRef} /> : null}
      <Button
        style={{
          float: "right",
          marginRight: "10px",
        }}
        onClick={printInfo}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<Print />}
      >
        Print
      </Button>
    </div>
  );
};

export default PrintDocument;
