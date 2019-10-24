import React, { Component } from "react";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "appication/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  render() {
    return (
      <div>
        <h2 className="text-center py-2">Add Posts</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="body">Body : </label>
            <textarea
              type="text"
              name="body"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.body}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
