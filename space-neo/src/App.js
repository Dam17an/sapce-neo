import Hero from './Components/Hero/Hero.jsx';
import Crew from './Components/Crew/Crew.jsx';
import Launch from './Components/Launch/Launch.jsx';
import ArticlesSection from "./Components/ArticleSection/ArticleSection";
import Faq from './Components/Faq/Faq.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
    return (
        <div className="App">
            <Hero />
            <Crew />
            <Launch />
            <ArticlesSection />
            <Faq />
            <Footer />
        </div>
    );
}

export default App;