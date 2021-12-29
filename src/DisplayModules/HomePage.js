
const HomePage = (props) => {
    return(
<div className="d-flex flex-column flex-grow-1 w-100 m-5 p-3 justify-content-center align-items-center">

    
    <div id="carouselMainPage" className="carousel slide d-flex flex-grow-1 w-100 m-1 justify-content-center align-items-center carousel slide" data-bs-ride="carousel">
    
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">Strategie tradingowe</div>
        <div className="carousel-item">Materiały do nauki</div>
        <div className="carousel-item">Testy analiz technicznych</div>
        <div className="carousel-item">Pomoc w każdym aspekcie tradingowym</div>
        <div className="carousel-item">Grupa Discord</div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselMainPage" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselMainPage" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default HomePage;