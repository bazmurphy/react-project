import React from "react";

function Main() {
  return (
    <main className="main-container">
      <h1 className="main-header-one">React: What I have learnt so far</h1>
      <ol className="main-list">
        <li>I have to make import statements for the npm modules i have installed</li>
        <code>{`import React from "react";
        import ReactDOM from "react-dom/client";`}</code>
        <li>I have to create Functions called Components with Pascal Case</li>
        <code>{`function RandomComponentName() {
          return (
                  <div>

                  </div>
          );
        }`}</code>
        <li>I have to create a variable root and set it ReactDom.createRoot and provide that the element to render it</li>
        <code>{`const root = ReactDOM.createRoot(document.getElementById('root'));`}</code>
        <li>I have to use the render method and give it the Component Name</li>
        <code>{`root.render(<RandomComponentName />);`}</code>
      </ol>
    </main>
  );
}

export default Main;