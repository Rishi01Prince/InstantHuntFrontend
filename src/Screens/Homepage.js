import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';
import obj from '../Data/DataOfCards';



export default function Homepage() {


  const [VechicleData, setVechicleData] = useState([])
  const [VechicleCategory, setVechicleCategory] = useState([])
  const [search, setSearch] = useState('')

  const loadVechicleData = async () => {

    let response = await fetch("http://localhost:5000/api/VechicleData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json()
    setVechicleData(response[0])
    setVechicleCategory(response[1])
  }

  //Useeffect humne ue kiya : jab pahli baar rendering hogi to LoadVechicle data chale aur 
  //uske baad hi jab data aa jaaye vechicle data aur category data me to hum retunr wala execute krewaige
  useEffect(() => {
    loadVechicleData()
  }, [])




  return (
    <div>
      <Navbar />


      {/* Carousel */}

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"> 
        <div className="carousel-inner">
          <div className='carousel-caption' style={{ zIndex: "10" }}>

            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search you Vechicle Name Here" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </div>
          </div>


          <div className="carousel-item active">
            <img src='/Images/4.jpg' className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img src='/Images/Cars.jpg' className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img src='/Images/Cycle.jpg' className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
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

      {/* --------------------------------------- */}




      <div className='container'>
        {
          VechicleCategory !== undefined && VechicleCategory.length > 0
            ? VechicleCategory.map((data) => {
              return (
                //Each Category
                // justify-content-center
                <div key= {data._id} style={{ paddingBlock: "10px" }}>
                  
                  <div className='row mb-3'>
                    <div key={data.id} className='fs-3 m-3' style={{ paddingBlock: "5px" }} >
                      {data.CategoryName}
                    </div>
                    <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />

                    {/* Vechicle data ko ab dekh rahe hai */}
                    {VechicleData !== undefined && VechicleData.length > 0
                     ? VechicleData.filter(
                      //We are filtering the json file according to Category name and the letter we are enting in search bar
                      (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItems => {
                        //Here don't be confused like filterItems kaha se aa gaya we can give any name to the parameter that
                        //We are passing in function of map

                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3' style={{ paddingBottom: "90px", paddingTop: "90px", paddingBlock: "90px" }}>
                            {console.log(filterItems.url)}
                            <Card vdata={filterItems}  options={filterItems.options[0]} ></Card>
                          </div>
                        )

                      }) : <div> No Such Data </div>}
                  </div>

                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>
  );
}
