// TODO: inject key via ENV
import {GOOGLE_API_KEY} from '../google-api-key';
const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

class GeoService {
    async getState(address = '') {
        return fetch(`${GOOGLE_GEOCODE_URL}?address=${address}&key=${GOOGLE_API_KEY}`)
            .then(resp => resp.json())
            .then(data => {
                let state = '';
                if (data.results && data.results.length > 0 && data.results[0].address_components) {
                    const stateElement = data.results[0].address_components
                        .find(component => component.types[0] === 'administrative_area_level_1');
                    state = stateElement.long_name;
                }
                return state;
            });
    }

    async addState(contacts = []) {
        const streetAndZip = contacts.map(c => {
            return `${c.zip} ${c.city}`
        })
        const distinctLocations = [...new Set(streetAndZip)];
        const googleAddressInfos = Promise.all(
            distinctLocations.map(address => this.getState(address))
        ).then(states => {
            states.forEach((state, idx) => {
                const source = distinctLocations[idx];
                contacts
                    .filter(c => `${c.zip} ${c.city}` === source)
                    .forEach(c => c.state = state);
            });
            return contacts;
        });

        return googleAddressInfos;
    }
}

// Singlton
export const geoService = new GeoService();