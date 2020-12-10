//Deze opdracht heb ik incompleet ingeleverd!!

//Van alle modules vind ik deze over API’s de moeilijkste. 
//Ondanks dat ik alle items van de module heb afgemaakt, 
//meerdere keren naar de video’s heb gekeken en zelf meer 
//informatie via Google heb opgezocht, heb ik nog steeds 
//het idee dat ik het niet echt goed begrijp. Nu ik er al 
//zo lang mee bezig ben, zie ik het niet goed meer, ook 
//al bevindt de oplossing zich waarschijnlijk recht voor
// mijn neus. 
//Ik vind het zelfs moeilijk om via Slack uit te leggen 
//wat het probleem is. Ik snap wat ik in theorie met de 
//verschillende request moet doen (GET, POST, enz) maar 
//als ik de functies probeer te bouwen, dan raak ik de 
//weg kwijt en krijg ik allerlei foutmeldingen (“not 
//possible to fetch”). 

//De koppeling tussen mijn form (de app) en de JSONBox 
//vind ik om de een of andere reden moeilijk te maken. 
//Als jullie naar mijn opdracht willen kijken zoals hij nu is, en mij hopelijk wat extra informatie en/of voorbeelden kunnen geven (ik leer vooral door observatie), dan waardeer ik dat enorm!

//Ik ga in de tussentijd verder met de volgende module. 
//Dan kan ik even iets anders doen, wat afstand van de 
//API nemen, en met een frisse blik terug keren. 

const api_url = "https://jsonbox.io/box_68a94425dbec9bfb4f5b";


const getListItems = async () => {
    try {
    const response = await fetch(api_url);
    const data = await response.json();
    const items = Object.keys(data).map(key => ({
        id: key,
        description: data[key].description,
        done: data[key].done
    }))
    return items;

    } catch(error) {
    console.log(`Something went wrong: ${error}`)
    }
};

const fetchListItems = async () => {
    const result = await getListItems();
    return result;
};

fetchListItems();



// template of POST resquest with fetch taken from MDN docs

async function postData(api_url, items = {}) {
    const response = await fetch(api_url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(items) 
    });
    return response.json(); 
  }

 
  
 

