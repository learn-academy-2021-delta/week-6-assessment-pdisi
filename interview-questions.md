# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Rails is by far the biggest challenge for me due to the lack of visuals, so I feel like I am taking a shot in the dark at this point in my learning process. I believe that a migration is necessary to add information to the database.

  Researched answer: A migration is actually the answer. By adding using a migration we add a table that is capable of connecting and holding other information. 
 
 * Cohort has_many Students, Student belongs_to Cohort, Student has the foreign key because the foreign key is always  on the belongs to side. The name of the foreign column is cohort_id:integer, generate migration to fix the missing column



2. Which RESTful routes must always be passed params? Why?

  Your answer: I believe that this is just the delete route as it needs specific information to accurately be executed. You wouldn't want delete to be too chill and just start destroying everything.

  Researched answer: I have been trying to find additional information on this within the syllabus and online, but have not found anything that specifically states the why.

* Edit, Update, Show, Destroy - have to know which item we are performing the action on



3. Name three rails generator commands. What is created by each?

  Your answer: I believe a few would be controller, model, and assets. Controllers are used to link different pieces of data within rails. Models are basically just like classes. Assets are connected to models and give them specific data. These are guesses.

  Researched answer: Rails models are a Ruby class, which is what I thought. However, they are capable of adding database records. Controllers connect the user, views, and the model. It is considered the logical center of the application and holds everything together. I believe that I was wrong with assets. They are used to combine assets from other gems.

* Rails g model - model class, migration // rails g controller - controller, controller class, view folder // rails g rspec - testing folders // rails g migration - migration // rails g resource - model, controller, view folder, migration // rails g scaffold - controller, model, views folders, testing // 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          This is index. Get all the data from the db

method="POST"   /students          This is create. Create - create a new student instance in db

method="GET"    /students/new      This is new. Form for creating a new student

method="GET"    /students/2        This is show. Displays the student with id 2

method="GET"    /students/2/edit   This is edit. Returns form for editing a specific student

method="PATCH"  /students/2        This is update. Modifying the instance of the specific student

method="DELETE" /students/2        This is destroy. Removes the instance of the student with the id 2

Notes on process: I was not entirely sure about how to approach question 4, so I went with a simple approach.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. Create categories that encompass different subjects
2. Separate tasks chronologically, so that time management is a priority
3. I want to be able to fetch information based on time requirements
4. I want to be able to quickly edit schedules based on time requirements
5. Should be able to retrieve task completion times
6. Should be able to review notes on each task
7. Should be able to move a task from an incomplete list to a complete list
8. Should be able to receive warnings for upcoming events
9. I should be able to navigate around a simple UI that shows all data
10. Data should be color coded for ease of access to desired information