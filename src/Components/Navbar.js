import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
      <Link to="/"><img src="https://img.icons8.com/?size=1x&id=6AGHyLA8bTw4&format=gif" alt="home" /></Link>
      <Link to="/login"></Link>
      <MDBNavbarBrand className="logo-svg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk_v4f-D1tXTZNSZAeB0mBZw-AWaIbxz30w&usqp=CAU" alt="..." style={{width:"30%"}}/></MDBNavbarBrand>
    
        <MDBBtn color="light">
          <Link to="/cart"><img src="https://img.icons8.com/?size=1x&id=n7QADl0UgIpL&format=png" alt="..."/>
          <span className="cart-count">  {totalQuantity}</span></Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}