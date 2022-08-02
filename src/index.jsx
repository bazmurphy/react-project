// DEFAULT VITE MAIN.JSX

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// ----------

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const navbar = (
//   <nav>
//     <h1>Bob's Bistro</h1>
//     <ul>
//       <li>Menu</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

// OLD WAY
// ReactDOM.render(navbar, document.getElementById("root"))

// NEW WAY Version 18
// ReactDOM.createRoot(document.getElementById("root").render(navbar))

// NEW WAY Version 18 WITH variable then methods on that variable
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)



// const header = (
//   <header>
//     <div>Cell 1</div>
//     <div>Cell 2</div>
//     <div>Cell 3</div>
//     <div>Cell 4</div>
//   </header>
// )

// document.getElementById("root").append(header)

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const page = (
//   <div>
//     <h1>My awesome website in React</h1>
//     <h3>Reasons I love</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's declarative</li>
//       <li>It's a hireable skill</li>
//       <li>It's actively maintained by skilled people</li>
//     </ol>
//   </div>
// )

// this is a test to show what happens if we 
// document.getElementById("root").append(page)
// document.getElementById("root").append(JSON.stringify(page))
// this shows the OBJECT

// ReactDOM.createRoot(document.getElementById('root')).render(page)
// or
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(page)


// CHALLENGE
// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/react.svg";

// const section = (
//   <div>
//     <img src={reactLogo} alt="" width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(section);


// QUIZ
// 1. Why do we need to `import React from "react"` in our files?
// A: So it can intepret the JSX Syntax


// 2. If I were to console.log(page) in index.js, what would show up?
// A: object Object. React elements that describe what React should eventually add to the real DOM for us.


// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// A: There is two sibling elements, there should only be one parent as the outermost element, with everything nested inside it.

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// A: Declarative means we tell the program what to accomplish and it would know how to accomplish the specific step by step details, Whereas Imperative you still need to give it the step by step details.
// Declarative : Can you make me a Peanut Butter and Jelly sandwich.
// Imperative : Describe each step to your friend of how to make the Peanut Butter and Jelly sandwich.


// 5. What does it mean for something to be "composable"?
// A: Create small pieces that you can put together to make a greater whole.
// In Web Development we can create small pieces called Components, and put them together to build the Page.



// Creating our own Custom Components

// a Function is a writing some code that we can execute over and over and over again by calling that Function
// React adopts the same concept. a Function that allows us to create elements over and over again if we want.

// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/react.svg";

// function temporaryName() {
//   return (
//     <div>
//       <img src={reactLogo} alt="" width="40px" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(temporaryName());

// ^^ THIS IS 90% OF THE WORK WE HAVE TO DO TO MAKE A COMPONENT 

// NOW WE JUST NEED TO :

// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/react.svg";

// USE PASCAL CASE FOR THE NAME
// function TemporaryName() {
//   return (
//     <div>
//       <img src={reactLogo} alt="" width="40px" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// CALL THE FUNCTION USING < ComponentName />
// root.render(<TemporaryName />);


// CHALLENGE
// import React from "react";
// import ReactDOM from "react-dom/client";

// function RandomComponentName() {
//   return (
//     <div>
//       <h1>Hello Guys</h1>
//       <ul>
//         <li>I am learning React</li>
//         <li>I have to make import statements</li>
//         <li>I have to create Functions called Components with Pascal Case</li>
//         <li>I have to use ReactDom.createRoot and set the location to render as an Element</li>
//         <li>I have to use the render method and give it the Component Name</li>
//       </ul>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RandomComponentName />);

// CHALLENGE PART 2


// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/react.svg";

// function RandomComponentName() {
//   return (
//     <div>
//       <header>
//         <nav>
//           <img src={reactLogo} alt="" width="40" />
//         </nav>
//       </header>
//       <h1>Hello Guys</h1>
//       <ul>
//         <li>I am learning React</li>
//         <li>I have to make import statements for the npm modules i have installed</li>
//         <li>I have to create Functions called Components with Pascal Case</li>
//         <li>I have to use ReactDom.createRoot and set the element location to render it</li>
//         <li>I have to use the render method and give it the Component Name</li>
//       </ul>
//       <footer>
//         <small>© 2022 Murphy development. All rights reserved.</small>
//       </footer>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RandomComponentName />);


// QUIZ
// 1. What is a React component?

// A: A regular JS function (named with Pascal Case) that returns (React Elements) which are the Objects that get returned when we create JSX (JSX looks like written HTML)


// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// A: No Pascal Case Naming "MyComponent"


// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))
// ```

// A: Don't call the function with () but use <  /> to "Call" (Create an instance of) your Component 
// <Header />


// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/react.svg";

// function Header() {
//   return (
//     <header>
//       <nav>
//         <img src={reactLogo} alt="" width="40" />
//       </nav>
//     </header>
//   )
// }

// function Main() {
//   return (
//     <main>
//       <h1>Hello Guys</h1>
//       <ul>
//         <li>I am learning React</li>
//         <li>I have to make import statements for the npm modules i have installed</li>
//         <li>I have to create Functions called Components with Pascal Case</li>
//         <li>I have to use ReactDom.createRoot and set the element location to render it</li>
//         <li>I have to use the render method and give it the Component Name</li>
//       </ul>
//     </main>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <small>© 2022 Murphy development. All rights reserved.</small>
//     </footer>
//   )
// }

// function RandomComponentName() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RandomComponentName />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/react-logo.svg";

// function Header() {
//   return (
//     <header>
//       <nav className="nav-container">
//         <img className="nav-logo" src={reactLogo} alt="" />
//         <ul className="nav-list">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// function Main() {
//   return (
//     <main className="main-container">
//       <h1 className="main-header-one">React: What I have learnt so far</h1>
//       <ol className="main-list">
//         <li>I have to make import statements for the npm modules i have installed</li>
//         <code>{`import React from "react"; 
//         import ReactDOM from "react-dom/client";`}</code>
//         <li>I have to create Functions called Components with Pascal Case</li>
//         <code>{`function RandomComponentName() {
//           return (
//                   <div>

//                   </div>
//           );
//         }`}</code>
//         <li>I have to create a variable root and set it ReactDom.createRoot and provide that the element to render it</li>
//         <code>{`const root = ReactDOM.createRoot(document.getElementById('root'));`}</code>
//         <li>I have to use the render method and give it the Component Name</li>
//         <code>{`root.render(<RandomComponentName />);`}</code>
//       </ol>
//     </main>
//   );
// }

// function Footer() {
//   return (
//     <footer className="footer-container">
//       <small>© 2022 Murphy development. All rights reserved.</small>
//     </footer>
//   );
// }

// function RandomComponentName() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RandomComponentName />);

// Similar to regular JS when we want to set a class on an element we use:
// const ul = document.createElement("ul")
// ul.className = "something"
// in REACT when we want to give an element a class (in JSX) we have to use className="something" not the HTML way of class="something"


// we are now moving into breaking up the HTML (JSX) into separate Components in their own Files..
// we make Header.js (or .jsx) and copy/paste the Header Component
// then we need to make a few changes:

// we need to add 
// import React from "react"
// so it understands this is JSX 
// (NOTE THIS MAY NOT BE NECCESSARY ANYMORE IN THE LATEST VERSION)

// we need to EXPORT it
// if this is the ONLY component we have :

// export default Header

// or you can put it BEFORE the function declaration :

// export default function Header() {
//   return (
//         <header>

//         </header>
//   );
// }

// now in index.js we can IMPORT the Header
// import Header from "./Header"

// the spelling has to be the EXACT SAME as the FILE NAME, not neccessarily the component (function) name

// and when we use it in the RandomComponentName (which is the whole page) we don't need to change anything because we have imported the component as "Header"

import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function RandomComponentName() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RandomComponentName />);