import Member from './Member';

export default function role({as, children}) {
  return (
    <>
      <div className="member-role relative mt-[2rem] w-[calc(100dvw-1rem)]">
        <p className="title-member text-center text-[calc(1vw+1rem)] font-semibold">{as} {as === 'Saudara' ? "-3 (SAYA)" : null}</p>
        <div className="content-member overflow-x-auto snap-x">
          <div className="member flex gap-3">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}