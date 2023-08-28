import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer rObgaQuSnMC83WNStpLkqmDrDJjnEO_2G66PN3g65huDXFj9bW_GYIOtv0i3PqyERoYFgOqshftVeu71tea6ccTW3jnjgQEBkKfmEqDJorGf4ZRQiqHG72AzJTXrZHYx'
    },
})