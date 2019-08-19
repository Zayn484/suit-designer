import React from "react";
import "./Products.css";
import { fabric } from "fabric";

import thumbfront from "../../assets/images/product/product-1/front/thumbnail.png";
import mf1 from "../../assets/images/product/product-1/front/suit-base.png";
import sf1 from "../../assets/images/product/product-1/front/strip1.png";
import tf1 from "../../assets/images/product/product-1/front/strip2.png";
import ff1 from "../../assets/images/product/product-1/front/knees.png";
import cf1 from "../../assets/images/product/product-1/front/collar.png";
import bf1 from "../../assets/images/product/product-1/front/belt.png";
import txf1 from "../../assets/images/product/product-1/front/texture.png";
import thumbback from "../../assets/images/product/product-1/back/thumbnail.png";
import mb1 from "../../assets/images/product/product-1/back/1.png";
import sb1 from "../../assets/images/product/product-1/back/2.png";
import tb1 from "../../assets/images/product/product-1/back/3.png";
import fb1 from "../../assets/images/product/product-1/back/4.png";
import cb1 from "../../assets/images/product/product-1/back/5.png";
import bb1 from "../../assets/images/product/product-1/back/6.png";
import txb1 from "../../assets/images/product/product-1/back/texture.png";
import thumbleft from "../../assets/images/product/product-1/left/thumbnail.png";
import ml1 from "../../assets/images/product/product-1/left/1.png";
import sl1 from "../../assets/images/product/product-1/left/2.png";
import tl1 from "../../assets/images/product/product-1/left/3.png";
import fl1 from "../../assets/images/product/product-1/left/4.png";
import cl1 from "../../assets/images/product/product-1/left/5.png";
import bl1 from "../../assets/images/product/product-1/left/6.png";
import txl1 from "../../assets/images/product/product-1/left/texture.png";
import thumbright from "../../assets/images/product/product-1/right/thumbnail.png";
import mr1 from "../../assets/images/product/product-1/right/1.png";
import sr1 from "../../assets/images/product/product-1/right/2.png";
import tr1 from "../../assets/images/product/product-1/right/3.png";
import fr1 from "../../assets/images/product/product-1/right/4.png";
import cr1 from "../../assets/images/product/product-1/right/5.png";
import br1 from "../../assets/images/product/product-1/right/6.png";
import txr1 from "../../assets/images/product/product-1/right/texture.png";

import thumbfront2 from "../../assets/images/product/product-2/front/thumbnail.png";
import mf2 from "../../assets/images/product/product-2/front/1.png";
import sf2 from "../../assets/images/product/product-2/front/2.png";
import tf2 from "../../assets/images/product/product-2/front/3.png";
import ff2 from "../../assets/images/product/product-2/front/4.png";
import cf2 from "../../assets/images/product/product-2/front/5.png";
import bf2 from "../../assets/images/product/product-1/front/belt.png";
import thumbback2 from "../../assets/images/product/product-2/back/thumbnail.png";
import mb2 from "../../assets/images/product/product-2/back/1.png";
import sb2 from "../../assets/images/product/product-2/back/2.png";
import tb2 from "../../assets/images/product/product-2/back/3.png";
import fb2 from "../../assets/images/product/product-2/back/4.png";
import cb2 from "../../assets/images/product/product-2/back/5.png";
import bb2 from "../../assets/images/product/product-1/back/5.png";
import thumbleft2 from "../../assets/images/product/product-2/left/thumbnail.png";
import ml2 from "../../assets/images/product/product-2/left/1.png";
import sl2 from "../../assets/images/product/product-2/left/2.png";
import tl2 from "../../assets/images/product/product-2/left/3.png";
import fl2 from "../../assets/images/product/product-2/left/4.png";
import cl2 from "../../assets/images/product/product-2/left/5.png";
import bl2 from "../../assets/images/product/product-1/left/6.png";
import thumbright2 from "../../assets/images/product/product-2/right/thumbnail.png";
import mr2 from "../../assets/images/product/product-2/right/1.png";
import sr2 from "../../assets/images/product/product-2/right/2.png";
import tr2 from "../../assets/images/product/product-2/right/3.png";
import fr2 from "../../assets/images/product/product-2/right/4.png";
import cr2 from "../../assets/images/product/product-2/right/5.png";
import br2 from "../../assets/images/product/product-1/right/6.png";

