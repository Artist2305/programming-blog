---
id: "0002"
slug:  "why-media-queries-run-at-wrong-width"
title: "Why media queries run at wrong width?"
keywords: "css, responsiveness, media query, creen, width"
shortDesc: "Web developer problem. The solution is simpler than it sounds."
tags: "Css, Web Development"
description: "Why media queries run at wrong width. Problem with width and height of browser."
date: "22 February 2021"
postImage: ../posts/post_2.svg
featuredImage: ../posts/dragonball.jpg
author: "Mateusz Szostek"
cardColor: "#ffb3b3"
firstRelatedTopic: "1"
secondRelatedTopic: "2"
thirdRelatedTopic: "0"
---

Once upon a time, while creating one of the websites, I encountered an irritating problem. When trying to create a responsive container, I noticed that media queries turn on with different width and height values than I specified. The solution turned out to be very simple.

---

If you've run into a similar problem, don't worry! Probably each of us has encountered this obstacle. The most common reason for this is a zoom in a web browser other than 100%. If you have zooming in or out on, most likely your media query is behaving in a strange way. The solution is simply to set the zoom to 100%.

---

To prevent this from happening in the future, you might consider defining media query in relative units like 'em' or 'rem' rather than px.

---
---
---
*Written by Mateusz Szostek*