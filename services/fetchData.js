import axios from 'axios';


export const getData = (url) => {
    return axios
            .get(url)
            .then(data => data)
            .catch(err => err)
}

export const postData = (url, data) => {
    return axios
            .post(url, data)
            .then(data => data)
            .catch(err => err)
}

export const updateData = (url, data) => {
    return axios
            .patch(url, data)
            .then(data => data)
            .catch(err => err)
}

export const deleteData = (url, id) => {
    return axios
            .delete(url, id)
            .then(data => data)
            .catch(err => err)
}

  