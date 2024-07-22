import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-5 rounded-md shadow-lg overflow-y-scroll h-[500px]'>
        <h2 className='text-lg font-semibold mb-4'>Bantuan untuk penulisan deskripsi dan ketentuan</h2>
        <p className='mb-4'>Untuk membuat tulisan bold</p>
        <p>&lt;b&gt; tulisan anda &lt;/b&gt;</p><br />
        <p className='mb-4'>Untuk membuat tulisan miring</p>
        <p>&lt;i&gt; tulisan anda &lt;/i&gt;</p><br />
        <p className='mb-4'>Untuk membuat tulisan underline</p>
        <p>&lt;u&gt; tulisan anda &lt;/u&gt;</p><br />
        <p className='mb-4'>Untuk membuat paragraf baru atau tulisan kebawah</p>
        <p> tulisan anda &lt;br/&gt;</p><br />
        <p className='mb-4'>Untuk membuat list</p>
        <p>&lt;ul&gt; <br />
            &lt;li&gt;1. Tulisan anda&lt;/li&gt; <br />  
            &lt;li&gt;2. Tulisan anda&lt;/li&gt;  <br />
            &lt;li&gt;3. Tulisan anda&lt;/li&gt;  <br />
            &lt;li&gt;4. Tulisan anda&lt;/li&gt;  <br />
            &lt;li&gt;5. Tulisan anda&lt;/li&gt;  <br />
            &lt;/ul&gt;</p><br />
        <div className='flex justify-end gap-4'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-gray-300 rounded-md'
          >
            Tutup
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Modal;
