import { useEffect, useState } from "react"

export default function Login() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [activeForm, setActiveForm] = useState('login');
  const [showForm, setShowForm] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [moveToUp, setMoveToUp] = useState(false);

  useEffect(() => {
    // Step 1: Tampilkan brand
    setShowBrand(true);
  
    // Step 2: Tampilkan form-login
    const timer1 = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    // Step 3: Geser Brand
    const timer2 = setTimeout(() => {
      setMoveToUp(true);
    }, 2000);
  
    return () => clearTimeout(timer1, timer2);
  }, []);
  

  function renderForm(form) {    
    switch (form) {
      case 'login':
        return (
          <div id="login-case" className="grid gap-3 grid-flow-row">
            <input type="text" className='border block py-3 px-6 w-full bg-rose-white border-foggy-grey rounded-full' placeholder='Masukkan Username' required />
            <div className="form-group relative">
              <input type={togglePassword ? "text" : "password"} className='border block py-3 px-6 w-full bg-rose-white border-foggy-grey rounded-full' placeholder='Masukkan Password' required />
              <div className="icon absolute right-0 top-0 bottom-0 grid h-full content-center pr-7">
              {togglePassword ? (
                // Eye Close
                <div id="eyeClose" onClick={() => setTogglePassword(false)} style={{ cursor: 'pointer' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                    </svg>
                  </div>
                ) : (
                  // Eye Open
                  <div id="eyeOpen" onClick={() => setTogglePassword(true)} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                  </div>
                )
              }
              </div>
            </div>
            <button className='mt-6 py-3 rounded-full bg-blue-whale text-rose-white cursor-pointer'>LOGIN</button>
            <button type="button" onClick={() => setActiveForm('forgetAkun')} className='text-cold-black text-center cursor-pointer'>Lupa Akun Login ?</button>
          </div>
        );
        break;
      case 'forgetAkun':
        return (
          <div id="forget-akun-case" className="grid h-[100%] content-between gap-3">
            <div className="grid gap-3">
              <p className="text-center text-cold-black font-bold text-xl">Lupa Akun</p>
              <input type="text" className='border block py-3 px-6 w-full bg-rose-white border-foggy-grey rounded-full' placeholder='Masukkan Username' />
              <button type="button" onClick={() => setActiveForm('loginAgain')} className='py-3 rounded-full bg-blue-whale w-full text-rose-white cursor-pointer'>Lanjut</button>
            </div>
            <button type="button" onClick={() => setActiveForm('login')} className='py-3 rounded-full font-medium bg-rose-white text-cold-black cursor-pointer'>Kembali Ke LOGIN</button>
          </div>
        );
        break;
      case 'loginAgain':
        return (
          <div id="login-again-case" className="grid h-[100%] content-between gap-3">
            <div className="grid gap-3 grid-flow-row">
              <input type="text" className='border block py-3 px-6 w-full bg-rose-white border-foggy-grey rounded-full' placeholder='Masukkan Username' required/>
              <div className="form-group relative">
                <input type={togglePassword ? "text" : "password"} className='border block py-3 px-6 w-full bg-rose-white border-foggy-grey rounded-full' placeholder='Masukkan Password' required/>
                <div className="icon absolute right-0 top-0 bottom-0 grid h-full content-center pr-7">
                  {togglePassword ? (
                  // Eye Close
                    <div id="eyeClose" onClick={() => setTogglePassword(false)} style={{ cursor: 'pointer' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                      </svg>
                    </div>
                  ) : (
                    // Eye Open
                    <div id="eyeOpen" onClick={() => setTogglePassword(true)} style={{ cursor: 'pointer' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                      </svg>
                    </div>
                  )}
                </div>   
              </div>
              <button className='py-3 rounded-full bg-blue-whale text-rose-white cursor-pointer'>LOGIN</button>
            </div>
            <button type="button" onClick={() => setActiveForm('login')} className='py-3 rounded-full font-medium bg-rose-white text-cold-black cursor-pointer'>Kembali Ke LOGIN</button>
          </div>
        );
        break;
      default:
        break;
    }
  }

  return (
    <>
      <section className='brand bg-persian-red h-dvh w-dvw'>
        <div className={`font-brand h-full grid place-content-center text-center text-rose-white transition-all duration-800 ease-in-out ${showBrand ? "scale-100 opacity-100" : "scale-73 opacity-0"}`}>
          <div className={`body-brand transition-all duration-800 ease-in-out ${moveToUp ? "-translate-y-[12em]" : ""}`}>
            <p className='text-[calc(1vw+2.5rem)] font-bold'>BANI</p>
            <p className='text-[calc(1vw+.8rem)] font-light'>Lihat Silsilah Keluarga-Mu</p>
          </div>
        </div>
      </section>
      {/* top-[55dvh] bottom-0 */}
      <section className={`form-login font-main bg-tan-brown absolute left-0 right-0 rounded-t-[2rem] shadow-top-deep md:left-[32dvh] md:right-[32dvh] transition-all duration-500 ease-in-out ${showForm ? "top-[55dvh] bottom-0" : "top-[100vh]"}`}>
        <form action="" className='text-cold-black box-border p-10 h-[100%]'>
          {renderForm(activeForm)}
        </form>
      </section>
    </>
  )
}