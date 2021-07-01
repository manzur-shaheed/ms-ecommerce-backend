# ms-ecommerce-backend
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

A back end tool for an e-commerce site using ```Express.js``` and ```Sequelize``` to interact with a MySQL database. This tool provides API to add/view/update/delete (CRUD) of different components.

## Installation

Code: [Code](https://github.com/manzur-shaheed/ms-ecommerce-backend) 

You can clone code from [github link](https://github.com/manzur-shaheed/ms-ecommerce-backend) and run it locally on your computer. 

#### Video Link
Watch a demo here (Quicktime Movie): [demo](https://drive.google.com/file/d/1I7FFazL89ueMeEuQGTbrOnoz3QutsIuz/view?usp=sharing)
#### Prerequisites 
A computer with ```mysql``` database installed locally, ```node.js``` and ```npm``` (node package manager). It uses ```express```, ```mysql2```, ```sequelize```, ```dotenv``` node packages. To clone code from github, you need to have aceess to the Internet. Also your computer should have Terminal (Unix) software installed. For Windows users, you can get it from https://www.cygwin.com/. For Mac users, it comes pre-installed with MacOS. 

Since this application is only providing the backend services via API calls, you will need to have an API client like ```insomnia``` to test this app's functionality. If you don't have ```insomnia``` installed on your computer, you can get it from [here](https://insomnia.rest/).
#### Installing and running 
- Open a terminal.
- Create a directory for this project.
- Change current directory to this project direcory.
- Issue the following command -
```
git@github.com:manzur-shaheed/ms-ecommerce-backend.git
```
- If you don't have ```node.js``` installed already then download it from [here](https://nodejs.org/en/download/), and follow the instructions to install it.
- Once installed, use ```npm``` to install ```express```, ```mysql2```, ```sequelize``` and ```dotenv``` packages by issuing ```npm i <package>``` command at the terminal prompt (where ```<package>``` is one of ```express```, ```mysql2```, ```sequelize```, ```dotenv```).
- After that you need to create a database using the file ```assets/schema.sql```. 

Following image shows the design of the databse and relations between the tables -

![db_desgn](./assets/images/ecommerce_relational_model.png)

- Run the following command to create database and provide your Mysql root password when asked -
```
mshaheed$ mysql -u root -p < db/schema.sql
Enter password:
mshaheed$
```
- Also populate employee database with some sample data -
```
mshaheed$ npm run seed
```

Please watch this [video](https://drive.google.com/file/d/1I7FFazL89ueMeEuQGTbrOnoz3QutsIuz/view?usp=sharing) to see how the application works.

## Contribution Guidelines
You can expand this app by adding more menus and features. Also referential integrity check can be added for record deletion, it is currently not implemented.
## License
MIT License

Copyright (c) 2021 Manzur Shaheed

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Contacts
#### Github
- [Manzur Shaheed](https://github.com/manzur-shaheed/)
#### Email
- [Manzur Shaheed](mailto:shaheed_manzur@yahoo.com)
## Acknowledgements
* **Billie Thompson** - [PurpleBooth](https://github.com/PurpleBooth) for the README Template.



