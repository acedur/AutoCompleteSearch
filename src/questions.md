1. What is the difference between Component and PureComponent? Give an example where it might break my app.

- Component is the base for all React components. When it is triggered it re renders the component and its children. PureComponent is a subclass of Component.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

- When using Context to pass data down any change in the context value will start an update in all components that use the context. ShouldComponentUpdate is used to check if a component should re render. It can result in re renders.

3. Describe 3 ways to pass information from a component to its PARENT.

- Context - The parent component can create a context using the createContext function from React and send the data by the context provider. The child component can then use the context with useContext, without passing props.

- Callbacks - The parent component passes a callback function as a prop to the child component.

- Props - The parent component can pass down props to the child component and the child component can update the props through functions.

4. Give 2 ways to prevent components from re-rendering.

- React memo - It memorizes the component and stops it from re-rendering.

- useMemo - you can provide a condition to determine if the component should re-render.

5. What is a fragment and why do we need it? Give an example where it might break my app.

- It allowes you to group multiple elements without adding a parent element.

- An example where using fragments might break my app is when I need to add CSS or styling to the group of elements.

6. Give 3 examples of the HOC pattern.

-

7. What's the difference in handling exceptions in promises, callbacks and async…await?

- With promises you can use the catch method to handle any errors.

- With callbacks the first parameter of the function is reserved for the error, the function can handle the error.

- With async/await, error handling is done with try/catch.

8. How many arguments does setState take and why is it async.

-

9. List the steps needed to migrate a Class to Function Component.

-

10. List a few ways styles can be used with components.

- CSS classes - components can be assigned CSS classes using the className attribute.

- Inline styles - they can be applied to elements using the style attribute - <div style={{ color: 'blue', padding: '20px' }}>Hello</div>.

11. How to render an HTML string coming from the server.

-
