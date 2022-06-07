import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import { ShoppingCartBox } from "./Basket";

export const NikeStore = (props) => {
  const [filter, setFilter] = useState("");
  const [cardsArr, setCardsArr] = useState([]);

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {});
  }, []);
  let dataSearch = cardsArr.filter((item) => {
    return (
      item.name.toLowerCase() +
      item.description.toLowerCase() +
      item.phone
    ).includes(filter.toLowerCase() || Number(filter));
  });
  const { ShoppingCart, clearShoppingCart } = props;

  return (
    <Fragment>
      <Box sx={{ display: "flex", flexDirection: "column", py: 1, m: 1 }}>
        <Box sx={{ ml: "auto" }}>
          <ShoppingCartBox
            clearShoppingCart={clearShoppingCart}
            ShoppingCart={ShoppingCart}
          />
        </Box>
      </Box>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav mr-auto">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/women"
              activeClassName="activeLink"
            >
              Women
            </NavLink>
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/men"
              activeClassName="activeLink"
            >
              Men
            </NavLink>
          </ul>
        </div>
      </nav>
      <input
        className=" mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={filter}
        onChange={(e) => searchText(e)}
        style={{
          display: "flex",
          margin: "0 auto",
          textAlign: "center",
          width: "33%",
          height: "34px",
          position: "relative",
          marginLeft: "1%",
        }}
      />
      <br />
      <div className="row justify-content-center">
        {dataSearch.length === 0 && cardsArr.map((item) => {})}
        {dataSearch.map((item, index) => {
          return (
            <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.image} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.phone}</p>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
