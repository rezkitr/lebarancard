import React, { Component } from "react";

import ketupatImg from "../assets/kids.png";
import bgshape from "../assets/shape.png";

export default class Home extends Component {
  state = {
    guestname: "",
  };

  handleGuestNameChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  openSesame = () => {
    this.props.history.push(`/pesanlebaranuntuk/${this.state.guestname}`);
  };

  render() {
    return (
      <div
        className="home-page container"
        style={{ backgroundImage: `url(${bgshape})` }}
      >
        <div className="row-home row">
          <div className="sec-1 col-sm text-center">
            <img src={ketupatImg} alt="mail" />
          </div>
          <div className="sec-2 col-sm">
            <h2>Pesan Lebaran dari,</h2>
            <h1>NASYA & AIDAN</h1>
            <form onSubmit={this.openSesame}>
              <div class="form-row align-items-center mt-5">
                <div className="col-sm-8 col-md-10 mx-auto">
                  <input
                    className="form-control"
                    type="text"
                    name="guestname"
                    id="guestname"
                    placeholder="Tuliskan nama anda"
                    autoComplete="off"
                    onChange={this.handleGuestNameChange}
                    required
                  />
                </div>
                <div className="col-sm">
                  <button
                    type="submit"
                    className="btn btn-primary open-btn px-3"
                  >
                    <i className="fas fa-envelope-open-text fa-lg"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
