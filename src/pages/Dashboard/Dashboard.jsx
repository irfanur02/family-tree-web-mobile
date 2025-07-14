import { children, useState, useEffect } from "react";
import Nav from './Nav';
import Family from './Family';
import Role from './Role';
import Member from './Member';

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const [openForModal, setOpenForModal] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  // 👇 KUNCI SCROLL SAAT MODAL AKTIF
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  // close backdrop modal
  const closeModal = () => {
    setIsClosing(true);
    setModal(false);
    setTimeout(() => {
      setIsClosing(false);
    }, 300); // waktu harus sama dengan durasi animasi close
  };

  // event click tombol modal
  function handleOpenModal(modal) {
    setModal(true);
    setOpenForModal(modal);
  }

  // render modal
  function renderModal(forModal) {
    switch (forModal) {
      case 'invite':
        {/* modal invite */}
        return (
          <div 
          className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
          onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">INVITE</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer" 
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <p className="text-base/5 text-center">
                Undang <strong>ROMADHON</strong><br />
                agar bisa melihat silsilah keluarga        
              </p>
              <input type="text" className="text-center text-cold-black bg-rose-white rounded-xl border border-foggy-grey py-1 px-2" placeholder="URL link" disabled/>
              <button className="bg-blue-whale rounded-2xl text-rose-white py-1 cursor-pointer">Salin URL link</button>
            </div>
          </div>
        );
        break;
      case 'sanggah':
        {/* modal sanggahan */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">SANGGAH</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <p className="text-base/5 text-center">
                Beri catatan / saran <br />
                pada anggota profil <strong>ROMADHON</strong> <br />
                agar diperbaiki oleh admin
              </p>
              <div className="mt-5">
                <label htmlFor="sanggah" className="block">Sanggahan</label>
                <textarea rows="4" type="text" id="sanggah" name="sanggah" className="w-full text-cold-black bg-rose-white rounded-xl border border-foggy-grey py-1 px-2"/>
              </div>
              <button className="bg-blue-whale rounded-2xl text-rose-white py-1 cursor-pointer">Salin URL link</button>
            </div>
          </div>
        );
        break;
      case 'lihatGarisKeturunan' :
        {/* modal lihat garis keturunan */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">LIHAT GARIS KETURUNAN</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex justify-center gap-3 p-5">
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-medium w-20 cursor-pointer">AYAH</button>
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-medium w-20 cursor-pointer">IBU</button>
            </div>
          </div>
        );
        break;
      case 'cariAnggota' :
        {/* modal cari anggota */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">CARI ANGGOTA</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="p-3">
              <input type="text" className="w-full text-cold-black bg-rose-white rounded-xl border border-foggy-grey py-1 px-2 mb-2 mt-2" placeholder="Masukkan Nama Lengkap / Panggilan"/>
              <div className="">
                <ul className="overflow-y-auto pt-3 pb-3 mb-3 border-t-2 border-b-2 h-90">
                  <li className="flex justify-between border-1 rounded-xl py-2 px-1">
                    <div className="member self-center">
                      <span className="block font-bold wrap-break-word">LAILA SYA ADHA NOVITASARI</span>
                      <span className="block font-medium">NOVI</span>
                    </div>
                    <div className="grid gap-1 place-content-center">
                      <button className="bg-pumpkin-orange text-cold-black rounded-full cursor-pointer px-4 h-max w-full">+ admin</button>
                      <button 
                        className="bg-blue-whale text-rose-white rounded-full cursor-pointer px-4 h-max w-full"
                        onClick={() => handleOpenModal('detailAnggota')}>lihat profil</button>
                    </div>
                  </li>
                  <li className="flex justify-between border-1 rounded-xl py-2 px-1 mt-2">
                    <div className="member self-center">
                      <span className="block font-bold wrap-break-word">LANOVI INDAH IMSYIA</span>
                      <span className="block font-medium">NOVI</span>
                    </div>
                    <div className="grid gap-1 place-content-center">
                      <button 
                        className="bg-pumpkin-orange text-cold-black rounded-full cursor-pointer px-4 h-max w-full"
                        onClick={() => handleOpenModal('konfirmasiJadikanAdmin')}>+ admin</button>
                      <button className="bg-blue-whale text-rose-white rounded-full cursor-pointer px-4 h-max w-full">lihat profil</button>
                    </div>
                  </li>
                  <li className="flex justify-between border-1 rounded-xl py-2 px-1 mt-2">
                    <div className="member self-center">
                      <span className="block font-bold wrap-break-word">AGTHA REVA NOVIRA AMANDA</span>
                      <span className="block font-medium">NOVI</span>
                    </div>
                    <div className="grid gap-1 place-content-center">
                      <button className="bg-pumpkin-orange text-cold-black rounded-full cursor-pointer px-4 h-max w-full">+ admin</button>
                      <button className="bg-blue-whale text-rose-white rounded-full cursor-pointer px-4 h-max w-full">lihat profil</button>
                    </div>
                  </li>
                  <li className="flex justify-between border-1 rounded-xl py-2 px-1 mt-2">
                    <div className="member self-center">
                      <span className="block font-bold wrap-break-word">LAILA SYA ADHA NOVITASARI</span>
                      <span className="block font-medium">NOVI</span>
                    </div>
                    <div className="grid gap-1 place-content-center">
                      <button className="bg-pumpkin-orange text-cold-black rounded-full cursor-pointer px-4 h-max w-full">+ admin</button>
                      <button className="bg-blue-whale text-rose-white rounded-full cursor-pointer px-4 h-max w-full">lihat profil</button>
                    </div>
                  </li>
                  <li className="flex justify-between border-1 rounded-xl py-2 px-1 mt-2">
                    <div className="member self-center">
                      <span className="block font-bold wrap-break-word">LAILA SYA ADHA NOVITASARI</span>
                      <span className="block font-medium">NOVI</span>
                    </div>
                    <div className="grid gap-1 place-content-center">
                      <button className="bg-pumpkin-orange text-cold-black rounded-full cursor-pointer px-4 h-max w-full">+ admin</button>
                      <button className="bg-blue-whale text-rose-white rounded-full cursor-pointer px-4 h-max w-full">lihat profil</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
        break;
      case 'konfirmasiJadikanAdmin' :
        {/* modal kofirmasi jadikan admin */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">KONFIRMASI</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <p className="text-base/5 text-center">
                Apakah anda yakin untuk mempercayakan <br />
                <strong>LANOVI INDAH IMSYIA</strong><br />
                mengelola silsilah keluarga
              </p>
              <div className="flex justify-center mt-3 gap-3">
                <button className="bg-blue-whale rounded-2xl text-rose-white py-1 w-20 cursor-pointer">IYA</button>
                <button className="bg-rose-white rounded-2xl text-cold-black py-1 w-20 cursor-pointer">TIDAK</button>
              </div>
            </div>
          </div>
        );
        break;
      case 'detailAnggota' :
        {/* modal detail anggota */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">DETAIL ANGGOTA</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-3 mx-3 mt-3 pt-1 pb-1 h-100 border-t-1 border-b-1 overflow-x-auto">
              <div className="flex justify-between">
                <ul>
                  <li className="">
                    <p className="block text-base/5">Nama Lengkap</p>
                    <p className="block text-base/5 font-semibold">LAILA SYA ADHA NOVITASARI</p>
                  </li>
                  <li className="mt-3">
                    <p className="block text-base/5">Sebagai</p>
                    <p className="block text-base/5">Istri</p>
                  </li>
                  <li className="mt-3">
                    <p className="block text-base/5">Pasangan</p>
                    <div className="flex text-base/5 gap-1 mt-1 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                        <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                      <span className="font-semibold">
                        FIRDAUS
                      </span>
                    </div>
                  </li>
                  <li className="mt-3">
                    <p className="block text-base/5">Tanggal Lahir</p>
                    <p className="block text-base/5">21 November 1996</p>
                  </li>
                  <li className="mt-3">
                    <p className="block text-base/5">Orang Tua</p>
                    <div className="flex text-base/5 gap-1 mt-1 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                        <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                      <p>
                        <span className="font-semibold">ROMADHON</span> (Ayah)
                      </p>
                    </div>
                    <div className="flex text-base/5 gap-1 mt-1 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                        <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                      <p>
                        <span className="font-semibold">IFLACHA</span> (Ibu)
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="member-image size-[10rem] grid gap-1">
                  <div className="aspect-square w-auto rounded-2xl border-1 border-rose-white cursor-pointer"></div>
                  <p className="text-center text-base/5">
                    Panggilan <br />
                    <span className="font-semibold">NOVI</span>  
                  </p>
                  <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                  <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                </div>
              </div>
              <ul>
                <li className="">
                  <p className="block text-base/5">Nama Lengkap</p>
                  <p className="block text-base/5 font-semibold">LAILA SYA ADHA NOVITASARI</p>
                </li>
                <li className="mt-3">
                  <p className="block text-base/5">Sebagai</p>
                  <p className="block text-base/5">Istri</p>
                </li>
                <li className="mt-3">
                  <p className="block text-base/5">Pasangan</p>
                  <div className="flex text-base/5 gap-1 mt-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                      <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    <span className="font-semibold">
                      FIRDAUS
                    </span>
                  </div>
                </li>
                <li className="mt-3">
                  <p className="block text-base/5">Tanggal Lahir</p>
                  <p className="block text-base/5">21 November 1996</p>
                </li>
                <li className="mt-3">
                  <p className="block text-base/5">Orang Tua</p>
                  <div className="flex text-base/5 gap-1 mt-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                      <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    <p>
                      <span className="font-semibold">ROMADHON</span> (Ayah)
                    </p>
                  </div>
                  <div className="flex text-base/5 gap-1 mt-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                      <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    <p>
                      <span className="font-semibold">IFLACHA</span> (Ibu)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-end h-[3rem]">
              <button 
                className="bg-blue-whale self-center mr-3 rounded-2xl text-rose-white py-1 w-30 h-max cursor-pointer"
                onClick={() => handleOpenModal('formEditAnggota')}>EDIT</button>
            </div>
          </div>
        );
        break;
      case 'formEditAnggota' :
        {/* modal form tambah atau edit anggota */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">UBAH PROFIL</span>
              <span 
                className="absolute left-0 top-0 bottom-0 grid place-content-center pl-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-2 mx-3 mt-3 pt-1 pb-1 h-100 border-t-1 border-b-1 overflow-x-auto">
              <div>
                <div className="w-30">
                  <label htmlFor="gambar">Foto</label>
                  <div id="gambar" className="border-1 aspect-3/4 rounded-xl">
                    <img className="w-full" id="preview-gambar"></img>
                  </div>
                  <div className="w-full h-max relative bottom-0 pt-1">
                    <input type="file" id="upload" className="absolute inset-0 w-full h-full opacity-0"
                    />
                    <label htmlFor="upload" className="bg-foggy-grey text-cold-black text-sm px-1 w-full rounded-xl inline-block text-center cursor-pointer">Ganti</label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="namaLengkap" className="block">Nama Lengkap</label>
                <input type="text" id="namaLengkap" className="block w-full text-cold-black bg-rose-white rounded-xl border border-foggy-grey py-1 px-2" />
              </div>
              <div>
                <label htmlFor="panggilan" className="block">Panggilan</label>
                <input type="text" id="panggilan" className="block w-full text-cold-black bg-rose-white rounded-xl border border-foggy-grey py-1 px-2" />
              </div>
              <div>
                <span className="block">Jenis Kelamin</span>
                <div className="mr-7 inline">
                  <input type="radio" id="genderLaki" className="mr-2 cursor-pointer"/>
                  <label htmlFor="genderLaki" className="cursor-pointer">Laki-laki</label>
                </div>
                <div className="mr-7 inline">
                  <input type="radio" id="genderPerempuan" className="mr-2 cursor-pointer"/>
                  <label htmlFor="genderPerempuan" className="cursor-pointer">Perempuan</label>
                </div>
              </div>
              <div>
                <label htmlFor="tanggalLahir" className="block">Tanggal Lahir</label>
                <input type="date" id="tanggalLahir" className="block text-cold-black bg-rose-white rounded-xl border border-foggy-grey py-1 px-2 cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-end h-[3rem]">
              <button className="bg-blue-whale self-center mr-3 rounded-2xl text-rose-white py-1 w-30 h-max cursor-pointer">UPDATE</button>
              <button className="bg-rose-white self-center mr-3 rounded-2xl text-cold-black py-1 w-30 h-max cursor-pointer">BATAL</button>
            </div>
          </div>
        );
        break;
      case 'tambahAnggota' :
        {/* overlay tambah anggota */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">TAMBAH ANGGOTA</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 p-5">
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">Orang Tua</button>
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">Saudara</button>
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">Pasangan</button>
              <button 
                className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer"
                onClick={() => handleOpenModal('subModalTambahAnak')}>Anak</button>
            </div>
          </div>
        );
        break;
      case 'subModalTambahAnak' :
        {/* sub overlay tambah anak */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">ANAK DARI ISTRI</span>
              <span 
                className="absolute left-0 top-0 bottom-0 grid place-content-center pl-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 p-5">
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">X</button>
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">Y</button>
            </div>
          </div>
        );
        break;
      case 'detailAnakDari' :
        {/* overlay detail anak dari */}
        return (
          <div 
            className={`w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden ${modal ? "animate-open-modal" : "animate-close-modal"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex px-2 py-3 relative justify-center items-center bg-persian-red text-rose-white">
              <span className="leading-none text-center">ANAK DARI ISTRI</span>
              <span 
                className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer"
                onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 p-5">
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">X</button>
              <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-semibold w-full cursor-pointer">Y</button>
            </div>
          </div>
        );
        break;
      default:
        break;
    }
  }

  return(
    <div className="relative font-main">
      <Nav onClickOpenModal={handleOpenModal} />
      <Family>
        <Role as="Orang Tua">
          <Member onClickOpenModal={handleOpenModal} />
          <Member onClickOpenModal={handleOpenModal} />
        </Role>
        <Role as="Saudara">
          <Member onClickOpenModal={handleOpenModal} />
          <Member onClickOpenModal={handleOpenModal} />
          <Member onClickOpenModal={handleOpenModal} />
        </Role>
        <Role as="Anak">
          <Member onClickOpenModal={handleOpenModal} />
        </Role>
      </Family>

      {modal || isClosing ? (
        <div 
          className={`fixed z-20 font-main top-0 bottom-0 left-0 right-0 bg-cold-black/60 grid place-content-center ${modal ? "animate-open-backdrop-modal" : "animate-close-backdrop-modal"}`} 
          onClick={closeModal}>

          {renderModal(openForModal)}

        </div>
      ) : ""}


    </div>
  );
}