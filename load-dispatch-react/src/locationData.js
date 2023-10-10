import locations from './biggestCitiesData.json'

const LOCATIONDATA = locations.map((location) => ({
    value: `${location.city}, ${location.state} ${location.zip_code}`,
    label: `${location.city}, ${location.state} ${location.zip_code}`,
}));

export default LOCATIONDATA;
