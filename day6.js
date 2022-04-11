//Objects
let Student = {
    Kavya : 90,
    Krithika : 95,
    Varnika : 100,
    roll : [1,2,3],
    grade : "A"
}
console.log(Student)
console.log(typeof Student) //object

//Convert JS object to JSON - JavaScript Object Notation
console.log(JSON.stringify(Student))
console.log(typeof JSON.stringify(Student)) //string

//Convert JSON to JS object
console.log(JSON.parse('{"Kavya":90,"Krithika":95,"Varnika":100,"roll":[1,2,3],"grade":"A"}'))
console.log(typeof JSON.parse('{"Kavya":90,"Krithika":95,"Varnika":100,"roll":[1,2,3],"grade":"A"}')) //object

//Object methods
console.log(Object.keys(Student));
console.log(Object.values(Student));

//Different for loops with objects

//1. for in loop

for ( var key in Student)
{
    console.log(key,"-",Student[key])
}

//2. for of loop
for (var key of Object.keys(Student))
{
    console.log(key,"-",Student[key])
}

//box and dot syntax
console.log(Student.Kavya);
console.log(Student["Kavya"]);//sinle or double quotes

const getCountries = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json";
    xhr.onload = () =>{
        const countries = xhr.response;
        const countryNames = countries.
        map((country)=>country.languages)
        console.log(countryNames)
    }
}
getCountries();