import React from "react";
import API from "../../util/API.js"
import Search from "../Search/Search";
import "./Table.css";

//npm package to reformat DOB
import DateFormat from "dateformat";

class Table extends React.Component {
  state = {
    employeeDB: [],
    filteredPeepsDB: "",
    search: "",
  };

  //Api call for randomuser.me
  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({ employeeDB: res.data.results });
        console.log(this.state.employeeDB);
      })
      .catch((err) => console.log(err));
  }

  //Handle input in search bar
  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm,
      });
    }
  };


function Table(props) {
  
}

export default Table;
