import { getCountries, getCities } from "../services/countries.service";

class Locations {
  constructor() {
    this.countries = null;
    this.countriesAutocompleteList = null;
    this.citiesAutocompleteList = null;
  }
  async init() {
    this.countries = await getCountries();
    this.countriesAutocompleteList = this.serializeCountries(this.countries);
  }
  serializeCountries(countries) {
    return Object.values(countries).reduce((acc, val) => {
      acc.push(val);
      return acc;
    }, []);
  }
  async getCitiesByIndex(index) {
    this.citiesAutocompleteList = await getCities(index);
  }
  getIndexByCountryName(country) {
    return Object.keys(this.countries).find((key) => {
      return this.countries[key] === country;
    });
  }
}

const locations = new Locations();

export default locations;
