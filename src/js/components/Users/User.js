import React, { Component } from "react"
import { connect } from "react-redux"
import { getUsersData } from "../../actions/index"
import "./User.scss"

class User extends Component {
  componentDidMount() {
    this.props.getUsersData(
      "https://virtserver.swaggerhub.com/tonnieexelero/Images/1.0.0/users/" +
        this.props.posts.map((post) => post.user.username)
    )
  }

  render() {
    return (
      <div className="c-users--user">
        <div className="c-users--name">
          {this.props.user.first_name} {this.props.user.last_name}
        </div>
        <div className="c-users--avatar">
          <img
            src={this.props.user.profile_images.small}
            width="24"
            height="24"
            alt="Avatar"
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
    user: state.user,
  }
}

export default connect(mapStateToProps, {getUsersData})(User)
