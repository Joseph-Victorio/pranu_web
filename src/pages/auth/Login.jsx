import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiEye, PiEyeSlash } from 'react-icons/pi';
import bcrypt from 'bcryptjs';
import toast from 'react-hot-toast';

const Login = () => {
    // useState for password
    const [passValue, setPassValue] = useState({
        password: '',
        showPass: false,
    });

    // useState for idAdmin
    const [idAdmin, setIdAdmin] = useState('');

    // useState for formData
    const [formData, setFormData] = useState(null);

    // handle onchange password
    const handlePass = (event) => {
        setPassValue({ ...passValue, password: event.target.value });
    };

    // toggle visibility of password
    const toggleVisibility = (e) => {
        e.preventDefault();
        setPassValue({ ...passValue, showPass: !passValue.showPass });
    };

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost/api/admin.php`);
                if (res.data && res.data.userAdmin) {
                    setFormData(res.data.userAdmin);
                } else {
                    console.error('Invalid API response structure:', res.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // handle form submission
    const loginSubmit = async (e) => {
        e.preventDefault();

        // Check if formData is available
        if (!formData) {
            console.error('formData is not available');
            return;
        }

        // Check if passValue.password is defined and not empty
        if (!passValue.password) {
            console.error('Password is undefined or empty');
            return;
        }

        try {
            console.log(formData)
            // Compare hashed password with stored hashed password
            const isMatch = await bcrypt.compare(passValue.password, formData[0].pass);
            if (isMatch && idAdmin === formData[0].username) {
                toast.success("Berhasil Login!")
                setTimeout(()=>{
                    window.location.href="/admin/dashboard"
                }, 1000)
            } else {
                console.log('Password salah');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <section className='p-5 sm:py-[30px] h-screen font-rhodium bg-[url("/login_background.jpg")] object-cover bg-cover'>
            <div className='flex flex-col sm:flex-row justify-around items-center'>
                {/* Left side */}
                <div>
                    <img 
                        src="/logo_login.png" 
                        alt="Logo"
                        className='w-[350px]' />
                </div>
                {/* Right side */}
                <div>
                    <form 
                        action=""
                        className='bg-background border-4 border-primary rounded-xl py-5 px-5 sm:px-[50px]'
                        onSubmit={loginSubmit}>
                            {/* Header */}
                            <div className='text-center mb-5'>
                                <img 
                                    src="/logo/logoBiru.png" 
                                    alt="" 
                                    className='mx-auto w-[50px] md:w-[75px]'/>
                                <p className='text-primary text-2xl'>Selamat Datang!</p>
                                <p className='text-tersier'>Silahkan masuk untuk mengakses akun anda</p>
                            </div>
                            {/* Email and Password */}
                            <div className='flex flex-col mt-10 gap-5'>
                                {/* Email */}
                                <div className='flex flex-col '>
                                    <div className='flex items-baseline gap-2'>
                                        <img src="/icons/User.svg" alt="" />
                                        <p className='text-primary'>Nama Pengguna/Email</p>
                                    </div>
                                    <input 
                                        type="text"
                                        value={idAdmin}
                                        onChange={e => setIdAdmin(e.target.value)}
                                        name='email'
                                        placeholder='Masukkan nama/email anda'
                                        className='px-6 py-2 border-2 border-primary rounded-xl bg-background text-tersier'
                                        required />
                                </div>
                                {/* Password */}
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2'>
                                        <img src="/icons/Lock.svg" alt="" />
                                        <p className='text-primary'>Kata Sandi</p>
                                    </div>
                                    <div className="relative">
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
                                <button type="submit" className='text-white bg-primary rounded-full py-2 mb-5'>
                                    <p>Masuk</p>
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
