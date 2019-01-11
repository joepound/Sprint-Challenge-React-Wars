# Answers

## 1.  What is React JS and what problems does it try and solve?

React.js is a **Javascript library** for building user interfaces that takes advantage of its ability to render reusable components (pieces of code that can be put together to form scalable web pages and applications).

React.js strives to solve the challenge of **reducing performance load** (basically making DOM operations faster for quicker web content). _A DOM operation in pure Javascript is actually costly when it comes to performance_, and when you interact with a web site that deals with many components (like Facebook, with its various posts, photos, comments and other media), these repeated updates will become noticeable because the performance impact will stack up with such high numbers of objects to load up.

The so-called **"virtual DOM"** in React.js addresses this issue by comparing itself with new DOM updates and then _changing **only** the parts of the UI that are actually affected by the DOM updates_ (this reduces DOM operations and page reloading/refreshing).

**Comparing pure Javascript versus React.js in terms of dealing with the DOM using a car repair analogy:**

Pure Javascript: Your tire is broken. Get a new car.

React.js: Your tire is broken. Virtual DOM tracks this change in your car's state (checks your car) and updates your tire (repairs your tire or gets you a new one).


## 2.  What does it mean to _think_ in react?

To think in React is to firstly think about what you want to make for a web page/app. 

Once you have your app/page pictured out, break that concept into **components** or 'parts' that you can assemble in order to make this page/app (this is tied very closely to the idea of "divide and conquer").


## 3.  Describe state.

A state is a **Javascript object** that is used to _keep track of various states of existence_ (like attributes) for an application or component.

**Comparing state to a temperature reading with a thermometer:**

A person's temperature can increase or decrease from time to time depending on various conditions. This temperature is the basis for what the thermometer will show the person reading it. If a person has a changes in his/her state (becomes hotter or colder) this change will be reflected in the application UI (the thermometer).

Important note: _the state is not the value of the temperature per se (that would be a **prop**); the idea of a temperature itself is a part of the state_. The actual temperature reading (value) is a property value of the state which will be passed down to components as a way to control how these components will behave in rendering the UI.


## 4.  Describe props.

Props (conventional shorthand for **"properties"**) are the individual 'values' of a state, which are passed down to components that will make use of the state. 

Because a state is subject to change and will be rendered again from time to time based on events, props are effectively _the direct values used when components are called_. Props determine what those components will display (like a number, a name display, an object, or even a list of objects).


## 5.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component:
• Handles the logic of the application (and thus would manage the state) -> _this is why it is also referred to as a stateful component_
• Includes minimal markup (just the necessary wrapper tags)
• Passes data directly from inside the state to child components as props (state properties) -> _this is why it is also referred to as a container component_

A functional component:
• Handles the design / look-and-feel of the application -> _this is why it is also referred to as presentational component_
• Usually a child of a stateful container component
• Is the more common type of component among the two - it makes up the majority of most applications