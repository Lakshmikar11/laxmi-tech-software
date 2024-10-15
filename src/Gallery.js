function Gallery() {
    return (
      <div className="text-center mt-5">
        <h1>Our Projects</h1>
        <div className="row mt-4">
          {/* Replace with your project images and descriptions */}
          <div className="col-md-4">
            <img src="project1.jpg" alt="Project 1" className="img-fluid" />
            <h3>Project Title 1</h3>
            <p>Short description of the project.</p>
          </div>
          <div className="col-md-4">
            <img src="project2.jpg" alt="Project 2" className="img-fluid" />
            <h3>Project Title 2</h3>
            <p>Short description of the project.</p>
          </div>
          <div className="col-md-4">
            <img src="project3.jpg" alt="Project 3" className="img-fluid" />
            <h3>Project Title 3</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gallery;
  