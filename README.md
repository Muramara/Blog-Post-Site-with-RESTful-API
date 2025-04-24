# Website Description
On a front-end perspective, the website allows the user to make a post, edit it and also delete, as well as view all the posts that have been made.

# Files


## Backend
**index.js**:

This file holds a local RESTful API that holds the data and handles any requests for the data.

The supported requests to the API are *GET*, which returns all posts held, *POST*, whcih

handles adding new posts, *PATCH*, which handles editing specific posts, and *DELETE*,

which handles deleting specific posts.

You may access this API locally through **'http//localhost:1304'** after cloning the repository locally.

You may change the **'1304'** in the code to whichever port you prefer.

**server.js**:

This file is linked to the website and its main responsibility is to communicate the requests 

of the website to the local API in **'index.js'**. It also handles website navigation.

## Front-end

The home page, **(index.js)**, displays all the posts, each on their own individual card.

The **make new post** button on the top left corner of the page redirects the user to the post page, **(post.ejs)**, where they should be able to create a new post. 

The **edit** button on the blog post card redirects the user to the edit page, **(edit.ejs)**, where they are able to edit the post.

The **delete** button on the blog post card deletes the post.

# Features

- Create new posts
- Edit existing posts
- Delete existing posts

# Prerequisites

- Node.js (v14 or higher)

# Installation

1. Clone the repository:
```bash
git clone https://github.com/Muramara/Blog-Post-Site-with-RESTful-API.git
cd Blog-Post-Site-with-RESTful-API
```

2. Install dependencies:
```bash
npm install
```

# Usage

1. Start the json API:
```bash
nodemon index.js
```

or

```bash
node index.js
```

2. Start the website API:
```bash
nodemon server.js
```

or

```bash
node server.js
```

# Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b branch-name`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin branch-name`)
5. Open a Pull Request

# Contact Me

**Sebastian Muramara**

X - [@SebastianM21248](https://x.com/SebastianM21248)

Project Link: [Blog-Post-Site-with-RESTful-API](https://github.com/Muramara/Blog-Post-Site-with-RESTful-API)

