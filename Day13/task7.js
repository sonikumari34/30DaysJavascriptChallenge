import axios from 'axios';
async function fetchData(){
    try{
       // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const response = await axios.get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

        console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchData();
    
