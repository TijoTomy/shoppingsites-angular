import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  productlist:any=[
    {
      name:"Air-jordan 4",
      price:"100",
      source:"/assets/airjordan-4.png",
      description:"The Spizike takes elements of five classic Jordans, combines them and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great-looking pair of kicks with some history. What more can you ask for? Ya dig?",
      color:"grey",
      countryoforgin:"India"
    },
    {
      name:"Air-jordan 1 mid",
      price:"80",
      source:"/assets/airjorda1mid.png",
      description:"Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
      color:"white",
      countryoforgin:"India"
    },
    {
      name:"Air-jordan 1 low",
      price:"80",
      source:"/assets/airjordan1low.png",
      description:"Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
      color:"white",
      countryoforgin:"India"
    },
    {
      name:"jordan 4 rm",
      price:"90",
      source:"/assets/jordan4rm.png",
      description:"Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
      color:"black",
      countryoforgin:"India"
    },
    {
      name:"jordan mvp",
      price:"80",
      source:"/assets/jordanmvp.png",
      description:"Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
      color:"white",
      countryoforgin:"India"
    },
    {
      name:"jordan spizikie low",
      price:"80",
      source:"/assets/jordanspizikelow.png",
      description:"Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
      color:"white",
      countryoforgin:"India"
    }
  ]

  constructor() { }
}
