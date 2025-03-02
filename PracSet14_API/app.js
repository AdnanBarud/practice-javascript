// let API = "https://cat-fact.herokuapp.com/facts"; //not working
let API = "https://catfact.ninja/facts"; 


let getFacts = async () => {
    let response = await fetch(API);
    console.log(response);
    let facts= response.json;
    console.log(facts);
    
}
getFacts();


// let API = "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts";
// let API = "https://catfact.ninja/facts";

// let getFacts = async () => {
//     try {
//         let response = await fetch(API);
//         console.log("Response Status:", response.status); // Logs status (e.g., 200 for success)
        
//         let facts = await response.json(); // Parse JSON data
//         console.log("Facts:", facts); // Log the actual facts
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };

// getFacts();
