# Wall-Pro MPP
### --Wall Covering Calculator and Material Procurement Portal--
![shaw-ppc](./client/src/assets/img/wall-pro-logo.png)

## Table of Contents:

- [Links](#links)
- [Description](#description)
- [UserStory](#userstory)
- [DevelopmentTeam](#team)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#tests)
- [Contact](#contact)

#

## About This Project:

### Links:

Deployed Application: http://www.WallPro.net  
Repository: https://github.com/mbussert/shaw-ppc

### Description:

The application will assist clients in calculating square footage measurements for vinyl installation material deliverables on behalf of the design company. The average user will be able to utilize the calculator tool to place product orders, potentially have access to an augmented reality capability to visualize the placement, save their account info, and notify the administration team of their new orders.

### User Story:

* GIVEN I need to submit vinyl installation projects with specific measurements to a designer
* WHEN I visit the home page
* THEN I am able to create an account or proceed to the calculator tool and information about how the calculator tool works
* WHEN I visit the “How it Works” page
* THEN I am able to view a video detailing how I should use the calculator tool, along with step-by-step instructions that are simple to follow
* WHEN I view the “Calculator Tool” page
* THEN I am able to view previous projects I have submitted (if I am logged in), and create a new project
* WHEN I choose to create a new project
* THEN a modal appears (if I am not logged in) reminding me to log in if I want my project to be saved, and have the option to continue if I do not want to create an account
* WHEN I continue to create a new project
* THEN I am asked to create a name/number for the first wall of the vinyl installation project
* WHEN I submit my new name/number for the first wall
* THEN I am asked to choose which material I would like for the wall
* WHEN I submit my chosen material and choose to continue
* THEN I am asked to choose a unit of measurement from a dropdown list that will be used for calculations
* WHEN I enter a unit of measurement and choose to continue
* THEN I am asked to enter the total length of the wall
* WHEN I have entered the total length of the wall and continue
* THEN I am prompted to choose whether to include an additional six inches of vinyl material to my measurements for production purposes
* WHEN I click the “Calculate” button
* THEN I am shown my project’s details and calculated measurements
* WHEN I save the new project
* THEN the project is added to my existing projects in the sidebar
* WHEN I click an existing project in the sidebar
* THEN I am able to add and save additional walls to the project
* WHEN I view my “Account” page
* THEN I am able to easily view details about all projects I have submitted
* WHEN I am offline
* THEN basic functionality of the site persists

### Built With

Frameworks | Dependencies
----------- | ------------
React      | Sass
MySQL      | Material-UI
JavaScript | NodeMailer
HTML      | React Player
CSS  | Express
Node.js  | Axios
Sequelize | Passport




### Team:

- [Al Murawski - Project Manager, Frontend Dev](https://github.com/almurawski15)
- [Michael Bussert - Frontend Dev](https://github.com/mbussert)
- [Jon Yeatman - Frontend Dev](https://github.com/Yeatman51)
- [Brandon Merritt - Frontend Dev](https://github.com/CrispyCoder817)
- [Heather Storseth - Backend Dev](https://github.com/hstor3)
- [Valerie Russell - Backend Dev](https://github.com/vruss14)

#

## Getting Started

### Installation:

1. Clone the repo
   ```sh
   git clone https://github.com/mbussert/shaw-ppc.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the application on localhost:3000
   ```sh
   npm start
   ```

### Usage:

Demo video coming soon...

#


## License:

This application is covered under GNU AGPL v3.

## Contributing:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Tests:

No tests have been created for this application.
