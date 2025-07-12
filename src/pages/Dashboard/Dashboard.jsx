export default function Dashboard() {
  return(
    <div className="relative">
      <nav className="px-3 py-2 bg-persian-red flex flex-col justify-between text-rose-white font-main text-[.9em] shadow-xl/10 fixed left-0 right-0 z-10 h-[5rem]">
        <div className="">
          <h1 className="font-brand font-black text-[1.2rem]">BANI</h1>
        </div>
        <div className="flex justify-between">
          <span>Lihat Garis Keturunan</span>
          <ul className="">
            <li className="pr-3 inline font-bold">KeluargaKU</li>
            <li className="inline">Cari Anggota</li>
          </ul>
        </div>
      </nav>
      <div className="pb-3 pt-[5rem] font-main family-members grid grid-flow-row auto-rows-max place-content-center bg-tan-brown">
        <div className="member-role relative mt-[2rem] w-[calc(100dvw-1rem)]">
          <p className="title-member text-center text-[calc(1vw+1rem)] font-semibold">ORANG TUA</p>
          <div className="content-member overflow-x-auto">
            <div className="member flex gap-3">
              <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between">
                <div className="flex justify-between gap-1">
                  <div className="member-name w-[65%]">
                    <p className="font-bold block text-sm/4 wrap-break-word">ROMADHON</p>
                    <p className="font-medium block text-sm/4">(ROMADHON)</p>
                  </div>
                  <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
                    <div className="aspect-square w-auto rounded-2xl border-1 border-rose-white cursor-pointer"></div>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                  </div>
                </div>
                <div>
                  <div className="member-birth">
                    <p className="block text-sm/4">Laki-laki</p>
                    <p className="block text-sm/4">21 Januari 1966</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="flex flex-col gap-1">
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Detail</button>
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Anak</button>
                    </div>
                    <button className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer">Tambah Anggota</button>
                  </div>
                </div>
              </div>
              <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between">
                <div className="flex justify-between gap-1">
                  <div className="member-name w-[65%]">
                    <p className="font-bold block text-sm/4 wrap-break-word">IFLACHA</p>
                    <p className="font-medium block text-sm/4">(IFLACHA)</p>
                  </div>
                  <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
                    <div className="aspect-square w-auto rounded-2xl border-1 border-rose-white cursor-pointer"></div>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                  </div>
                </div>
                <div>
                  <div className="member-birth">
                    <p className="block text-sm/4">Perempuan</p>
                    <p className="block text-sm/4">08 November 1969</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="flex flex-col gap-1">
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Detail</button>
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Anak</button>
                    </div>
                    <button className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer">Tambah Anggota</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member-role relative mt-[2rem] w-[calc(100dvw-1rem)]">
          <p className="title-member text-center text-[calc(1vw+1rem)] font-semibold">SAUDARA-3 (SAYA)</p>
          <div className="content-member overflow-x-auto snap-x">
            <div className="member flex gap-3">
              <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between snap-start">
                <div className="flex justify-between gap-1">
                  <div className="member-name w-[65%]">
                    <p className="font-bold block text-sm/4 wrap-break-word">LAILA SYA ADHA NOVITASARI</p>
                    <p className="font-medium block text-sm/4">(NOVI)</p>
                  </div>
                  <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
                    <div className="aspect-square w-auto rounded-2xl border-1 border-rose-white cursor-pointer"></div>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                  </div>
                </div>
                <div>
                  <div className="member-birth">
                    <p className="block text-sm/4">Perempuan</p>
                    <p className="block text-sm/4">21 November 1997</p>
                    <hr />
                    <p className="block text-sm/4">Suami:</p>
                    <p className="block font-bold text-sm/4">MUHAMMAD FIRDAUS</p>
                    <p className="block font-medium text-sm/4">(FIRDAUS)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="flex flex-col gap-1">
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Detail</button>
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Anak</button>
                    </div>
                    <button className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer">Tambah Anggota</button>
                  </div>
                </div>
              </div>
              <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between snap-start">
                <div className="flex justify-between gap-1">
                  <div className="member-name w-[65%]">
                    <p className="font-bold block text-sm/4 wrap-break-word">M IRFANUR ROCHMAN</p>
                    <p className="font-medium block text-sm/4">(IRFAN)</p>
                  </div>
                  <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
                    <p className="block font-bold text-center text-persian-red text-sm/4">ALM.</p>
                    <div className="aspect-square w-auto relative overflow-hidden rounded-2xl border-1 border-rose-white cursor-pointer">
                      {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-cold-black/70 grid place-content-center text-rose-white">
                        <span>ALM.</span>
                      </div> */}
                      <img class="h-full w-full object-cover" src="/public/img/me1.jpg" />
                    </div>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                  </div>
                </div>
                <div>
                  <div className="member-birth">
                    <p className="block text-sm/4">Laki-laki</p>
                    <p className="block text-sm/4">27 Februari 2000</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="flex flex-col gap-1">
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Detail</button>
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Anak</button>
                    </div>
                    <button className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer">Tambah Anggota</button>
                  </div>
                </div>
              </div>
              <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between snap-start">
                <div className="flex justify-between gap-1">
                  <div className="member-name w-[65%]">
                    <p className="font-bold block text-sm/4 wrap-break-word">ARIES HIDAYAH TULLAH MUALIF</p>
                    <p className="font-medium block text-sm/4">(ARIS)</p>
                  </div>
                  <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
                    <div className="aspect-square w-auto rounded-2xl border-1 border-rose-white cursor-pointer"></div>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                  </div>
                </div>
                <div>
                  <div className="member-birth">
                    <p className="block text-sm/4">Laki-laki</p>
                    <p className="block text-sm/4">19 April 2002</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="flex flex-col gap-1">
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Detail</button>
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Anak</button>
                    </div>
                    <button className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer">Tambah Anggota</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member-role relative mt-[2rem] w-[calc(100dvw-1rem)]">
          <p className="title-member text-center text-[calc(1vw+1rem)] font-semibold">ANAK (FIRDAUS & NOVI)</p>
          <div className="content-member overflow-x-auto">
            <div className="member flex gap-3">
              <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between">
                <div className="flex justify-between gap-1">
                  <div className="member-name w-[65%]">
                    <p className="font-bold block text-sm/4 wrap-break-word">CERISSA MECCA FIRDAUS</p>
                    <p className="font-medium block text-sm/4">(CERI)</p>
                  </div>
                  <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
                    <div className="aspect-square w-auto rounded-2xl border-1 border-rose-white cursor-pointer"></div>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Invite</button>
                    <button className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer">Sanggah</button>
                  </div>
                </div>
                <div>
                  <div className="member-birth">
                    <p className="block text-sm/4">Perempuan</p>
                    <p className="block text-sm/4">18 Sepetember 2024</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="flex flex-col gap-1">
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Detail</button>
                      <button className="bg-blue-whale rounded-full text-rose-white cursor-pointer">Anak</button>
                    </div>
                    <button className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer">Tambah Anggota</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal invite */}
      {/* <div className="fixed z-20 font-main top-0 bottom-0 left-0 right-0 bg-cold-black/60 grid place-content-center">
        <div className="w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden">
          <div className="flex px-2 py-3 h-max relative justify-center items-center bg-persian-red text-rose-white">
            <span className="leading-none text-center">INVITE</span>
            <span className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
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
      </div> */}


      {/* modal sanggahan */}
      {/* <div className="fixed z-20 font-main top-0 bottom-0 left-0 right-0 bg-cold-black/60 grid place-content-center">
        <div className="w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden">
          <div className="flex px-2 py-3 h-max relative justify-center items-center bg-persian-red text-rose-white">
            <span className="leading-none text-center">SANGGAH</span>
            <span className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
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
      </div> */}


      {/* modal lihat garis keturunan */}
      {/* <div className="fixed z-20 font-main top-0 bottom-0 left-0 right-0 bg-cold-black/60 grid place-content-center">
        <div className="w-[90dvw] border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden">
          <div className="flex px-2 py-3 h-max relative justify-center items-center bg-persian-red text-rose-white">
            <span className="leading-none text-center">LIHAT GARIS KETURUNAN</span>
            <span className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </span>
          </div>
          <div className="flex justify-center gap-3 p-5">
            <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-extrabold w-20 cursor-pointer">AYAH</button>
            <button className="bg-blue-whale rounded-2xl text-rose-white p-3 font-extrabold w-20 cursor-pointer">IBU</button>
          </div>
        </div>
      </div> */}


      {/* modal cari anggota */}
      <div className="fixed z-20 font-main top-0 bottom-0 left-0 right-0 bg-cold-black/60 grid place-content-center">
        <div className="w-[90dvw] h-max border-1 border-tan-brown rounded-3xl bg-tan-brown overflow-hidden">
          <div className="flex px-2 py-3 h-max relative justify-center items-center bg-persian-red text-rose-white">
            <span className="leading-none text-center">CARI ANGGOTA</span>
            <span className="absolute right-0 top-0 bottom-0 grid place-content-center pr-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
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
      </div>
    </div>
  );
}