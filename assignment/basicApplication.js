/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "Is the Developed World Really Developed?",
      "description": "What is meant by the term 'Devloped World?' Let's explore how diverse and developed these countries really are.",
    },

    {
      "name": "Where is the 'Developed World'?",
      "description": "Developed countries are highly clustered with a few notable exceptions"
    },

    {
      "name": "What makes the 'Developed World' developed?",
      "description": "Average incomes is the only mectric used to determine what makes a country developed",
    }
  ]
};


var clickPreviousButton = function() {
  if(state.slideNumber < (state.slideData.length - 1)) {
    state.slideNumber += 1;
  }
};

var clickPreviousButton = function(num) {
  if(state.slideNumber > 0) {
    state.slideNumber -= 1;
  }
};

var saySlideName = function(sayName) {
    console.log(state.slideData[sayName]);
};

  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
