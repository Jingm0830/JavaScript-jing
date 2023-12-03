'use strict'

// document.getElementById('search_result').addEventListener('submit', function (event){
//     event.preventDefault();
document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query= document.getElementById('query').value;
    let keyword = document.querySelector("input[name='q']").value
    const usl = `https://api.tvmaze.com/search/shows?q=${keyword}`
    try{
        let response = await fetch(usl)
        let json_data = await response.json()
        console.log(json_data)
    }catch (error){
        console.log(error.messag);
    }
})