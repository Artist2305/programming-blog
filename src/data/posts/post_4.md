---
id: "0004"
slug:  "how-to-add-and access-env-in-React"
title: "How to add and access .env in React?"
keywords: "programming, tips, tutorial, variable, env, environmental, react, javascript, js, access, add, how, to"
shortDesc: "Short tip how to manage environmental variable"
tags: "React"
description: "Learn how create and use environmental variables. Tutorial about how to manage environmental variables."
date: "22 Feb 2021"
postImage: ../posts/post_4.svg
featuredImage: ../posts/dragonball.jpg
author: "Mateusz Szostek"
cardColor: "#d5aae6"
firstRelatedTopic: "1"
secondRelatedTopic: "2"
thirdRelatedTopic: "0"

---

By default, we should not store any secrets (such as API key) in the React application. Fortunately, environmental variables can help. In this post, we'll briefly explain how to create and read them.

---
---
---

#### How to create environmental variables in React app.
---
Let's start from the beginning. The first step you should do is run the following command:

```bash
npm install dotenv --save
```

---
You have installed a package that will allow you to load the environment variables from a .env file into process.env. Then add the following code lines to your application:

---

```javascript
require('dotenv').config()
```

---
Then create a .env file at the root directory of your application and add the variables to it. For example:

---
```javascript
REACT_APP_EXAMPLE_API_KEY = 'my-secret-example-api-key'
```
---
At the very end, don't forget to add .env to your .gitignore file so that they never end up in the GIT repository.

---
---
---

#### How to create environmental variables in React app.

---
To use environment variables, use the *process* variable. How to do this is shown in the example below:

---
```javascript
  console.log(process.env.EXAMPLE_API_KEY).
```
---
Remember to make sure that you are not trying to read the object itself because it will always return an empty object. Additionally, your .env file should be in the following location:

---
```javasctipt
.env.development
.env.production
src/
  pages/
    index.js
```
---
Finally, remember to reset the server when you've added the .env file.

---
---
---
*Written by Mateusz Szostek*

---
---
---