import React, { useEffect, useState ,useRef } from 'react'
import './trending.css'
import Slider from 'react-slick'
import {Modal ,Spinner} from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MxOriginal from '../mx-original/Mx-Original'
import Youtube from 'react-youtube'


const trendingMoviesData = [
    {
        title:"The Third Charm ",
        image:"https://qqcdnpictest.mxplay.com/pic/9af465995bf40520eceb5a9f66464d28/en/2x3/320x480/test_pic1698649897366_badged_1700583779094.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"The Cursed ",
        image:"https://qqcdnpictest.mxplay.com/pic/7acd239190b1a7f589042ea3aca0575a/en/2x3/320x480/test_pic1699509541236.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Wynonna Earp ",
        image:"https://qqcdnpictest.mxplay.com/pic/9cac401bcff982778a643ac378db427c/en/2x3/320x480/test_pic1698649819304.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"A Piece of Your Mind ",
        image:"https://qqcdnpictest.mxplay.com/pic/8dc5fbb675bcf75b3afe6d24ac58c361/en/2x3/320x480/test_pic1699513595640.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Love is in the Air ",
        image:"https://qqcdnpictest.mxplay.com/pic/877bb73f8914122578d9f4d6a04aa9bf/en/2x3/320x480/test_pic1691654509290.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"The Rebel Princess ",
        image:"https://qqcdnpictest.mxplay.com/pic/93010c2d4700b91d42a3f7c83a2ef56c/en/2x3/320x480/test_pic1692953563127_badged_1694674116184.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"The Chasing Ball ",
        image:"https://qqcdnpictest.mxplay.com/pic/97b24da0eed5d345066d94ac5834db9c/en/2x3/320x480/test_pic1677049393778.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Dark Hole ",
        image:"https://qqcdnpictest.mxplay.com/pic/7d8e0c836dcbed14ea1b0a9af9873523/en/2x3/320x480/test_pic1696497014543.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"The Legends Of Monkey King ",
        image:"https://qqcdnpictest.mxplay.com/pic/a352bb664e907901e469af4991beb592/en/2x3/320x480/test_pic1698649752611_badged_1699369360568.webp",
        rating:"4.5",
        year: 2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },

    
]

const watchingData =[
    {
        image:"https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        title:"1 season 10 episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/775ad3b682fde6a608559a60986b230d/en/16x9/320x180/test_pic1684751399158.webp",
        title:"1 season 10 episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        title:"1 season 10 episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        title:"1 season 10 episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        title:"1 season 10 episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        title:"1 season 10 episodes"
    },
]
function Trending() {
    const [slidesToShow,setSlidesToShow] = useState(6)
    const [showModal,setShowModal] = useState(false)
   
    //to run the function continuously
    useEffect(() =>{
        const handleResize = ()=>{
            if(window.innerWidth<=400){
                setSlidesToShow(1)
            }
            else if(window.innerWidth<=600){
                setSlidesToShow(2)
            } else if(window.innerWidth<=900){
                setSlidesToShow(3)
            } 
            else if(window.innerWidth<=1100){
                setSlidesToShow(4)
            }
            else if(window.innerWidth<=1300){
                setSlidesToShow(5)
            } else{
                setSlidesToShow(6)
            }
        }
       handleResize()
       window.addEventListener("resize",handleResize)
    //    return () =>{
    //     window.removeEventListener("resize",handleResize)
    //    }
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
    const PlayerRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() =>{
    //   if(PlayerRef.current){
    //     PlayerRef.current.internalPLayer.addEventListener("onStateChange",(event) =>{
    //         if(event.data === 1){
    //             setIsLoading(false)
    //         }
    //     })
    //   }
    // },[PlayerRef])

    const handleIframeLoad = () =>{
        setIsLoading(false)
    }
    const handleShowModal =() =>{
        setShowModal(true)
    }

    const handleCloseModal =() =>{
        setShowModal(false)
    }

    // const youtubeOptions = {
    //     width: "100%",
    //     height: "315"
    // }
  return (
    <div className='bg-black py-2 px-2 container-fluid overflow-hidden'>
        <h1 className="fs-1 text-white mb-5">Trending Shows</h1>
        <div className="row">
       <Slider  {...settings}> {
            trendingMoviesData.map((item) => (
             <div className="col-12 col-sm-12 col-md-4 col-lg-2 p-2">
                <div className="trending-card text-white p-2">
                    <img src={item.image} alt='' className='w-100 rounded 3 mb-2'/>

                    <div className="movie-play" onClick={handleShowModal}>
                        <i class="bi bi-play-fill"></i>
                    </div>

                    <p className='fs-6'>{item.title}</p>
                    <div className="d-flex justify-content-between">
                        <p className="fs-6">rating {item.rating}</p>
                        <p className="fs-6 text-end">{item.year}</p>
                    </div>
                </div>

                <Modal show={showModal} onHide={handleCloseModal} size='lg' centered >
                    <Modal.Header closeButton>
                        {item.title}
                    </Modal.Header>

                    <Modal.Body className='modal-body'>
                    {
                            isLoading ? (
                            <div className="text-center loader">
                            <Spinner animation="border" variant="primary" />
                            </div>
                        ) : (
                        null
                        )}
                        <iframe
                            src={item.youtubeUrl}
                            frameBorder="0"
                            width="100%"
                            height="315"
                            title={item.title}
                            allowFullScreen
                            onLoad={handleIframeLoad}
                            ></iframe>
                        {/* <Youtube videoId={item.youtubeUrl}  opts={youtubeOptions} onReady={(event) =>(PlayerRef.current = event.target)}/> */}

                       
                    </Modal.Body>
                    <Modal.Footer>
                    <div className="d-flex justify-content-between  w-100 ">
                        <p className="fs-6">rating {item.rating}</p>
                        <p className="fs-6 text-end">{item.year}</p>
                    </div>
                    </Modal.Footer>
                </Modal>
             </div>
            ))
        }</Slider>
        </div>
        <MxOriginal/>
        <h1 className="fs-1 text-white py-5">Continue Watching</h1>
        <div className="row">
            <Slider {...settings}>
                {
                    watchingData.map((item,index) =>(
                        <div className="col-12 col-sm-12 col-lg-6 col-md-4 p-2">
                            <div className="watching-card">
                                <img src={item.image} alt="" className='w-100 rounded 3' />
                                <div className="overlap-watching-card">
                                    <small className="watching-tag">Recommended</small>
                                    <p className="fs-6 text-white">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Trending