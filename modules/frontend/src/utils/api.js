//Library to make http calls
import axios from 'axios';

import { API_BASE_URL } from '../config';

// //API call to get images
export const getImages =  () =>
    axios.get(`${API_BASE_URL}/api/image`);

export const getImageById =  (id) =>
    axios.get(`${API_BASE_URL}/api/image/${id}`);

export const uploadImage =  (payload) =>
    axios.post(`${API_BASE_URL}/api/image`, payload, {
        headers: {
                'Content-Type': 'multipart/form-data'
        }
    });

export const createAnnotation =  (payload) =>
    axios.post(`${API_BASE_URL}/api/annotation`,payload);

export const removeAnnotation =  (id) =>
    axios.delete(`${API_BASE_URL}/api/annotation/${id}`);