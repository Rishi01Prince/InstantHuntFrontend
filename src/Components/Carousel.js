import React from 'react'

export default function


  () {
  return (
    <div>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className='carousel-caption' style={{zIndex : "10"}}>
            <form class="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>


          <div className="carousel-item active">
            <img src= '/Images/4.jpg'  className="d-block w-100" alt="..."  style={{filter : "brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src= '/Images/Cars.jpg' className="d-block w-100" alt="..." style={{filter : "brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src='/Images/Cycle.jpg' className="d-block w-100" alt="..." style={{filter : "brightness(30%)"}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
