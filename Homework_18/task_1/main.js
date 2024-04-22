"use strict"

const BASE_URL = 'https://jsonplaceholder.typicode.com'

fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
   // .then(json => console.log(json.map(item => item.title)))


fetch(`${BASE_URL}/comments`)
    .then(response => response.json())
    //.then(json => console.log(json.map(item => item.body)))


async function getUser (url){
    try{
        const response = await fetch(url)
        const users = await response.json();
        const userDetails = users.map(user => ({
            name: user.name,
            email: user.email
        }));
        console.log("User Details:", userDetails);
    } catch(error){
        console.error(error.massage)
    }
}
getUser(`${BASE_URL}/users`)


async function doPost (url){
    try{
        const response = await fetch(url)
        const posts  = await response.json()

        const postDetails = posts.map(post => ({
            id: post.id,
            title: post.title
        }));
        //console.log("Post Details:", postDetails);

    } catch(error){
        console.error(error.massage)
    }
}
doPost(`${BASE_URL}/posts`)
