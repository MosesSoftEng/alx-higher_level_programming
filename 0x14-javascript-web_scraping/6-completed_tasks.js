#!/usr/bin/node
/* Script that computes the number of tasks completed by user id. */
// Import modules
const request = require('request');

// Get command arguments
const url = process.argv[2];

// Send get request
request(url, function (error, response, body) {
  if (!error) {
    const userTaskData = {};

    const todos = JSON.parse(body);

    // Loop each todo
    todos.forEach(todo => {
      if (!todo.completed) {
        return;
      }

      if (userTaskData[todo.userId]) {
        userTaskData[todo.userId] = userTaskData[todo.userId] + 1;
      } else {
        userTaskData[todo.userId] = 1;
      }
    });

    console.log(userTaskData);
  }
});
