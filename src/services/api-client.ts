import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '62357e1067324e8dad7613a771f1a133',

    }
})