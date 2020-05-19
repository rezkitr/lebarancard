import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as html2canvas from "html2canvas";

import ketupatImg from "../assets/ketupat.png";

class Message extends Component {
  componentDidMount() {
    var element = window.document.getElementById("my-card");
    var getCanvas;
    var imgData;

    html2canvas(element).then((canvas) => {
      getCanvas = canvas;
      var imgageData = getCanvas.toDataURL("image/png");
      var newData = imgageData.replace(
        /^data:image\/png/,
        "data:application/octet-stream"
      );
      imgData = newData;
      window.document
        .getElementById("downloadbtn")
        .setAttribute("href", imgData);
      window.document
        .getElementById("downloadbtn")
        .setAttribute(
          "download",
          `plni_card_${this.props.match.params.guest}.png`
        );
    });
  }

  render() {
    return (
      <div className="msg-page container">
        <div className="row-msg row justify-content-center">
          <div className="sec-card col-md-10">
            <div id="my-card" className="card">
              <div className="card-body p-5">
                <div className="row">
                  <div className="sec-img col-sm">
                    <img src={ketupatImg} alt="ketupat" />
                  </div>
                  <div className="sec-2 col-sm">
                    <h4>
                      <span className="salam">Assalamualaikum,</span>{" "}
                      {this.props.match.params.guest.toUpperCase()}
                    </h4>
                    <hr />
                    <h2>Selamat Hari Raya</h2>
                    <h2>Idul Fitri 1441H</h2>
                    <p>
                      Semoga Allah menerima seluruh amal ibadah ramadhan dan
                      senantiasa mencurahkan kasih sayang Nya.
                      <h5>
                        <i className="fas fa-heart"></i> Nasya & Aidan
                      </h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/" className="btn btn-sm btn-info px-3 mt-5 mr-3">
              <i className="fas fa-home"></i>
            </Link>
            <a
              href="#"
              id="downloadbtn"
              className="btn btn-sm btn-success px-3 mt-5"
            >
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
