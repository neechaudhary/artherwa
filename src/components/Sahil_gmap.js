import React from 'react'

// function initMap() {
//     const center = { lat: -25.363, lng: 131.044 };
//     const zoom = 4;
  
//     new google.maps.Map(document.getElementById("map"), {
//       zoom,
//       center,
//       gestureHandling: "cooperative",
//     });
//   }
  
//   window.initMap = initMap;

const Sahil_gmap = () => {
    return (
        <div>
            <section className='my-[30px]'>
                <div className="mapouter ">
                    <div className="gmap_canvas  ">
                        
                        <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1Mhat6cvIAklfLNfngaRg1fxXsj1NvR4&ehbc=2E312F" className='w-full h-screen'></iframe>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sahil_gmap