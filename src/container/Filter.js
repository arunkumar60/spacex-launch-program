import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from "axios";

import "./Filter.css";
import FilterSelection from "../component/FilterSelection";
import Spinner from "../component/Spinner";
import LaunchProgram from "../component/LaunchProgram";

class Filter extends Component {
  state = {
    missionData: [],
    loading: false,
  };

  componentDidMount = () => {
    this.getMissionData("https://api.spacexdata.com/v3/launches?limit=100");
  };
  getMissionData = (url) => {
    this.setState({ loading: true });
    axios
      .get(url)
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ missionData: response.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  selectFilter = (filters) => {
    let queryParam = "";
    if (
      filters.launchYear &&
      filters.launchSuccess === "" &&
      filters.landSuccess === ""
    ) {
      let launchYear = parseInt(filters.launchYear);
      queryParam = `&launch_year=${launchYear}`;
    }
    if (
      filters.launchYear &&
      filters.launchSuccess &&
      filters.landSuccess === ""
    ) {
      let launchSuccess = filters.launchSuccess === "True" ? true : false;
      let launchYear = parseInt(filters.launchYear);
      queryParam = `&launch_success=${launchSuccess}&launch_year=${launchYear}`;
    }
    if (filters.launchYear && filters.launchSuccess && filters.landSuccess) {
      let launchSuccess = filters.launchSuccess === "True" ? true : false;
      let landSuccess = filters.landSuccess === "True" ? true : false;
      let launchYear = parseInt(filters.launchYear);
      queryParam = `&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${launchYear}`;
    }
    if (
      filters.launchYear === "" &&
      filters.launchSuccess &&
      filters.landSuccess
    ) {
      let launchSuccess = filters.launchSuccess === "True" ? true : false;
      let landSuccess = filters.landSuccess === "True" ? true : false;
      queryParam = `&launch_success=${launchSuccess}&land_success=${landSuccess}`;
    }
    if (filters.launchYear && filters.launchSuccess && filters.landSuccess) {
      let launchSuccess = filters.launchSuccess === "True" ? true : false;
      let landSuccess = filters.landSuccess === "True" ? true : false;
      let launchYear = parseInt(filters.launchYear);
      queryParam = `&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${launchYear}`;
    }
    if (
      filters.launchYear === "" &&
      filters.launchSuccess &&
      filters.landSuccess === ""
    ) {
      let launchSuccess = filters.launchSuccess === "True" ? true : false;
      queryParam = `&launch_success=${launchSuccess}`;
    }
    if (
      filters.launchYear === "" &&
      filters.launchSuccess === "" &&
      filters.landSuccess
    ) {
      let landSuccess = filters.landSuccess === "True" ? true : false;
      queryParam = `&land_success=${landSuccess}`;
    }
    if (
      filters.launchYear &&
      filters.launchSuccess === "" &&
      filters.landSuccess
    ) {
      let landSuccess = filters.landSuccess === "True" ? true : false;
      let launchYear = parseInt(filters.launchYear);
      queryParam = `&land_success=${landSuccess}&launch_year=${launchYear}`;
    }
    this.getMissionData(
      `https://api.spacexdata.com/v3/launches?limit=100${queryParam}`
    );
  };
  render() {
    let yearList = [
      { dateLeft: "2006", dateRight: "2007" },
      { dateLeft: "2008", dateRight: "2009" },
      { dateLeft: "2010", dateRight: "2011" },
      { dateLeft: "2012", dateRight: "2013" },
      { dateLeft: "2014", dateRight: "2015" },
      { dateLeft: "2016", dateRight: "2017" },
      { dateLeft: "2018", dateRight: "2019" },
      { dateLeft: "2020", dateRight: "" },
    ];
    return (
      <MDBContainer fluid>
        <strong className="font-weight-1000">SpaceX Launch Programs</strong>
        <MDBRow className="margin-left-1em">
          <MDBCol
            md="2"
            className="filter-box border-radius-7px margin-bottom-8"
          >
            <div className="margin-bottom-4em">
              <strong className="font-weight-1000">Filter</strong>
              <label className="filter-label">Launch Year</label>
              {yearList.map((item) => {
                return (
                  <FilterSelection
                    key={item.dateLeft}
                    left={item.dateLeft}
                    right={item.dateRight}
                    year={true}
                    launch={false}
                    land={false}
                    filterType={"launch_year_filter"}
                    onSelectFilter={this.selectFilter}
                  />
                );
              })}

              <label className="filter-label padding-top-1em">
                Successfull Launch
              </label>
              <FilterSelection
                left={"True"}
                right={"False"}
                launch={true}
                land={false}
                year={false}
                filterType={"launch_filter"}
                onSelectFilter={this.selectFilter}
              />
              <label className="filter-label padding-top-1em">
                Successfull Landing
              </label>
              <FilterSelection
                left={"True"}
                right={"False"}
                land={true}
                launch={false}
                year={false}
                filterType={"land_filter"}
                onSelectFilter={this.selectFilter}
              />
            </div>
          </MDBCol>
          <MDBCol md="10">
            {this.state.loading ? (
              <div className="text-align ">
                <Spinner />
              </div>
            ) : null}
            {this.state.missionData.length ? (
              <LaunchProgram item={this.state.missionData} />
            ) : (
              <h2 className="text-align">No data found</h2>
            )}
          </MDBCol>
        </MDBRow>
        <div className="text-align">
          <strong className="font-weight-1000">Developed By : </strong>
          <strong className="font-weight-1000">Arun Kumar</strong>
        </div>
      </MDBContainer>
    );
  }
}

export default Filter;
