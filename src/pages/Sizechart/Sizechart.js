import React, { useEffect } from "react";
import Sizetable from "./Sizetable";
import "./Sizechart.css";
const Sizechart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
    document.title = "Evil Oni - Size Chart";
  }, []);
  return (
    <React.Fragment>
      <div className="size-chart-layout">
        <div className="heading">
          <h1 className="size-chart-heading">Size Chart</h1>
        </div>
        <div className="container alignment" style={{ display: "flex" }}>
          <div className="container">
            <Sizetable
              className="sizetable"
              product="REGULAR T-SHIRTS"
              chestorwaist="CHEST"
              smallchest='38"'
              mediumchest='40"'
              largechest='42"'
              xlargechest='44"'
              xxlargechest='46"'
              smalllength='26"'
              mediumlength='28"'
              largelength='27"'
              xlargelength='29"'
              xxlargelength='30"'
            />
            <Sizetable
              className="sizetable"
              product="HOODIES/SWEATSHIRTS"
              chestorwaist="CHEST"
              smallchest='40"'
              mediumchest='42"'
              largechest='44"'
              xlargechest='46"'
              xxlargechest='48"'
              smalllength='26"'
              mediumlength='28"'
              largelength='27"'
              xlargelength='29"'
              xxlargelength='30"'
            />
          </div>
          <div className="container">
            <Sizetable
              className="sizetable"
              product="JACKETS"
              chestorwaist="CHEST"
              smallchest='40"'
              mediumchest='42"'
              largechest='44"'
              xlargechest='46"'
              xxlargechest='48"'
              smalllength='26"'
              mediumlength='28"'
              largelength='27"'
              xlargelength='29"'
              xxlargelength='30"'
            />
            <Sizetable
              className="sizetable"
              product="SWEATERS"
              chestorwaist="CHEST"
              smallchest='40"'
              mediumchest='42"'
              largechest='44"'
              xlargechest='46"'
              xxlargechest='48"'
              smalllength='27"'
              mediumlength='28"'
              largelength='29"'
              xlargelength='30"'
              xxlargelength='31"'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sizechart;
