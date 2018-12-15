import { Injectable } from '@angular/core';

const countryList = ['Malaysia', 'Thailand', 'Vietnam', 'Others'];
const myCityList = ['Kuala Lumpur', 'Penang', 'Johor Baru'];
const thCityList = ['Bangkok', 'Phuket'];
const veCityList = ['Ho Chi Minh', 'Hanoi'];

@Injectable()
export class LocationService {

    constructor() {        
    }

    public getCountryList(): string[] {
        return countryList;
    }

    public getCityList(country: string): string[] {       

        switch(country) {
            case 'Malaysia':
                return myCityList;
            case 'Thailand':
                return thCityList;
            case 'Vietnam':
                return veCityList;
            default:
                return myCityList;
        }
    }
}
