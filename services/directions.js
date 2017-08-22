const GOOGLE_MAPS_TOKEN = 'AIzaSyC1uHb7thj_S1WNBQMaWkX-Wasao15-tNQ';

function getDirections(latitude1, longitude1, latitude2, longitude2) {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${latitude1},${longitude1}&destination=${latitude2},${longitude2}&key=${GOOGLE_MAPS_TOKEN}&mode=walking`;

    return fetch(url)
        .then(response => response.json());
}

function getGoogleMapsToken() {
    return GOOGLE_MAPS_TOKEN;
}

export {
    getDirections,
    getGoogleMapsToken
}