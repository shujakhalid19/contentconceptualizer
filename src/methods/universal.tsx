import { API_URL,API_HOST } from "@env";

interface newobjtype{
    method:string,
    headers:{ [key: string]: string; }
}

class Operations{
    details:any =async (title:string[]) =>{
        const options:newobjtype = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_URL,
                'X-RapidAPI-Host': API_HOST
            }
        };
          var req=await fetch('https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US', options);
          var res= await req.json();
          var titles:(string[])=[];
          await res.map((s:string,i:number)=>{
              var str=s.split('/')[2];
              titles.push(str);
          })
          return titles;
    }
    explorer:any=async()=>{
        const options:newobjtype = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_URL,
                'X-RapidAPI-Host': API_HOST
            }
        };
          var req=await fetch('https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=25', options);
          var res= await req.json();
          return res;
    }

}

export const {
    explorer
}=new Operations();
