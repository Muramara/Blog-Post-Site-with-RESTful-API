# Website Description
On a front-end perspective, the website allows the user to make a post, edit it and also delete, as well as view all the posts that have been made.

## 1.1 Files
### 1.1.1 Backend
**index.js**:

This file holds a local RESTful API that holds the data and handles any requests for the data.

The supported requests to the API are *GET*, which returns all posts held, *POST*, whcih

handles adding new posts, *PATCH*, which handles editing specific posts, and *DELETE*,

which handles deleting specific posts.

**server.js**:

This file is linked to the website and its main responsibility is to communicate the requests 

of the website to the API. It also handles website navigation.


### 1.1.2 Front-end
**index.ejs**

This file displays the main page of the website, where all the posts are listed on their own 'cards' individual cards.



The **make new post** button redirects the user to the post page, where they should be able to create new posts. 

The **edit** button redirects the user to the edit page where they are able to edit the post. The **delete** button 

deletes that specific post on the card.
