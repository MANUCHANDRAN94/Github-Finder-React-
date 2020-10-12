import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading } = this.props;
    return (
      <div>
        {name}
        <img src={avatar_url} alt='' />
      </div>
    );
  }
}

export default User;
