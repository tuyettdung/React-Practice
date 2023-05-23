import React, { Component } from "react";

const dataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BaiTapThuKinh extends Component {
  state = {
    modelGlass: {
      url: "./glassesImage/v2.png",
      name: "GUCCI G8759H",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    return (
      <div
        style={{
          background: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "left",
          minHeight: "700px",
        }}
      >
        <div className="container">
          <div className="row pt-4 justify-content-evenly">
            <div className="col-3" style={{ position: "relative" }}>
              <img
                src={this.state.modelGlass.url}
                alt=""
                width={160}
                style={{ position: "absolute", top: "79px", left: "64px" }}
              />
              <img src="./glassesImage/model.jpg" alt="" className="w-100" />
              <div>
                <div
                  className="d-block m-3"
                  style={{
                    position: "absolute",
                    top: "202px",
                    left: "-4px",
                    backgroundColor: "rgba(245, 182, 88, 0.52)",
                    width: "262px",
                    overflow: "hidden",
                  }}
                >
                  <h4 className="pt-3" style={{ fontSize: "20px" }}>
                    {this.state.modelGlass.name}
                  </h4>
                  <p style={{ fontSize: "12px" }}>
                    {this.state.modelGlass.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <img src="./glassesImage/model.jpg" alt="" className="w-100" />
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "125px",
              padding: "40px 10px",
              cursor: "pointer",
            }}
          >
            {dataGlasses.map((glass, index) => {
              return (
                <div
                  key={index}
                  className="mx-2 p-1"
                  style={{ border: "2px solid red" }}
                >
                  <img
                    src={glass.url}
                    alt=""
                    width={60}
                    onClick={() => {
                      this.setState({
                        modelGlass: glass,
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