var colors = [];

for (let i = 0; i < 30; i++) {
  var letters = "0123456789ABCDEF";

  // html color code starts with #
  var color = "#"; // generating 6 times as HTML color code consist

  // of 6 letter or digits
  for (let j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  colors.push(color);
}

class Designer extends React.Component {
  state = {
    products: [
      {
        id: 0,
        title: "Product 1",
        front: {
          thumb: thumbfront,
          main: mf1,
          second: sf1,
          third: tf1,
          fourth: ff1,
          collar: cf1,
          belt: bf1,
          texture: txf1
        },
        back: {
          thumb: thumbback,
          main: mb1,
          second: sb1,
          third: tb1,
          fourth: fb1,
          collar: cb1,
          belt: bb1,
          texture: txb1
        },
        left: {
          thumb: thumbleft,
          main: ml1,
          second: sl1,
          third: tl1,
          fourth: fl1,
          collar: cl1,
          belt: bl1,
          texture: txl1
        },
        right: {
          thumb: thumbright,
          main: mr1,
          second: sr1,
          third: tr1,
          fourth: fr1,
          collar: cr1,
          belt: br1,
          texture: txr1
        }
      },
      {
        id: 1,
        title: "Product 2",
        front: {
          thumb: thumbfront2,
          main: mf2,
          second: sf2,
          third: tf2,
          fourth: ff2,
          collar: cf2,
          belt: bf2
        },
        back: {
          thumb: thumbback2,
          main: mb2,
          second: sb2,
          third: tb2,
          fourth: fb2,
          collar: cb2,
          belt: bb2
        },
        left: {
          thumb: thumbleft2,
          main: ml2,
          second: sl2,
          third: tl2,
          fourth: fl2,
          collar: cl2,
          belt: bl2
        },
        right: {
          thumb: thumbright2,
          main: mr2,
          second: sr2,
          third: tr2,
          fourth: fr2,
          collar: cr2,
          belt: br2
        }
      }

      //   id: 0,
      //   title: "Product 1",
      //   slug: "product-1",
      //   image: Shirt1
      // },
      // {
      //   id: 1,
      //   title: "Product 2",
      //   slug: "product-2",
      //   image: Shirt2
      // },
      // {
      //   id: 2,
      //   title: "Product 3",
      //   slug: "product-3",
      //   image: Shirt3
      // },
      // {
      //   id: 3,
      //   title: "Product 4",
      //   slug: "product-4",
      //   image: Shirt2
      // }
    ],
    output: "",
    controls: {
      tl: true, //top left corner is visible
      tr: false,
      bl: false,
      br: false,
      ml: false,
      mt: false,
      mr: false,
      mb: false,
      mtr: false
    },

    selectedProduct: null
  };

  componentDidMount() {
    // Make a New Canvas
    this.__canvas = new fabric.Canvas("meCanvas", {
      preserveObjectStacking: true,
      height: 812,
      width: 1200,
      backgroundColor: "gray"
    });
    this.__canvas.on({
      "object:selected": this.onSelectTextElement
    });

    let rect = new fabric.Rect({
      left: 100,
      top: 150,
      fill: "red",
      width: 200,
      height: 200
    });

    this.__canvas.add(rect);
  }

  selectProductHandler = product => {
    // this.setState({ selectedProduct: product, step: 1 });
    this.props.history.push({
      pathname: "/customize",
      state: {
        product: product
      }
    });
  };

  render() {
    return (
      <section className="container  mt-5 configurator-container">
        <div className="header bg-danger">
          <h1 className="text-center text-white" id="title">
            Product Configurator
          </h1>
          <span className="text-center text-white">R A C E W E A R</span>
        </div>

        <div className="row product-container">
          <div className="col-12 ">
            <h4 className="mt-5">Choose your Design</h4>
            <div className="row products">
              {this.state.products.map(product => (
                <div
                  key={product.id}
                  className="col-3 product-item mx-auto"
                  style={{ height: "30rem" }}
                >
                  <img
                    src={product.front.thumb}
                    style={{ width: "100%", height: "100%" }}
                    className="img-fluid"
                    alt="shirt"
                    onClick={() => this.selectProductHandler(product)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Designer;
