import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
useParams

const SuccessPayment = () => {
    const {id} = useParams()
    const [invoice, setInvoice] = useState([])
    useEffect(()=>{
        const fetchInvoice = async ()=>{
            try {
                const res = await axios.get(`http://localhost//api/invoice.php?id=${id}`)
                setInvoice(res.data.invoice || [])
            } catch (error) {
                console.log("Error")
            }
        }
        fetchInvoice()
    },[id])
    console.log(invoice.no_invoice)
    const kembali = () =>{
        window.location.href="/"
    }
    
  return (
    <div>
        <div className="flex justify-center flex-col w-screen h-screen font-rhodium p-5">
        <FaCheckCircle 
            className="text-green-500 text-[100px] mx-auto"/>
            <p className="mx-auto text-2xl mt-2">
                Pembayaran Berhasil
            </p>
            <p className="mx-auto md:text-lg mt-2 text-center">
                Terimakasih sudah percaya untuk menyewa barang di Pranugum Production
            </p>
            <div className="flex gap-5 justify-center">
                <div className="">
                    <button className="bg-primary hover:bg-secondary duration-150 ease-in-out w-[200px] mx-auto text-white px-6 py-2 rounded-md mt-10" onClick={kembali}>
                        <a href="https://wa.me/6281295079288?text=Hallo admin, saya sudah melakukan transaksi" className="">Kembali</a>
                    </button>
                </div>
                <div>
                    {/* <button className="bg-primary hover:bg-secondary duration-150 ease-in-out w-[200px] mx-auto text-white px-6 py-2 rounded-md mt-10" >
                        <a href={`/invoice/${invoice.id}`} className="">Lihat Invoice</a>
                    </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessPayment