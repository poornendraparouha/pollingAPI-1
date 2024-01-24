<h1>Polling System API</h1>

<h3>Task</h3>

- You need to create an API where anyone can create questions with options and also add votes to it
- Authentication/User identity is not needed, this is going to be a completely open application,

<h3>Features</h3>

- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

<h3>Required Routes</h3>

- /question/create (To create a question)
- /question/:id/option/create (To add options to a specific question)
- /question/:id/delete (To delete a question)
- /option/:id/delete (To delete an option)
- /option/:id/add_vote (To increment the count of votes)
- /question/:id (To view a question and it’s options)
