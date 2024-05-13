
import axios from 'axios';

// CRUD
/*
 C - Create
 R - Read
 U - update
 D - delete
*/

//Получение всех постов
async function getAllPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return response.data;
    } catch (err) {
        console.error(`api/index.js: getAllPosts  => ${err}`);
    }
}

// Получение постов
async function getPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return response.data;
    } catch (err) {
        console.error(`api/index.js: getPosts  => ${err}`);
    }
}

// https://jsonplaceholder.typicode.com/posts/1

async function getPostById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return response.data;
    } catch(err) {
        console.error(`api/index.js: getPostById  => ${err}`);
    }
}

export {
    getPosts,
    getPostById,
    getAllPosts,
}