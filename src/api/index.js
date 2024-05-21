
import axios from 'axios';

// CRUD
/*
 C - Create
 R - Read
 U - update
 D - delete
*/


// Получение постов
async function getPosts(limit, page) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        let data = response.data;
        let xTotalCount = +response.headers['x-total-count'];
        return { data, xTotalCount };
    } catch (err) {
        console.error(`api/index.js: getPosts  => ${err}`);
    }
}

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
}