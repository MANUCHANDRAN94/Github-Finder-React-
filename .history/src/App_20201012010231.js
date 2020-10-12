import Axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get("https://api.github.com/users#");
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }
  render() {
    let { loading, users } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
