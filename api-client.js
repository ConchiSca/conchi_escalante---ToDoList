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

 
  
 

