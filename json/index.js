// const jsonNames = `["Awais", "Akram", "Hamza", "Nisar"]`;
// const jsonPerson = `{"name": "Awais", "age": 25, "city": "Okara", "isEmployed": true, "hobbies": ["Coding", "Gamers", "Book Reading"]}`;
// const jsonPeople = `[{"name": "Awais", "age": 25, "isEmployed": true},
//                     {"name": "Akram", "age": 25, "isEmployed": false},
//                     {"name": "Hamza", "age": 25, "isEmployed": true},
//                     { "name": "Nisar", "age": 25, "isEmployed": false}]`;



// const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData);
// const jsonString = JSON.stringify(people);

// console.log(jsonString);


// fetch("person.json").then(response => response.json().then(value => {console.log(value)}));
// fetch("names.json").then(response => response.json().then(value => {console.log(value)}));
// fetch("people.json").then(response => response.json().then(value => {console.log(value)}));

fetch("people.json").then(response => response.json()
                    .then(values => values.forEach(value => console.log(value.isEmployed))))
                    .catch(error => console.error(error));