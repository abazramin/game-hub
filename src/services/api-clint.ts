import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '06686670f4ca4045962ccde4589fcfb1'
    }
})