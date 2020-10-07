import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBadge } from "mdbreact";

var launchYear = "",
  landSuccess = "",
  launchSuccess = "";
class FilterSelection extends Component {
  selectedFilter = (item) => {
    if (this.props.year) {
      launchYear = item.target.innerText;
      let yearList = document.getElementsByName("launch_year_filter");
      yearList.forEach((ele) => {
        ele.classList.remove("active-btn");
      });
    }
    if (this.props.land) {
      landSuccess = item.target.innerText;
      let landList = document.getElementsByName("land_filter");
      landList.forEach((ele) => {
        ele.classList.remove("active-btn");
      });
    }
    if (this.props.launch) {
      launchSuccess = item.target.innerText;
      let launchList = document.getElementsByName("launch_filter");
      launchList.forEach((ele) => {
        ele.classList.remove("active-btn");
      });
    }
    item.target.classList.add("active-btn");
    let filterObj = {
      launchYear,
      launchSuccess,
      landSuccess,
    };
    this.props.onSelectFilter(filterObj);
  };
  render() {
    return (
      <MDBRow>
        <MDBCol md="6">
          <MDBBadge
            className="color-green-light"
            name={this.props.filterType}
            onClick={(e) => this.selectedFilter(e)}
          >
            {this.props.left}
          </MDBBadge>
        </MDBCol>
        <MDBCol md="6">
          <MDBBadge
            className="color-green-light"
            name={this.props.filterType}
            onClick={(e) => this.selectedFilter(e)}
          >
            {this.props.right}
          </MDBBadge>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default FilterSelection;
