import React from 'react';
import axios from 'axios';

class AxiosAcess {
    constructor(tenantId) {
        this.urlAcess = "http://localhost:50178/api/";
        this.TenantId = tenantId;
        this.headers = {"Content-Type":"application/json" ,headers: {'TenantId': tenantId}};
    }
    
    get(endUrL) {
        return axios.get(this.urlAcess + endUrL , this.headers);
    }
    
    
    async post(endUrL,postContent) {
        const response = await axios.post(this.urlAcess + endUrL , postContent,{ 'headers': { 'TenantId': this.TenantId } });
        return response.data;
    }

    async delete(endUrL) {
        const response = await axios.delete(this.urlAcess + endUrL,{ 'headers': { 'TenantId': this.TenantId } });
        return response.data;

    };

    async  delete(endUrL) {
        const response = await axios.delete(this.urlAcess + endUrL,{ 'headers': { 'TenantId': this.TenantId } });
        return response.data;
    };
}
 export default AxiosAcess;
