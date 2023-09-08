import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal,removeItem, increaseItemQuantity,decreaseItemQuantity,addToWhishList } from '../features/cartSlice'

const CartPage = () => {

  const {cart, totalQuantity,totalPrice,saved,totalDiscount} =useSelector((state)=>state.allCart);
  const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(getCartTotal());
   },[cart])


  return (
    <div>
    <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart-{cart.length} items</h5>
          </div>
          <div className="card-body">
        { cart.map((data)=>(
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom " data-mdb-ripple-color="light">
                  <img src={data.img}
                    className="w-100" alt="cr7" />
                  
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        
                <p><strong>{data.title}</strong></p>
                <p className='discount-cart'><strong>{totalDiscount}%Off</strong></p>
                <span className='discount-cart'> <del>${data.disrate}</del></span> 
                       <p className='price-count'>{data.price}$</p>
                       <div class="d-flex flex-row justify-content-center">
                  <div class="text-danger mb-1 me-2">
                    <i class="fa fa-star " style={{color: "#FFD700"}}></i>
                    <i class="fa fa-star " style={{color: "#FFD700"}}></i>
                    <i class="fa fa-star " style={{color: "#FFD700"}}></i>
                    <i class="fa fa-star " style={{color: "#FFD700"}}></i>
                  </div>
                  <span>{data.rating}</span>
                </div>
                <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" onClick={()=> dispatch(removeItem(data.id))}>
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list"  >
                  <i className="fas fa-heart"></i>
                 
                </button>
        
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                
                <div className="d-flex mb-4" style={{maxWidth:"300px"}}>
                  <button className="btn btn-danger px-3 me-2"
                    onClick={()=>dispatch(decreaseItemQuantity(data.id))}>
                    <i class="fas fa-minus" color='red'></i>
                  </button>

                  <div className="form-outline display-flex justify-content-center">
                    <input id="form1" min="0" name="quantity" value={data.quantity} type="" class="form-control" />
                    <label className="form-label" for="form1"></label>
                  </div>

                  <button className="btn btn-success px-3 me-2"
                    onClick={()=>dispatch(increaseItemQuantity(data.id))}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>

                <p className="text-start text-md-center">
                
                </p>
            
              </div>
            </div>
   )) }
            <div className="row">
            </div>   
          </div>
        </div> 
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total quantity
                <span className='justify-content-center'>{totalQuantity}</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                YOU SAVED
                </div>
                <span><mark>{saved}$</mark></span>
                
                
                
                </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                
                <div>
                
                  <strong>Total amount</strong>
                 
                </div>
                <span className='price-count'><strong>{totalPrice}$</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CartPage
