export default function nav({onClickOpenModal}) {
  return (
    <nav className="px-3 py-2 bg-persian-red flex flex-col justify-between text-rose-white font-main text-[.9em] shadow-xl/10 fixed left-0 right-0 z-10 h-[5rem]">
      <div className="">
        <h1 className="font-brand font-black text-[1.2rem]">BANI</h1>
      </div>
      <div className="flex justify-between">
        <span className="cursor-pointer" onClick={() => onClickOpenModal('lihatGarisKeturunan')}>Lihat Garis Keturunan</span>
        <ul className="">
          <li className="pr-3 inline font-bold">KeluargaKU</li>
          <li 
            className="inline cursor-pointer"
            onClick={() => onClickOpenModal('cariAnggota')}>Cari Anggota</li>
        </ul>
      </div>
    </nav>
  );
}