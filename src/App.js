import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Signin from "./Components/Signin";
import SignUp from "./Components/SignUp";
import Row from "./Components/Row";
import requests from "./requests";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    //For DEPLOYMENT
    <>
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </>

    //ACTUAL CODE WITH ROUTING  

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Main />} />
    //     <Route path="/Showcase" element={<>
    //       <Navbar />
    //       <Banner />
    //       <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
    //       <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    //       <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    //       <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
    //       <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    //       <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    //       <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    //       <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    //     </>} />
    //     <Route path="/Signin" element={<Signin />} />
    //     <Route path="/SignUp" element={<SignUp />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
