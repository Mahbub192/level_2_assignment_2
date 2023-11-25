# level_2_assignment_2

- router1 = post method (/api/users/),

Data from the front end traverses a defined route to reach the back end, where it's stored in MongoDB.

User Existence Check:
The system checks for existing records with the same username and user ID. If a match is found, a user already exists message is triggered.

Successful Database Storage:
Upon successful storage, a confirmation message is returned, indicating the data has been added to the database.

Data Retrieval:
In response to successful storage, a comprehensive data set is returned, excluding sensitive information like the password.

This process ensures secure and transparent data management.

- router2 = get method (/api/users/),

This router facilitates the retrieval of user data from the MongoDB database, specifically the "user" collection. Upon invoking this router, it seamlessly provides access to all users stored within the designated collection.

- router3 = get method (/api/users/:userId),

A single user's data is returned through this router, if the user is in the database then the data will be returned otherwise it will show a message that this user not access in the data basic.

- router4 = put method (/api/users/:userId/orders),

Through this router, a single user can add the orders of various products to his information, the user can add more than one product here.

- router5 = get method (/api/users/:userId/orders),

Through this router, the user can see what products he has added to the database, a list of products, and if a user has not added a product, he will see an array [].

- router6 = put method (/api/users/:userId),

Through this router, a specific user can update his information, if that user is in the database, then the information will be updated, otherwise, a message will be sent, this user is not in the database.

- router7 = delete method (/api/users/:userId),

A specific user can be deleted from the database through this router
