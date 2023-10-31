import { useState, useEffect } from 'react'
import MicroModal from 'react-micro-modal';
import ModalTimeZone from './ModalTimeZone';

export default function UserTimeZone({ tz, changeTZ }) {
  const [timeZones, setTimeZones] = useState([]);
  
  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone")
      .then(res => res.json())
      .then(data => setTimeZones(data))
  }, []);
  
  return (
    <> 
    <button onClick={openModal} className="text-gray-700 opacity-50 hover:opacity-100 font-medium">{tz}</button>
    </>
    // ADD DIALOG MODAL

    // <MicroModal disableFirstElementFocus trigger={(open) => <h4 onClick={open} className="cursor-pointer text-gray-700 opacity-40 hover:opacity-100 font-medium">{tz}</h4>}>
    //   {
    //     (close) => (
    //       <div className="w-[17.5rem]">
    //         <div className="w-full flex items-center justify-between">
    //           <h3 className="font-bold">Time Zone</h3>
    //           <button onClick={close} className="bg-transparent text-2xl border-0 before:content-['\2715']"></button>
    //         </div>
    //         <div className="w-full mt-8 leading-6 text-black">
    //           <form>
    //             <label htmlFor="tz">Pick a time zone:</label>
    //             <select 
    //               className="p-1 text-base border border-black rounded-sm"
    //               id="tz"
    //               value={tz}
    //               onChange={(e) => {
    //                 changeTZ(e)
    //                 close();
    //               }}
    //               name="tz"
    //             >
    //               {optionElems}                
    //             </select>
    //           </form>
    //         </div>
    //       </div>
    //     )
    //   }
    // </MicroModal>
  )
}