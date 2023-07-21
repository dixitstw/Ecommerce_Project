import React from 'react'

const Carousel = () => {
  return (
    <>
    <div className='container w-75'>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=2000" className="d-block w-100 mt-3" alt="..."/>
    </div> 
    <div className="carousel-item">
      <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/11/featured-free-icons.png" className="d-block w-100 mt-3" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlQi-1P7lHgNHsM2IoLGhCcGzE2d5vWlwFA&usqp=CAU" className="d-block w-100 mt-3" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}

export default Carousel