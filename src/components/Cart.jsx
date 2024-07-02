import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = ({warna, bgAngka, warnaAngka}) => {
    const [cartNumber, setCartNumber] = useState(0)

    useEffect(()=>{
        const number = Object.keys(localStorage)
    setCartNumber(number.length)
    },[])

  return (
    <div className="relative">
         <Link
            className={`text-[30px] ${warna}`}
            to={"/keranjang"}>
            <IoCartOutline />
        </Link>
        <p className={`${bgAngka} ${warnaAngka} rounded-full absolute top-[-15px] right-[-15px] w-[25px] h-[25px] text-center text-[15px]`}>
            {cartNumber}
        </p>
    </div>
  )
}

export default Cart