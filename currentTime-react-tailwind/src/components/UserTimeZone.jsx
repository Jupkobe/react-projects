import { useState, useEffect, useRef } from 'react'

export default function UserTimeZone({ tz, changeTZ }) {
  const [timeZones, setTimeZones] = useState([]);
  const modal = useRef(null);
  
  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone")
    .then(res => res.json())
    .then(data => setTimeZones(data))
  }, []);
  
  const optionElems = timeZones.map((zone, index) => <option key={index} value={zone}>{zone}</option>);

  function openModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();
  }

  return (
    <> 
      <button onClick={openModal} className="text-gray-700 opacity-50 hover:opacity-100 font-medium">{tz}</button>
      
      <dialog ref={modal}>
        <div className="w-80 p-4 border border-black rounded">
          <div className="w-full flex items-center justify-between">
            <h3 className="font-bold">Time Zone</h3>
            <button onClick={closeModal} className="bg-transparent text-2xl border-0 before:content-['\2715']"></button>
          </div>
          <div className="w-full mt-8 leading-6 text-black">
            <form>
              <label htmlFor="tz">Pick a time zone:</label>
              <select 
                className="p-1 text-base border border-black rounded-sm"
                id="tz"
                value={tz}
                onChange={(e) => {
                  changeTZ(e)
                  closeModal();
                }}
                name="tz"
              >
              {optionElems}                
              </select>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}