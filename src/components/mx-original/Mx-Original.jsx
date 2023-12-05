import React ,{useState , useEffect} from 'react'
import './mx-original.css';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const mxOriginalMoviesData = [
    {
        title:"JOHRI ",
        image:"https://qqcdnpictest.mxplay.com/pic/0c91e61b9dcb929d93a31db9218e62c3/en/2x3/320x480/test_pic1700742370574_badged_1700742392834.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"DHARAVI BANK",
        image:"https://qqcdnpictest.mxplay.com/pic/1a9a8ebf62df05e913ce23f67d954e02/en/2x3/320x480/test_pic1699276495902.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"BHAUKAAL ",
        image:"https://qqcdnpictest.mxplay.com/pic/775ad3b682fde6a608559a60986b230d/en/2x3/320x480/test_pic1698305827480.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"RAKTANCHAL ",
        image:"https://qqcdnpictest.mxplay.com/pic/ca7a124443044bf3c1f8ea52c8b7f9fc/en/2x3/320x480/test_pic1689833329737.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"INDORE Ishq",
        image:"https://qqcdnpictest.mxplay.com/pic/263122ff620b8e608aedf7269f05d9ae/en/2x3/320x480/test_pic1692357343143.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"#Runaway Lugaai ",
        image:"https://qqcdnpictest.mxplay.com/pic/fcc975fa3ce58ab61c51af8c40cda801/en/2x3/320x480/test_pic1699592728652.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"Tu Zakhim Hai ",
        image:"https://qqcdnpictest.mxplay.com/pic/35145b6944a0b3cf9a363c040a3280ba/en/2x3/320x480/test_pic1696859407558.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"Thinkistaan ",
        image:"https://qqcdnpictest.mxplay.com/pic/a7ecc11b9b963301b5821065b08bba2e/en/2x3/320x480/test_pic1695926240884.webp",
        rating:"4.5",
        year: 2023
    },
    {
        title:"BISAAT ",
        image:"https://qqcdnpictest.mxplay.com/pic/552498356ff4d7dc0e375318de86f89c/en/2x3/320x480/test_pic1696594603862.webp",
        rating:"4.5",
        year: 2023
    },

    
]

function MxOriginal() {
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
    <div  className='bg-black py-2 px-2 container-fluid overflow-hidden'>
          <h1 className="fs-1 text-white mb-5">MX Original Web Shows</h1>
        <div className="row">
       <Slider  {...settings}> {
            mxOriginalMoviesData.map((item) => (
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

export default MxOriginal