// TODO: inject key via ENV
const GOOGLE_API_KEY = '';
const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

class GeoService {
    async getState(address = '') {
        return fetch(`${GOOGLE_GEOCODE_URL}?address=${address}&key=${GOOGLE_API_KEY}`)
            .then(resp => resp.json())
            .then(data => data);
    }
}

// Singlton
export const geoService = new GeoService();