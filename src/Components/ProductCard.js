import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, addToWhishList } from "../features/cartSlice";

export default function App() {
  const  items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        {items.map((item) => (
          <MDBCol key={item.id} size="4" className="">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom ripple rounded "
              >
                <MDBCardImage src={item.img} fluid alt="..." />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>
                  {item.title}{" "}
                  <span className="discount-cart">
                    <ins>{item.discount}%</ins>
                  </span>
                </MDBCardTitle>
                <MDBCardText>
                  <span className="discount-cart">
                    {" "}
                    <del>${item.disrate}</del>
                  </span>{" "}
                  <span className="price-count">
                    <strong>${item.price}</strong>
                  </span>
                  <div class="d-flex flex-row justify-content-center">
                    <div class="text-danger mb-1 me-2">
                      <i class="fa fa-star " style={{ color: "#FFD700" }}></i>
                      <i class="fa fa-star " style={{ color: "#FFD700" }}></i>
                      <i class="fa fa-star " style={{ color: "#FFD700" }}></i>
                      <i
                        class="fa fa-star-half "
                        style={{ color: "#FFD700", border: "black" }}
                      ></i>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </MDBCardText>
                <MDBBtn
                  color="warning"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to cart
                </MDBBtn>{" "}
                <button
                  type="button"
                  class="btn btn-danger btn-sm me-1 mb-1"
                  data-mdb-toggle="tooltip"
                  title="Remove item"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <i className="fas fa-trash"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-success  btn-sm mb-1"
                  data-mdb-toggle="tooltip"
                  title="Move to the wish list"
                  onClick={() => dispatch(addToWhishList(item))}
                >
                  <i
                    class="fas fa-star fa-spin"
                    style={{ color: "#f3da35" }}
                  ></i>
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
