import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import toast from "react-hot-toast";
import SideNav from '../../../components/admin/SideNav';
import { BsTrash } from "react-icons/bs";

const GaleriList = () => {
    const [galeris, setGaleri] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5); 
    const [permission, setPermission] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const res = await axios.get('https://api.pranugumproduction.com/admin.php');
                setPermission(res.data.userAdmin);

                // Check permission after fetching
                const cek = res.data.userAdmin.map(p => p.login);
                console.log(cek);
                if (cek[0] === "FALSE") {
                    navigate('/');
                } else {
                    setLoading(false);  // Set loading to false after check
                }
            } catch (error) {
                console.log(error);
                toast.error("Terjadi error saat memproses data admin");
                setLoading(false);  // Set loading to false in case of error
            }
        };
        fetchAdmin();
    }, [navigate]);

    useEffect(() => {
        const fetchAllGaleri = async () => {
            try {
                const res = await axios.get("https://api.pranugumproduction.com/galeri.php");
                setGaleri(res.data.galeriData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllGaleri();
    }, []);

    const handleDelete = async (id) => {
        try {
            toast.success("Berhasil Menghapus Foto!");
            await axios.delete('https://api.pranugumproduction.com/galeri.php?id=' + id);
            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
            console.log(error);
        }
    };

    // Logic for displaying current products
    const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentgaleris = galeris.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic for handling page click
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <img src="/logo/PRANUGUMBiruPutih.png" alt="Logo" className="w-full max-w-xs mx-auto my-auto" />
            </div>
        );
    }

    return (
        <div className='flex gap-5 mt-20 sm:mt-0'>
            <SideNav />
            {/* KANAN */}
            <div className='font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]'>
                <p className='text-3xl p-5'>List Foto</p>
                <hr className='border-primary border-b-2 ' />
                <Link
                    to={'/admin/add-galeri'}
                    className='float-right'>
                    <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-2'>
                        Tambah Foto
                    </p>
                </Link>

                {/* TABLE LIST */}
                <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[800px] lg:overflow-x-scroll p-3'>
                    <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[750px] md:w-[750px] mx-auto '>
                        <thead>
                            <tr className=' bg-secondary rounded-md ring-2 ring-primary'>
                                <th className=' bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px]'>foto</th>
                                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 '>Nama Foto</th>
                                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 '>Tanggal</th>
                                <th className=' bg-secondary rounded-r-md p-2 md:text-[14px] md:px-6 text-center'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentgaleris.map(foto => (
                                <tr className=' text-center' key={foto.id}>
                                    <td className='p-2'><img src={foto.foto === 0 ? '/logo_login.png' : 'https://api.pranugumproduction.com/' + foto.foto} alt="" className='w-[150px]' /></td>
                                    <td className='p-2 text-sm w-[150px]'><p>{foto.nama}</p></td>
                                    <td className='p-2'><p>{foto.tanggal}</p></td>
                                    <td className=' p-2'>
                                        <div
                                            className='text-center mx-auto w-[50px]'>
                                            <button className='bg-primary p-2 rounded-md' onClick={() => handleDelete(foto.id)}>
                                                <BsTrash className='text-secondary' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(galeris.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination flex justify-between w-[300px] mt-5 text-secondary bg-primary rounded-md p-1 px-4 md:ml-14 ml-5"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
};

export default GaleriList;
