# react-simple-form-and-button

This react application is a webpage with 2 sections, first section is a form with a movie name and movie genre text input with a submit button. The second section is just a button and some text that shows how many times you have clicked the button.

This project provides an example of how to use a form and a button inside react to enable some interactivity on your web app. You can also view an example of state within a class

There are 2 class components in this project

- Body
  - Form
  - Button

## _Body_

This is the main component, linked to the base `ReactDOM.render()`. It holds the `Form` and `Button` components. It simply acts as a container to hold the components needed for that web page.

## _Form_

This component simply manages a single form with 2 text inputs and a submit, it handles all interactivity, and shows an alert when submitted.

The input from the 2 text inputs are stored as a state within the component, its this state that gets read for the alert output.

There are 2 methods in this class.

**HandleInputChange()**

This method takes in an event, from that event it grabs the users input and stores it in to an appropriate state by checking the events id. This method gets used inside the text inputs `onChange` attribute.

**HandleSubmit()**

This method is called in the HTML forms `onSubmit` attribute. This function provides the logic for when the submit button is pressed. In this case it shows an alert that prints out the contents of the 2 text fields (which is stored in state) at the time of submitting.

## _Button_

This component manages a single button and displays some text that shows how many times that button has been pressed.

There is one method.

**handleClick()**

This method holds the logic for what happens when the button gets clicked, it gets called inside the buttons `onClick` attribute. Simply, it just adds 1 to the components `clickNumber` state. This state is then used to output how many times you have clicked the button.
