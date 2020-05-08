// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


//const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
//followersArray.forEach(friend => {
  axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
      const dataFriend = response.data;
      const cards = document.querySelector('.cards');
      const card = cardMaker(dataFriend);
      cards.appendChild(card);
    })

    .catch(error => {
        console.log('Get data failed');
      })
      .finally(() => {
        console.log('done');
      })
//});