

export class Country {
    name:String;
    alpha2Code:String;
    alpha3Code:String;
    capital:String;
    region:String;
    subregion:String;
    population:number;
    demonym:String;
    area:number;
    gini:number;
    timezones:[
        Date
    ]
    currencies: [
        {
            code:number;
            name:String;
            symbol:String;
        }
    ]
}

