import { PiEye } from "react-icons/pi"
import { PiEyeSlash } from "react-icons/pi"
import { useState } from 'react'

const Login = () => {
    //useState untuk password
    const [passValue, setPassValue] = useState({
        password: '',
        showPass: false,
    })

    //useState untuk idAdmin
    const [idAdmin, setIdAdmin] = useState('')

    //handle onchange password
    const handlePass = (event) => {
        setPassValue({ ...passValue, password: event.target.value })
    }

    //buat ganti dari type password ke type text
    const toggleVisibility = (e) => {
        e.preventDefault()
        setPassValue({ ...passValue, showPass: !passValue.showPass })
    }
  return (
    <section className='p-5 sm:py-[30px] h-screen font-rhodium bg-[url("/login_background.jpg")] object-cover bg-cover'>
        <div className='flex flex-col sm:flex-row justify-around items-center'>
            {/* KIRI */}
            <div>
                <img 
                    src="/logo_login.png" 
                    alt="Logo"
                    className='w-[350px]' />
            </div>
            {/* KANAN */}
            <div>
                <form 
                    action=""
                    className='bg-background border-4 border-primary rounded-xl py-5 px-5 sm:px-[50px]'>
                        {/* HEADER */}
                        <div className='text-center mb-5'>
                            <img 
                                src="/Logo_1.svg" 
                                alt="" 
                                className='mx-auto'/>
                            <p className='text-primary text-2xl'>Selamat Datang!</p>
                            <p className='text-tersier'>Silahkan masuk untuk mengakses akun anda</p>
                        </div>
                        {/* EMAIL PASS */}
                        <div className='flex flex-col mt-10 gap-5'>
                            {/* EMAIL */}
                            <div className='flex flex-col '>
                                <div className='flex items-baseline gap-2'>
                                    <img src="/icons/User.svg" alt="" />
                                    <p className='text-primary'>Nama Pengguna/Email</p>
                                </div>
                                <input 
                                    type="text"
                                    value={idAdmin}
                                    onChange={e=>{
                                        setIdAdmin(e.target.value)
                                    }}
                                    name='email'
                                    placeholder='Masukkan nama/email anda'
                                    className='px-6 py-2 border-2 border-primary rounded-xl bg-background text-tersier' />
                            </div>
                            {/* PASS */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-2'>
                                    <img src="/icons/Lock.svg" alt="" />
                                    <p className='text-primary'>Kata Sandi</p>
                                </div>
                                <div className="relative ">
                                    <input
                                        type={passValue.showPass ? 'text' : 'password'}
                                        name='password'
                                        id='passInput'
                                        placeholder='Password'
                                        className='px-6 py-2 border-2 w-full border-primary rounded-xl bg-background text-tersier'
                                        value={passValue.password}
                                        onChange={handlePass}
                                        required
                                    />

                                    <button className='absolute right-4 top-2' onClick={toggleVisibility}>
                                        {!passValue.showPass ? <PiEye color='grey' size={30}/> : <PiEyeSlash color='grey' size={30}/>}
                                    </button>
                                </div>
                            </div>
                            <br />
                            <button className='text-white bg-primary rounded-full py-2 mb-5'>
                                <p>Masuk</p>
                            </button>
                        </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login