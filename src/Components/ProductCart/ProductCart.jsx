import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { delProductAction } from '../../Redux/reducers/shopReducer'

export const ProductCart = (props) => {
    let {itemCart} = props;
    const [number, setNumber] = useState(itemCart.num);
    const dispatch = useDispatch();
  return (
    <tr key={itemCart.id}>
        <td className="product-remove ver-mid p-td">
            <i class="fa fa-trash-alt text-hover" onClick={()=>{
                const action = delProductAction(itemCart.id);
                dispatch(action);
            }}></i>
        </td>
        <td className="product-img ver-mid">
            <img src={itemCart.image} className="w-80" alt="" />
        </td>
        <td className="product-name ver-mid p-td">
            <span className="text-hover fs-18">{itemCart.name}</span>
        </td>
        <td className="product-price ver-mid">
            <span>{itemCart.price}$</span>
        </td>
        <td className="product-quantity ver-mid">
            <div className="prod-qty">
                <input type="text" value={number} step="1"/>
                <div className="dec qty-btn" onClick={()=>{
                    if(number>1){
                        setNumber(number - 1);
                    }else{
                        return number;
                    }
                }}>-</div>
                <div className="inc qty-btn" onClick={()=>{
                    setNumber(number + 1);
                }}>+</div>
            </div>
        </td>
        <td className="product-total ver-mid">
            <span>{itemCart.price * number}$</span>
        </td>
    </tr>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(ProductCart)