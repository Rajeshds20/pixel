
// const GallerySection = () => {
//     {/* Add medium sized images and make them scroll horizontally on scroll until all images completion, and then move to next section, by adding animations and growing of images */ }
//     return (
//         <div className="gallery-section" id='gallery'>
//             <div className="container mt-4">
//                 <div className="row">
//                     <div className="col-12">
//                         <h2 className="section-title">Gallery</h2>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="gallery">
//                             <div className="gallery-item">
//                                 <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
//                             </div>
// <div className="gallery-item">
//     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// </div>
// <div className="gallery-item">
//     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// </div>
// <div className="gallery-item">
//     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// </div>
// <div className="gallery-item">
//     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// </div>
// <div className="gallery-item">
//     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// </div>
// <div className="gallery-item">
//     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// </div>
//                             <div className="gallery-item">
//                                 <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GallerySection;

import { useEffect } from 'react';
// import './GallerySection.css';

const GallerySection = () => {
    useEffect(() => {
        const gallery = document.querySelector('.gallery');

        const handleScroll = () => {
            const scrollValue = window.scrollY;
            const parallaxValue = scrollValue * 0.7; // Adjust the parallax effect by changing the multiplier
            gallery.style.transform = `translateX(-${parallaxValue}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2 className="section-title">Gallery</h2>
                </div>
            </div>
            <div className="gallery-section" id="gallery">
                <div className="gallery">

                    <div className="gallery-inner">
                        <div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div>
                        <div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div><div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div><div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div><div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div><div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div><div className="gallery-item">
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
                        </div>
                        {/* Add more gallery items here */}
                    </div>
                </div>
            </div></>
    );
};

export default GallerySection;
