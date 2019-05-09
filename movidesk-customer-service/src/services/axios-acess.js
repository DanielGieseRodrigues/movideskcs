import React from 'react';
import axios from 'axios';

class AxiosAcess {
    constructor() {
        this.urlAcess = "EndPoint.backend/2424/";
    }
    
    async get(endUrL) {
        const response = await axios.get(this.urlAcess + endUrL);
        return response.data;
        }
    
    
    async post(endUrL,postContent) {
        const response = await axios.post(this.urlAcess + endUrL , postContent);
        return response.data;
    }

    async delete(endUrL) {
        const response = await axios.delete(this.urlAcess + endUrL);
        return response.data;

    };

    async  delete(endUrL) {
        const response = await axios.delete(this.urlAcess + endUrL);
        return response.data;
    };
}
 export default AxiosAcess;