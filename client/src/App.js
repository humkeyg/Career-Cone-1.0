import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/pages/Dashboard";
import Jobs from "./components/pages/Jobs";
import Saved from "./components/pages/Saved";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "graphql",
  options: {
    reconnect: true
  }
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  console.log(httpLink);
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />

          <Route exact path="/Navigation" element={<Navbar />} />

          <Route exact path="/Jobs" element={<Jobs />} />

          <Route exact path="/Saved" element={<Saved />} />

          <Route exact path="/About" element={<About />} />

          <Route exact path="/Login" element={<Login />} />

          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
export default App;
