import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


import axios from "axios";

axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2e3669c1f18a6840304c7736fc043246"
).then(function (response){ 

    const genres_obj = {};
    response.data.genres.forEach(element => {
        //console.log(element.id);
        genres_obj[element.id]=element.name;
    });

    ReactDOM.render(<App genres_data={genres_obj} />, document.getElementById("potato"));

})



