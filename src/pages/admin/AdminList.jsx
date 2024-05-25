
import SideNav from '../../components/admin/SideNav'

import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";

const AdminList = () => {
  return (
    <div className="flex ">
      <SideNav/>
      {/* MAIN */}
      <div className='font-rhodium text-primary p-5 mt-2 w-full'>
        <p className='text-4xl p-5'>Daftar Akun Admin</p>
        <hr className='border-primary border-b-2 '/>

         {/* TABLE LIST */}
      <table className='rounded-md ring-2 ring-primary border-collapse mt-5'>
        <tr className=' bg-secondary rounded-md ring-2 ring-primary'>
          <th className=' bg-secondary rounded-l-md p-2 '>Checkbox</th>
          <th className=' bg-secondary p-2 '>Username</th>
          <th className=' bg-secondary p-2'>Password</th>
          <th className=' bg-secondary p-2'>Posisi</th>
          <th className=' bg-secondary rounded-r-md p-2'>Aksi</th>
        </tr>
        <tr className=' text-center'>
          <td className='p-2'><input type="checkbox" /></td>
          <td className='p-2'><p>Galih Pranugum</p></td>
          <td className='p-2'><p>********</p></td>
          <td className='p-2'><p>Owner</p></td>
          <td className=' p-2'>
            <form 
              action=""
              className='flex gap-2 '>
              <button className='bg-primary p-2 rounded-md'><FaPencil className='text-secondary' /></button>
              <button className='bg-primary p-2 rounded-md'><BsTrash className='text-secondary' /></button>
            </form>
          </td>
        </tr>
      </table>
      </div>
     
    </div>
  )
}

export default AdminList