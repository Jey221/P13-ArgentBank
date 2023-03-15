import Banner from '../components/Home/Banner';
import Feature from '../components/Home/Feature';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <div className="body">
      <Header />
      <main>
        <Banner />
        <Feature />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
