import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
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

// function App() {
//   const [currentPage, setCurrentPage] = useState('Dashboard');

//   const renderPage = () => {
//     if (currentPage === 'Dashboard') {
//       return <Dashboard/>;
//     }
//     if (currentPage === 'Jobs') {
//       return <Jobs/>;
//     }
//     if (currentPage === 'Saved') {
//       return <Saved/>;
//     }
//     if (currentPage === 'About') {
//       return <About/>;
//     }
//   };

//   return (
//     <div className='App'>
//       <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
//       {renderPage()}
//       <Footer/>
//     </div>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
