// import React from 'react';
// import img1 from '../assets/images/img1.webp';
// import img2 from '../assets/images/img2.webp';
// import img3 from '../assets/images/img3.webp';
// import img4 from '../assets/images/img4.webp';
// import img5 from '../assets/images/img5.webp';
// import img6 from '../assets/images/img6.webp';
// import '../CSS/StyleRealisations.css';

// function RealisationClientsComponent() {
//     return <>
//         <section className='realisations'>
//             <div className='images'>
//                 <div className='image img1'>
//                     <img src={img1} alt="" />
//                 </div>
//                 <div className='image img2'>
//                     <img src={img2} alt="" />
//                 </div>
//                 <div className='image img3'>
//                     <img src={img3} alt="" />
//                 </div>
//                 <div className='image img4'>
//                     <img src={img4} alt="" />
//                 </div>
//                 <div className='image img5'>
//                     <img src={img5} alt="" />
//                 </div>
//                 <div className='image img6'>
//                     <img src={img6} alt="" />
//                 </div>
//             </div>
//         </section>
//     </>
// }

// export default RealisationClientsComponent

import React from 'react';
import img1 from '../assets/images/img1.webp';
import img2 from '../assets/images/img2.webp';
import img3 from '../assets/images/img3.webp';
import img4 from '../assets/images/img4.webp';
import img5 from '../assets/images/img5.webp';
import img6 from '../assets/images/img6.webp';
import img7 from '../assets/images/cake-vanille-fraise.webp';

import '../CSS/StyleRealisations.css';

function RealisationClientsComponent() {
    return <>
        <section className='realisations'>
            <p>Les réalisations de nos clients</p>
            <div className="grid-container">
                <div className="grid-item img1" data-aos="fade-right" data-aos-duration="1400"><img src={img1} alt="Image 1" /></div>
                <div className="grid-item img2" data-aos="fade-right" data-aos-duration="1400"><img src={img3} alt="Image 3" /></div>
                <div className="grid-item img3" data-aos="fade-left" data-aos-duration="1400"><img src={img2} alt="Image 2" /></div>
                <div className="grid-item img4" data-aos="fade-right" data-aos-duration="1400"><img src={img7} alt="Image 7" /></div>
                <div className="grid-item img5" data-aos="fade-left" data-aos-duration="1400"><img src={img4} alt="Image 4" /></div>
                <div className="grid-item img6" data-aos="fade-left" data-aos-duration="1400"><img src={img5} alt="Image 5" /></div>
                <div className="grid-item img7" data-aos="fade-left" data-aos-duration="1400"><img src={img6} alt="Image 6" /></div>
                {/* <div className="grid-item img8"><img src={img6} alt="Image 6" /></div> */}
            </div>
        </section>
    </>;
}

export default RealisationClientsComponent;
