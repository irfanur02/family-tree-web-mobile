export default function member({onClickOpenModal}) {
  return (
    <div className="aspect-3/4 w-[45vw] min-w-[calc(100vw/2-0.9rem)] border-2 rounded-3xl p-2 bg-sunglow border-pumpkin-orange text-[calc(1vw+0.6rem)] flex flex-col justify-between snap-start">
      <div className="flex justify-between gap-1">
        <div className="member-name w-[65%]">
          <p className="font-bold block text-sm/4 wrap-break-word">LAILA SYA ADHA NOVITASARI</p>
          <p className="font-medium block text-sm/4">(NOVI)</p>
        </div>
        <div className="member-image w-[35%] grid gap-1 text-[calc(1vw+0.5rem)]">
          <p className="block font-bold text-center text-persian-red text-sm/4">ALM.</p>
          <div className="aspect-square w-auto relative overflow-hidden rounded-2xl border-1 border-rose-white cursor-pointer">
            {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-cold-black/70 grid place-content-center text-rose-white">
              <span>ALM.</span>
            </div> */}
            <img className="h-full w-full object-cover" src="/public/img/me1.jpg" />
          </div>
          <button 
            className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer"
            onClick={() => onClickOpenModal('invite')}>Invite</button>
          <button 
            className="bg-persian-red text-rose-white rounded-full w-auto cursor-pointer"
            onClick={() => onClickOpenModal('sanggah')}>Sanggah</button>
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
            <button 
              className="bg-blue-whale rounded-full text-rose-white cursor-pointer"
              onClick={() => onClickOpenModal('detailAnggota')}>Detail</button>
            <button 
              className="bg-blue-whale rounded-full text-rose-white cursor-pointer"
              onClick={() => onClickOpenModal('detailAnakDari')}>Anak</button>
          </div>
          <button 
            className="bg-blue-whale rounded-2xl text-rose-white cursor-pointer"
            onClick={() => onClickOpenModal('tambahAnggota')}>Tambah Anggota</button>
        </div>
      </div>
    </div>
  );
}