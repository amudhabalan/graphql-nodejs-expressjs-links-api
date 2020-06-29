# graphql-nodejs-expressjs-links-api
A GraphQL API that serves different types of links

## Get Started
- Git clone this repository to your local machine and run `npm install`
- Run `node server.js` to run the express server 
- The graphql endpoint will be available at `http://localhost:4000/graphql`

## Instructions
- graphql query to list all the links of a user
```
{
  user(id:"96950daf-6d6c-4670-b549-ae00391df4cd") {
    name
    classicLinks{
      title
      url
      dateCreated
    }
    musicLinks{
      platform
      audioPlayer
      url
      dateCreated
    }
    showLinks{
      venue
      availability
      reason
      date
      url
      dateCreated
    }
  }
}
```
- graphql queries to list all the links of a user sorted by dateCreated. Use a boolean value for the argument `orderByDateCreatedAsc` accordingly
```
{
  user(id:"96950daf-6d6c-4670-b549-ae00391df4cd") {
    name
    classicLinks(orderByDateCreatedAsc: false){
      title
      url
      dateCreated
    }
  }
}
```
```
{
  user(id:"96950daf-6d6c-4670-b549-ae00391df4cd") {
    name
    musicLinks(orderByDateCreatedAsc: true){
      platform
      audioPlayer
      url
      dateCreated
    }
  }
}
```
```
{
  user(id:"96950daf-6d6c-4670-b549-ae00391df4cd") {
    name
    showLinks{
      venue
      availability
      reason
      date
      url
      dateCreated
    }
  }
}
```
- graphql mutation to add links of each type to a user
```
mutation {
  addClassicLink(title:"Instagram", url:"https://www.instagram.com/amud?region=aus", userId: "96950daf-6d6c-4670-b549-ae00391df4cd"){
    title
    url
    user{
      name
    }
  }
}
```
```
mutation {
  addMusicLink(platform:"YouTube", audioPlayer:"https://www.youtube.com/amud?region=aus", url:"https://www.youtube.com/amud?region=aus", userId: "96950daf-6d6c-4670-b549-ae00391df4cd"){
    platform
    audioPlayer
    url
    user{
      name
    }
  }
}
```
```
mutation {
  addShowLink(venue:"Flinders", availability:true, date:"19 Aug 2020",url:"https://www.bookingshows.com", userId: "96950daf-6d6c-4670-b549-ae00391df4cd"){
    venue
    availability
    date
    url
    user{
      name
    }
  }
}
```
