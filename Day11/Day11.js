//Day 11: Promises and Async/Await

//Activity 1:UNderstanding Promises

//Task 1:
const myPromise= new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve("Promise resolved after 2 seconds !");

    },2000);
});

myPromise
.then((message)=>{
    console.log("Hello");
})
.catch((error)=>{
    console.log("error");
})

//Task 2:

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This promise will reject after 2 seconds!"));
    }, 2000);
  });
  
  myPromise2
    .catch((error) => {
      console.error(error.message); // "This promise will reject after 2 seconds!"
    });
//Chaining Promises
//task 3:
/*
const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetched user data");
        resolve({ userId: 1, name: "John Doe" });
      }, 1000); // 1 second delay
    });
  };
  
  const fetchUserPosts = (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched posts for user: ${user.name}`);
        resolve([{ postId: 101, title: "Post 1" }, { postId: 102, title: "Post 2" }]);
      }, 1000); // 1 second delay
    });
  };
  
  const fetchPostComments = (post) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched comments for post: ${post.title}`);
        resolve([{ commentId: 1001, content: "Great post!" }, { commentId: 1002, content: "Very informative." }]);
      }, 1000); // 1 second delay
    });
  };
  
  // Chain the promises
  fetchUserData()
    .then((user) => {
      return fetchUserPosts(user);
    })
    .then((posts) => {
      // Assuming we want comments for the first post
      return fetchPostComments(posts[0]);
    })
    .then((comments) => {
      console.log("Comments:", comments);
    })
    .catch((error) => {
      console.error(error);
    });
    */
  

//Activity 3:Using Async/Await
//task 4:
const examplePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise resolved after 2 second!");
      }, 2000); // 2-second delay
    });
  };
  
  // Async function that awaits the promise
  const asyncFunction = async () => {
    try {
      const result = await examplePromise();
      console.log(result); // Logs: "Promise resolved after 2 seconds!"
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  // Call the async function
  asyncFunction();

  // task 5:
  const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected promise msg");
    }, 2000);
  });
  
  const myfun = async () => {
    try {
      const ans = await myPromise4; 
      console.log(ans);
    } catch (error) {
      console.error(error); // This will log: "rejected promise msg"
    }
  };
  
  myfun();
  //Activity 4:
  //task 6:
  const apiKey = 'ad80d84778f0cf5c625cb210b95e4b76'; // Replace with your actual OpenWeatherMap API key
  const city = 'Patna'; // City name should be a string

   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
  .then(response =>{
     if(!response.ok){
        throw new Error('nework response was not ok'+response.statusText);
     }
     return response.json();
  })
  .then((data)=>{
    console.log('Response data:',data);
  })
  .catch((error)=>{
    console.error('There was a problem with the fetch operation:',error);
  });

  //task 7:
  
// Async function to fetch and log weather data
console.log("data fetch using async function:");
const fetchWeatherData = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Log the weather data to the console
    console.log('Weather data for Patna:', data);
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  }
};

// Call the async function
fetchWeatherData();

//Activty 5: Concurrent Promises
//task 8:
// Simulate fetching data from multiple sources with promises
const fetchDataFromSource1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source 1');
      }, 1000); // 1-second delay
    });
  };
  
  const fetchDataFromSource2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source 2');
      }, 1500); // 1.5-second delay
    });
  };
  
  const fetchDataFromSource3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source 3');
      }, 500); // 0.5-second delay
    });
  };
  
  // Array of promises to fetch data
  const promises = [
    fetchDataFromSource1(),
    fetchDataFromSource2(),
    fetchDataFromSource3()
  ];
  
  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises)
    .then(results => {
      // Log the results of all promises
      console.log('Results:', results);
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch operations
      console.error('There was a problem with the fetch operations:', error);
    });
  

    //task 9:
    // Simulate fetching data from multiple sources with promises
const fetchDataFromSource_1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source 1');
      }, 2000); // 2-second delay
    });
  };
  
  const fetchDataFromSource_2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source 2');
      }, 1000); // 1-second delay
    });
  };
  
  const fetchDataFromSource_3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source 3');
      }, 1500); // 1.5-second delay
    });
  };
  
  // Array of promises to fetch data
  const Promises2 = [
    fetchDataFromSource_1(),
    fetchDataFromSource_2(),
    fetchDataFromSource_3()
  ];
  
  // Use Promise.race to get the result of the first resolved promise
  Promise.race(Promises2)
    .then(result => {
      // Log the result of the first resolved promise
      console.log('First resolved promise result:', result);
    })
    .catch(error => {
      // Handle any errors that occurred
      console.error('There was a problem with the promise:', error);
    });
  




    
  
  