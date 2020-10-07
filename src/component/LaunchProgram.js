import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

import image from "../assets/logo.png";
import "./LaunchProgram.css";

const launchProgram = (props) => {
  return (
    <MDBRow>
      {props.item.map((item) => {
        return (
          <MDBCol md="3" sm="6" xs="12" key={item.flight_number}>
            <div className="padding-TRBL-1em margin-bottom-8 bg-color-white border-radius-7px">
              <div className="bg-color text-align margin-bottom-8">
                <img className="image" src={image} alt="" />
              </div>
              <strong className="color-blue-text font-weight-1000">
                {item.mission_name} # {item.flight_number}
              </strong>
              <div>
                <strong className="font-weight-1000">Mission Ids</strong>
                <ul>
                  {item.mission_id.length ? (
                    item.mission_id.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))
                  ) : (
                    <li>{"NA"}</li>
                  )}
                </ul>
              </div>
              <div>
                <strong className="font-weight-1000">Launch Year : </strong>
                <span>{item.launch_year}</span>
              </div>
              <div>
                <strong className="font-weight-1000">
                  Successful Launch :{" "}
                </strong>
                {item.launch_success === true ? (
                  <span>True</span>
                ) : (
                  <span>False</span>
                )}
              </div>
              <div>
                <strong className="font-weight-1000">
                  Successful Landing :{" "}
                </strong>
                {item.launch_landing === true ? (
                  <span>True</span>
                ) : (
                  <span>False</span>
                )}
              </div>
            </div>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
};

export default launchProgram;
