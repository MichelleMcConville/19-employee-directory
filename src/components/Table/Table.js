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

  //Sort by first name
  sortByFName = () => {
    const sortedEmployees = this.state.employeeDB.sort((a, b) => {
      if (b.name.first > a.name.first) { return -1; }
      if (a.name.first > b.name.first) { return 1; }
      return 0;
    });

    if (this.state.filteredPeepsDB === "DESC") {
      sortedEmployees.reverse();
      this.setState({ filteredPeepsDB: "ASC" });
    } else {
      this.setState({ filteredPeepsDB: "DESC" });
    }
    this.setState({ employeeDB: sortedEmployees });
  };

  //Sort by last name
  sortByLName = () => {
    const sortedEmployees = this.state.employeeDB.sort((a, b) => {
      if (b.name.last > a.name.last) { return -1; }
      if (a.name.last > b.name.last) { return 1; }
      return 0;
    });
    if (this.state.filteredPeepsDB === "DESC") {
      sortedEmployees.reverse();
      this.setState({ filteredPeepsDB: "ASC" });
    } else {
      this.setState({ filteredPeepsDB: "DESC" });
    }
    this.setState({ employeeDB: sortedEmployees });
  };

  //Sort by location
  sortByLocation = () => {
    const sortedEmployees = this.state.employeeDB.sort((a, b) => {
      if (b.location.city > a.location.city) { return -1; }
      if (a.location.city > b.location.city) { return 1; }
      return 0;
    });
    if (this.state.filteredPeepsDB === "DESC") {
      sortedEmployees.reverse();
      this.setState({ filteredPeepsDB: "ASC" });
    } else {
      this.setState({ filteredPeepsDB: "DESC" });
    }
    this.setState({ employeeDB: sortedEmployees });
  };

  

function Table(props) {
  
}

export default Table;
