import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import Saved from "./Saved";

class Home extends Component {

    render () {
        return (
            <div className="App">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
                </div>

                <Search />;
                <Results />;
                <Saved />;   
            </div>
        );
    }
}

export default Home;