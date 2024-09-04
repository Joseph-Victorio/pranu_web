import { FaCheckCircle } from "react-icons/fa";

const SuccessPayment = () => {
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
            <button className="bg-primary hover:bg-secondary duration-150 ease-in-out w-[200px] mx-auto text-white px-6 py-2 rounded-md mt-10" onClick={kembali}>
                <a href="/" className="">Kembali</a>
            </button>
        </div>
    </div>
  )
}

export default SuccessPayment