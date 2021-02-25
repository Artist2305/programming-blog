---
id: "0003"
slug:  "how-to-update-all-node-dependencies"
title: "How to update all Node dependencies?"
keywords: "node, dependencies, update, versions, "
shortDesc: "Are your dependecies out of date? There is a simple way to safetly update all."
tags: "Node.js"
description: "Learn step by step how to update all dependencies. Simple way to update all Node.js dependencies."
date: "03 February 2021"
postImage: ../posts/post_3.svg
featuredImage: ../posts/dragonball.jpg
author: "Mateusz Szostek"
cardColor: "#b3ffb3"
firstRelatedTopic: "1"
secondRelatedTopic: "2"
thirdRelatedTopic: "0"

---

Let's explain how to update all npm dependencies contained in package.json to their current version.

---
When you install a package with npm install "packagename", npm the last possible version of the package and its dependecies are downloaded and placed in the node_modules folder. Let's assume that we want to install a new package named "awesome-package". The first thing we need to do is use the command:

```BASH
npm install awesome-package
```

You should see a new entry in the package.json and package-lock.json files.
The package.json should contain such an entry:
```JS
{
  "dependencies": {
    "awesome-package": "^1.2.3"
  }
}
```
The version of the package may differ depending on what you are trying to install. Both files inform us that we can install all minor changes in versions, i.e. forms 1.2.3 to 1.2.4, 1.3.0 etc. However, we cannot install major updates because they cause breaking changes, for example 2.0.0 and higher.

---

If there is a new minor version of awesome-package we can use the command:

```BASH
  npm update
```

As a result, package-lock.json will be updated to a newer version and package.json will remain unchanged.

---

Now let's talk about installing major changes. To check for new versions possible to install we use:

```BASH
  npm outdated
```
The result is a list of packages possible to install major changes.
To update new major versions type command bellow globally:
```BASH
  npm install -g npm-check-updates
```
And then run it:
```BASH
  ncu -u
```

Finaly you are ready to run the update

```BASH
  npm update
```

If you just downloaded the project without the node_modules dependencies and you want to install the shiny new versions first, just run:

```BASH
  npm install
```

---
---
---

*Written by Mateusz Szostek*