import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyFooter from "./Components/MyFooter";
import MyNavBar from "./Components/MyNavBar";
import TvShowsBar from "./Components/TvShowsBar";
import TrendingNow from "./Components/TrendingNow";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className=" d-flex flex-column min-vh-100  bg-dark">
      <header>
        <MyNavBar />
        <TvShowsBar/>
        <TrendingNow search="Bleach" categoria="Trending now"/>
        <TrendingNow search="Breaking bad" categoria="Watch it Again"/>
        <TrendingNow search="Family Guy" categoria="New Release"/>
      </header>
      <main className=" flex-grow-1"></main>
      <footer className="bg-dark text-light py-2">
        <MyFooter />
        {/* <Settings/> */}
        <Profile/>
      </footer>
    </div>
  );
}

export default App;
