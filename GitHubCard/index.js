/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const githubURL = 'https://api.github.com/users/losephjambert';
// axios
//   .get(githubURL)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(`there was a problem requesting ${githubURL}`, err);
//   });

const stubbedResponse = {
  data: {
    login: 'losephjambert',
    id: 16310372,
    node_id: 'MDQ6VXNlcjE2MzEwMzcy',
    avatar_url: 'https://avatars1.githubusercontent.com/u/16310372?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/losephjambert',
    html_url: 'https://github.com/losephjambert',
    followers_url: 'https://api.github.com/users/losephjambert/followers',
    following_url: 'https://api.github.com/users/losephjambert/following{/other_user}',
    gists_url: 'https://api.github.com/users/losephjambert/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/losephjambert/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/losephjambert/subscriptions',
    organizations_url: 'https://api.github.com/users/losephjambert/orgs',
    repos_url: 'https://api.github.com/users/losephjambert/repos',
    events_url: 'https://api.github.com/users/losephjambert/events{/privacy}',
    received_events_url: 'https://api.github.com/users/losephjambert/received_events',
    type: 'User',
    site_admin: false,
    name: 'Joseph Lambert',
    company: 'freelance',
    blog: 'twitter.com/losephjambert',
    location: 'Seattle, WA',
    email: null,
    hireable: null,
    bio: 'www things\r\nwww people',
    public_repos: 32,
    public_gists: 0,
    followers: 6,
    following: 2,
    created_at: '2015-12-15T18:44:43Z',
    updated_at: '2019-07-29T15:02:03Z',
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'cache-control': 'public, max-age=60, s-maxage=60',
    'content-type': 'application/json; charset=utf-8',
    etag: 'W/"c67da2d7b5b6566fa882e049a43a1261"',
    'last-modified': 'Mon, 29 Jul 2019 15:02:03 GMT',
    'x-github-media-type': 'github.v3',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '59',
    'x-ratelimit-reset': '1567719492',
  },
  config: {
    url: 'https://api.github.com/users/losephjambert',
    method: 'get',
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
  },
  request: {},
};

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

const root = document.querySelector('.cards');
const user = UserCard(stubbedResponse.data);

root.appendChild(user);

// /* Step 5: Now that you have your own card getting added to the DOM, either
//           follow this link in your browser https://api.github.com/users/<Your github name>/followers
//           , manually find some other users' github handles, or use the list found
//           at the bottom of the page. Get at least 5 different Github usernames and add them as
//           Individual strings to the friendsArray below.

//           Using that array, iterate over it, requesting data for each user, creating a new card for each
//           user, and adding that card to the DOM.
// */

// const followersArray = [];

// /* Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

// */
function createElement(type, classes = null, id = null) {
  const element = document.createElement(type);

  classes !== null && element.classList.add(...classes);
  id !== null && element.setAttribute('id', id);

  return element;
}

function UserCard(data) {
  // create elements
  const card = createElement('div', ['card']),
    profileImg = document.createElement('img'),
    cardInfo = createElement('div', ['card-info']),
    cardName = createElement('h3', ['name']),
    username = createElement('p', ['username']),
    userLocation = document.createElement('p'),
    profile = document.createElement('p'),
    profileURL = document.createElement('a'),
    followersCount = document.createElement('p'),
    followingCount = document.createElement('p'),
    userBio = document.createElement('p');

  // create structure
  card.append(profileImg, cardInfo);
  cardInfo.append(cardName, username, userLocation, profile, followersCount, followingCount, userBio);
  profile.appendChild(profileURL);

  // add content
  const { login, avatar_url, html_url, name, location, bio, followers, following } = data;
  profileImg.src = avatar_url;
  cardName.textContent = name;
  username.textContent = login;
  userLocation.textContent = location;
  profileURL.href = html_url;
  profileURL.textContent = html_url;
  followersCount.textContent = followers;
  followingCount.textContent = following;
  userBio.textContent = bio;

  console.log(card);
  return card;
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
