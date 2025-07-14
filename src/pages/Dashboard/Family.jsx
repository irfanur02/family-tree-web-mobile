import Role from './Role';

export default function family({children}) {
  return (
    <div className="pb-3 pt-[5rem] font-main family-members grid grid-flow-row auto-rows-max place-content-center bg-tan-brown">
      {children}
    </div>
  );
}