import { MAPBOX_TOKEN } from '../constants';

function getDirections(latitude1, longitude1, latitude2, longitude2) {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${latitude1},${longitude1};${latitude2},${longitude2}.json?access_token=${MAPBOX_TOKEN}`;

    return fetch(url)
        .then(response => response.json());
}

export {
    getDirections
}