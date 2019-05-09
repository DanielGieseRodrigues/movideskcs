import React from 'react';
import axios from 'axios';

class AxiosAcess {
    constructor() {
        this.urlAcess = "EndPoint.backend/2424/";
    }
    
    get(endUrL) {
        const response = await axios.get(urlAcess + endUrL);
        return response.data;
        }
    
    
    post(endUrL,postContent) {
        const response = await axios.post(urlAcess + endUrL , postContent);
        return response.data;
    }

    delete(endUrL) {
        const response = await axios.delete(urlAcess + endUrL);
        return response.data;

    };

    delete(endUrL) {
        const response = await axios.delete(urlAcess + endUrL);
        return response.data;
    };
}