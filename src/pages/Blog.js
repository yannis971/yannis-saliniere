import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../theme/assets/img/post-bg.jpg';

function Blog() {

  const header = { title: "Yannis Saliniere", 
                   subtitle: "Développeur d'application Python",
                   style: { backgroundImage: `url(${background})` } }

  return (
    <div className="App">
      <Header header = {header}/>
        <div className="container text-dark mt-5">
          <div className="row justify-content-md-center">
            <div className="col-md-5 p-3">
              <h1 className="text-center">Blog is under construction</h1>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Blog;