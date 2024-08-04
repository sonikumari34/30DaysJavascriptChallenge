// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. 
        // Retrieve and parse the object, then log it.

        const info = {
            name: "sahil",
            education: "enter",
            age: 16,
            bdy: "2March"
        };

        // Save the object to sessionStorage
        sessionStorage.setItem('infokey', JSON.stringify(info));

        // Retrieve the object from sessionStorage
        const hisData = sessionStorage.getItem('infokey');

        // Parse the JSON string back to an object
        const clientData = JSON.parse(hisData);

        // Log the parsed object
        console.log("My client data:", clientData);