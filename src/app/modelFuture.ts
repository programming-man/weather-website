export class ModelFuture{
    public temperature: number;
    public city: string;
    public date: string;
    public description: string;

    constructor(temperature: number, city: string, date: string, description: string){
        this.temperature = temperature;    
        this.city = city;    
        this.date = date;    
        this.description = description;    
    }
}