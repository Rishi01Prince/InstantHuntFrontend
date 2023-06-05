import React, { useEffect, useState, useRef } from 'react'
import './Card.css';
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
    // Get cart data from context
    let data = useCart();

    // Get cart dispatch function from context
    let dispatch = useDispatchCart();

    // Ref for price select element
    const priceRef = useRef();

    // Extract options from props
    let options = props.options;

    // Get price options
    let priceOptions = Object.keys(options);

    // State for quantity and selected span
    const [qty, setQty] = useState(1);
    const [span, setSpan] = useState("");

    // Handle add to cart button click
    const handleAddToCart = async () => {
        let vech = data.find((item) => item.id === props.vdata._id);
      
        console.log(new Date());
      
        if (vech) {
          if (vech.span === span) {
            await dispatch({
              type: "UPDATE",
              id: props.vdata._id,
              price: finalPrice,
              qty: qty,
            });
            return;
          } else {
            await dispatch({
              type: "ADD",
              id: props.vdata._id,
              name: props.vdata.name,
              price: finalPrice,
              qty: qty,
              span: span,
              img: props.vdata.img,
            });
            console.log("span different so simply ADD one more to the list");
            return;
          }
        }
      
        await dispatch({
          type: "ADD",
          id: props.vdata._id,
          name: props.vdata.name,
          price: finalPrice,
          qty: qty,
          span: span,
          img: props.vdata.img,
        });
      
        console.log(data);
      };
      

    // Calculate final price
    let finalPrice = qty * parseInt(options[span]);

    // useEffect to set initial span value
    useEffect(() => {
        setSpan(priceRef.current.value);
    }, []);

    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "380px" }}>
            <div style={{ display: "flex", height: "150px", width: "18rem" }}>
                <img className="card-img-top" src={props.vdata.img} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.vdata.name}</h5>
                {/* <p className="card-text">{props.des}</p> */}
                {/* <a href="/" className="btn btn-primary" onClick={handleAddToCart}>Add to Card</a> */}
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to Card</button>
                <div className='container w-100'>
                    {/* drop down for quantity */}
                    <select className='m-2 h-100 w-100 bg rounded' onChange={(e) => setQty(e.target.value)}>
                    {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select className="m-2 h-100 bg rounded" ref={priceRef} style={{ select: "#FF0000" }} onChange={(e) => setSpan(e.target.value)}>
            {priceOptions.map((data) => (
              <option key={data}>{data}</option>
            ))}
          </select>
          <div className="d-inline ms-2 h-100 w-20 fs-5">
            ₹{finalPrice}/-
          </div>
        </div>
      </div>
    </div>
  );
}
