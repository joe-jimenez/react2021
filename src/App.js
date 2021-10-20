import logo from './logo.svg';
import './App.css';

import Portfolio from './components/Portfolio'

function App() {
  const portfolioLinks = [
    {
        title: "Mad At Sam",
        image: "http://www.joecjimenez.com/v6/images/mas.jpg"
      },
      {
        title: "Malevolence Rec",
        image: "http://joecjimenez.com/v6/images/ml.jpg"
      },
      {
        title: "Heathen",
        image: "http://joecjimenez.com/v6/images/heathen.jpg"
      },
      {
        title: "Artcore Const",
        image: "http://joecjimenez.com/v6/images/artcore.jpg"
      },
      {
        title: "OICW",
        image: "http://joecjimenez.com/v6/images/oicw.jpg"
      },
      {
        title: "California Kings",
        image: "http://joecjimenez.com/v6/images/ck.jpg"
      }            
  ]

  return (
    
    <div className="App">
 <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">JJ Designs</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
          </li>

                <li className="nav-item social">
          <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/joecjimenez/" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </li>
          
        <li className="nav-item social">
          <a className="nav-link" target="_blank" href="https://www.behance.net/JoeJimenez" title="Behance"><i className="fab fa-behance-square"></i></a>
        </li>
          
        <li className="nav-item social">
          <a className="nav-link" target="_blank" href="https://github.com/joe-jimenez" title="GitHub"><i className="fab fa-github-square"></i></a>
        </li>          
          
        <li className="nav-item social">
          <a className="nav-link" target="_blank" href="https://stackoverflow.com/users/11933486/joezilla" title="Stack Overflow"><i className="fab fa-stack-overflow"></i></a>
        </li>
          
          
            <li className="nav-item social">
          <a className="nav-link" target="_blank" href="https://codepen.io/joezilla" title="CodePen"><i className="fab fa-codepen"></i></a>
        </li>      

        <li className="nav-item social">
          <a className="nav-link" target="_blank" href="mailto:joecjimenez@comcast.net" title="Email Me"><i className="fas fa-envelope-square"></i></a>
        </li>
  
          
          
          </ul>
      </div>
    </div>
  </nav>

  
  <header id="header" className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column showcase-top">

      
      <img className="masthead-avatar mb-5 showcase-top" src="jj-chibi.jpg" alt="JJ Logo" />

      <h1 className="masthead-heading text-uppercase mb-0">Joe Jimenez</h1>

      
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      
      <p className="masthead-subheading font-weight-light mb-0 text-left">
          // Web/UI/UX Designer<br />
          // Front-End Web Developer<br />
          // Coder<br />
          // Musician<br />
            // Gamer <br />
            // Baker <br/>
</p>

    </div>
  </header>

  

<Portfolio portfolioLinks={portfolioLinks}></Portfolio>


  
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">

      
      <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

        
        
<section className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper">
        <a href="#carousel__slide4"
           className="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           className="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide1"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide2"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide3"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         className="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <a href="#carousel__slide1"
           className="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide2"
           className="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide3"
           className="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide4"
           className="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>        
        
      
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      
      <div className="row">
        <div className="col-lg-4 ml-auto">
          <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-lg-4 mr-auto">
          <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>

      
      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
          <i className="fas fa-download mr-2"></i>
          Free Download!
        </a>
      </div>

    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">

      
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

      
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      


    </div>
  </section>

  
  <footer className="footer text-center">
    <div className="container">
      <div className="row">

        
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Location</h4>
          <p className="lead mb-0">San Francisco Bay Area
</p>
        </div>

        
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Around the Web</h4>
          <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/joecjimenez/" title="LinkedIn">
            <i className="fab fa-fw fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://www.behance.net/JoeJimenez" title="Behance">
            <i className="fab fa-fw ab fa-behance"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/joe-jimenez" title="GitHub">
            <i className="fab fa-fw fa-github"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://stackoverflow.com/users/11933486/joezilla" title="Stack Overflow">
            <i className="fab fa-fw fa-stack-overflow"></i>
          </a>

          <a className="btn btn-outline-light btn-social mx-1" href="https://codepen.io/joezilla" title="CodePen">
            <i className="fab fa-fw fa-codepen"></i>
          </a>
          
          </div>
          
      </div>
    </div>
  </footer>

  
  <section className="copyright py-4 text-center text-white">
    <div className="container">
      <small>&copy; Joe Jimenez 2020. All rights reserved.</small>
    </div>
  </section>

  
  <div className="scroll-to-top d-lg-none position-fixed ">
    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
      <i className="fa fa-chevron-up"></i>
    </a>
  </div>

  

  
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                
                <img className="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="" />
                
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                
                <img className="img-fluid rounded mb-5" src="img/portfolio/cake.png" alt="" />
                
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                
                <img className="img-fluid rounded mb-5" src="img/portfolio/circus.png" alt="" />
                
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                
                <img className="img-fluid rounded mb-5" src="img/portfolio/game.png" alt="" />
                
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                
                <img className="img-fluid rounded mb-5" src="img/portfolio/safe.png" alt="" />
                
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                
                <img className="img-fluid rounded mb-5" src="img/portfolio/submarine.png" alt="" />
                
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}



export default App;
