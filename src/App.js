import React from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";

import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
// import SearchResults from "./SearchResults";
// import SearchButton from "./SearchButton";

const App = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <SearchResults /> */}
      {/* <SearchButton /> */}
      <Footer contact={contactDetails} />
    </div>
  );
};
export default App;
