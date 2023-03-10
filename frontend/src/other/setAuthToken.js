import axios from 'axios';

export const setAuthToken = accessToken => {
    if (accessToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}
