import './hero.css'

function Hero(){
    return(
      <div className="container-fluid hero">
        <div className ="row h-100 align-items-center">
          <div className ="col-12 col-sm-12 col-md-8">
             <div className="hero-text p-lg-5 p-3">
                <h1 className="heading text-900 text-main">Watch Best Movies</h1>
                <p className="fs-3 text-white mt-3">Ma Dong-Chan and Ko Mi-Ran take part in a human-freezing experiment that suddenly lands them 20 years into the future. They embark on an unexpected journey</p>
                <div className="d-flex gap-3">
                    <small className="text-white">ratings (4.5)</small>
                    <div className="d-flex gap-2">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                    </div>
                </div>
                <div className="d-flex align-items-center flex-wrap gap-3 mt-4">
                    <button className="btn-main hero-btn"><i class="bi bi-play-fill"></i> Play</button>
                    <button className="btn-main-light hero-btn ">More Info</button>
                    <div className="play-icon">
                     <i class="bi bi-play-fill"></i>  
                    </div>
                </div>
             </div>
            </div> 

            <div className ="col-12 col-sm-12 col-md-4">
            
            </div> 
        </div>
      </div>
    )
}

export default Hero