# stand-alone-setup

### What is the reason behid this project?
I want to show other possibilities of setting up a project with React besides using create-react-app.
Without doubt create-react-app is a really awesome, easy to use and powefull tool, but in my opinion 
we as developers have to know what is happening behind the curtains. 

### Set up
This project will be accomplished with CDN's for React, ReactDOM annd Babel. I have an other project
which does everything from scratch. In that project we will be setting up Webpack(bundler) 
, Gulp(taskrunner) and Babel(transpiler) completely from scratch. 
This way we will be in full control and really get to see what is going on under the hood, without "create-react-app".

### The CDN's which we will be using
Besides the CDN for React and ReactDOM, we will be also using the CDN from Babel.
This way everything will be working in the older browsers and most of all we can not only use  
javascript but  also use jsx.

Paste this just before the end of the body tag:

```HTML
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min .js"></script>
```

In the script link for your javascript file you must add the type so the browser knows whhat to with Babel.
Paste this script link beneath the CDN links.
I named my javascript file App.js so it looks like this:

```HTML
  <script type="text/babel" src="./components/App.js"></script>
```

