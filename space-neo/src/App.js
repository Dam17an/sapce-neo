import Hero from './Components/Hero/Hero.jsx';
import Crew from './Components/Crew/Crew.jsx';
import Launch from './Components/Launch/Launch.jsx';
import ArticlesSection from "./Components/ArticleSection/ArticleSection";

function App() {
    return (
        <div className="App">
            <Hero />
            <Crew />
            <Launch />
            <ArticlesSection />
        </div>
    );
}

export default App;