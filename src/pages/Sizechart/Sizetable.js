import React from "react";
import Table from "react-bootstrap/table";
import "./Sizechart.css";

const Sizetable = (props) => {
  return (
    <React.Fragment>
      <div className="size-tables">
        <div >
          <p>{props.product}</p>
          <Table className="table-properties" bordered hover>
            <thead>
              <tr>
                <th>SIZE</th>
                <th>{props.chestorwaist}</th>
                <th>LENGTH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SMALL</td>
                <td>{props.smallchest}</td>
                <td>{props.smalllength}</td>
              </tr>
              <tr>
                <td>MEDIUM</td>
                <td>{props.mediumchest}</td>
                <td>{props.mediumlength}</td>
              </tr>
              <tr>
                <td>LARGE</td>
                <td>{props.largechest}</td>
                <td>{props.largelength}</td>
              </tr>
              <tr>
                <td>X LARGE</td>
                <td>{props.xlargechest}</td>
                <td>{props.xlargelength}</td>
              </tr>
              <tr>
                <td>XX LARGE</td>
                <td>{props.xxlargechest}</td>
                <td>{props.xxlargelength}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sizetable;
