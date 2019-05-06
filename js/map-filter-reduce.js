const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filteredArray = users.filter( ele => ele.languages.length >=3);
console.log(filteredArray);

const mapArray = users.map(email => email.email);
console.log(mapArray);

const years = users.reduce((total, person) => total + person.yearsOfExperience, 0);
console.log(years / users.length);

let longestEmail = users.reduce((longestEmail, user) => user.email.length >= longestEmail.length ? user.email : longestEmail, "");
// if (user.email.length >= longestEmail) {
//     longestEmail = user.email
// }
// return longestEmail;

console.log(longestEmail);


let instructors = users.reduce((sentence, user) =>  //user.id === users.length ?  );
{
    sentence = "Your intructors are: ";
    if (user.id === users.length) {
        return sentence + user.name + ", ";
    } else
        return sentence + user.name + ", ";

});
console.log(instructors);