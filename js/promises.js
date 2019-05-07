
//Long way\\

// const wait = (number) => {
//     return new Promise( (res) => {
//         setTimeout(function(){
//             res();
//         }, number);
//     })
// };


//Short Way\\

// function wait(num) {
//     return new Promise((res) => setTimeout(res, num));
// }
// console.log(wait());
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//====================================\\




// //=====================================\\

// //Getting Username\\

$('#btn').click(function () {
    let input = $('#user').val();
    console.log(input);
    // return input;

//Variables for API Call\\
        let username = input;

        const getDateOfMostRecentCommit = (username) => {
            const token = ipaTig;
            const baseGitHubUrl = 'https://api.github.com';
            const endpoint = `/users/${username}/events`;
            const options = {
                headers: {
                    "Authorization": `token ${token}`
                }
            };
            return fetch(baseGitHubUrl + endpoint, options)
            // parse response into JSON
                .then(res => res.json())

                // return most recent push event
                .then((events) => {
                    return events.find(event => event.type === "PushEvent");
                })

                // return most recent commit from the event
                .then(event => {
                    return event.payload.commits.reverse()[0];
                })

                // fetch details about most recent commit
                .then(commit => {
                    return fetch(commit.url);
                })

                // parse response into JSON
                .then(res => res.json())

                // return the specific date
                .then(commitDetails => {
                    return new Date(commitDetails.commit.author.date).toDateString();
                })
        };

        getDateOfMostRecentCommit(username)
            .then(console.log)
            .catch(console.log);
});
