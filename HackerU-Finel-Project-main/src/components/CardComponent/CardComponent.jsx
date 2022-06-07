import "./CardComponent.css";
import { useSelector } from "react-redux";
import { CardActions, IconButton, Badge, Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RemoveShoppingCart } from "@material-ui/icons";

const CardComponent = (props) => {
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);

  const handleDeleteClick = () => {
    props.onDeleteCard(props.id);
  };

  const handleEditClick = () => {
    props.onEditCard(props.id);
  };
  const { item, handleBuyButtonClick, handleRemoveButtonClick } = props;

  return (
    <div className="col">
      <Carousel
        className="main-slide"
        interval={5000}
        showStatus={false}
        dynamicHeight={true}
        showThumbs={false}
        showArrows={false}
        showIndicator={false}
      >
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image1}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image2}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image3}
            className="card-img-top "
            alt="..."
          />
        </div>
      </Carousel>
      <div style={{ textAlign: "center" }} className="card-body ">
        <h5 style={{ textAlign: "center" }} className="card-title">
          {props.name}
        </h5>

        <h6
          style={{ textAlign: "center" }}
          className="card-subtitle mb-2 font-bolder"
        >
          ₪{props.phone}
        </h6>
      </div>
      {props.userIDCard === props.userIDLoggedIn && IsloggedInRedux === true ? (
        <div
          style={{ justifyContent: "space-between", display: "flex" }}
          className="card-footer"
        >
          <Button
            variant="outlined"
            color="error"
            type="button"
            className="btn btn-outline-primary"
            onClick={handleEditClick}
          >
            Edit
          </Button>
          <Button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </div>
      ) : (
        <CardActions
          disableSpacing
          style={{
            justifyContent: "space-between",
            margin: "0 auto",
            width: "50%",
            display: "flex",
          }}
          color="inherit"
        >
          <IconButton
            color="inherit"
            aria-label="Add to Cart"
            onClick={() => {
              handleRemoveButtonClick(item);
            }}
          >
            <RemoveShoppingCart />
          </IconButton>
          <IconButton
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
            className="cart"
            onClick={() => {
              handleBuyButtonClick(item);
            }}
          >
            <Badge badgeContent="" color="inherit"></Badge>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      )}
    </div>
  );
};

export default CardComponent;
