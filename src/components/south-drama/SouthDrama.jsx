import React, {useEffect,useState} from 'react'
import './southDrama.css';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const southDramaMoviesData = [
    {
        title:"DWARAKA ",
        image:"https://qqcdnpictest.mxplay.com/pic/12cc7e457f6f1537a07cb1e1f94e55d9/en/2x3/208x312/996851ae721d4a3b1d707f2001b1fa12_1280x1920.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"DIL DHADAK DHADAK",
        image:"https://qqcdnpictest.mxplay.com/pic/e138bcabc026f09f5c92b00e3d64db58/en/2x3/208x312/9eb0f88f1e7eae1a34cc89cca646a5ca_1280x1920.webp",
        rating:"4.2",
        year: 2023
    },
    {
        title:"Shaitan ",
        image:"https://qqcdnpictest.mxplay.com/pic/3c58b1d71d17a2a97189d6085e312448/en/2x3/208x312/test_pic1687789810323.webp",
        rating:"4",
        year: 2023
    },
    {
        title:"VIP-2 ",
        image:"https://qqcdnpictest.mxplay.com/pic/39c615101c69abe551a68b48ccdfc4ee/en/2x3/208x312/00057da2a113f8ac560f36badbf64dcb_1280x1920.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"The Return of Abhimanyu",
        image:"https://qqcdnpictest.mxplay.com/pic/91947a0ff3c4435db7b9ec61dce16609/en/2x3/208x312/5a0f5d4e06b83583c2899583830b7332_1280x1920.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"Abhinetri NO 1 ",
        image:"https://qqcdnpictest.mxplay.com/pic/ec29247e0630fa21804ed68942221d22/en/2x3/208x312/f37ae6c3dc549bab2ac5fdde36f6cbac_1280x1920.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"96",
        image:"https://qqcdnpictest.mxplay.com/pic/c36e83925b09709b4a255ae5ec73c221/en/2x3/208x312/test_pic1687246220911.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"Fidaa",
        image:"https://qqcdnpictest.mxplay.com/pic/a5807c1f4c8ee63a3e474d1164546239/en/2x3/208x312/test_pic1687789429072.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"Jaanu ",
        image:"https://qqcdnpictest.mxplay.com/pic/77ef6b4b1d54ffbf361daa907c43c994/en/2x3/208x312/22b8253e6dc52496ce53af1ef95879e5_1280x1920.webp",
        rating:"4.5",
        year: 2023
    },

    
]

function SouthDrama() {
    const [slidesToShow,setSlidesToShow] = useState(6)

    useEffect(() =>{
        const handleResize =() =>{
         if(window.innerWidth <=600){
             setSlidesToShow(1)
         } else if(window.innerWidth <=900){
             setSlidesToShow(3)
         }else{
             setSlidesToShow(6)
         }
        }
        handleResize()
        window.addEventListener("resize",handleResize)
    },[])

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    }
  return (
    <div className='bg-black py-2 px-2 container-fluid overflow-hidden'>
        <h1 className="fs-1 text-white mb-5">Drama From The South</h1>
        <div className="row">
       <Slider  {...settings}> {
            southDramaMoviesData.map((item) => (
             <div className="col-12 col-sm-12 col-md-4 col-lg-2 p-2">
                <div className="trending-card text-white p-2">
                    <img src={item.image} alt='' className='w-100 rounded 3 mb-1'/>
                    <p className='fs-6'>{item.title}</p>
                    <div className="d-flex justify-content-between">
                        <p className="fs-6">rating {item.rating}</p>
                        <p className="fs-6 text-end">{item.year}</p>
                    </div>
                </div>
             </div>
            ))
        }</Slider>
        </div>
        </div>
  )
}

export default SouthDrama