# clkwrk
## [Deployed Site](https://clkwrk.netlify.app/)

### Version 1.0 notes:
- This is the baseline prototype of clkwrk, an app meant to increase visibility and productivity of employees in production facilities, primarily environments relying on 24-hour production.
- I have a lot of big plans for this app and the biggest challenge I found was deciding where true MVP for the purposes of this project fell. I found a seemingly easy solution for authorization early on in the project and put it on the backburner to focus on more time-consuming features, all to run into a number of issues with authorization on the last day prior to the project being due. All in all there are a number of features that I have yet to implement but am very proud of the baseline I built for this app.
- I learned quite a bit about making and working with SVG imagery in the designing of the logo for this app. It's the first real graphic design I've done in a long time and it feels great to be diggin into the design side of things again. It was my first time using Sketch and while there are a lot of interesting features and advantages to using it, I also would like to explore some other apps now that I'm moving away from canva and exploring dynamic design tools.

### Features to come:
- Login/Authorization
	- Creation and deletion of users via admin authorized accounts
- Automatic logs to both a company/location-wide log as well as an employee-specific log that is populated when navigating to the employee log page via the profile
- Exporting of data to be both manually and automatically sent out via excel sheets (or other formats dependent on company needs)
- Add a more interactive map page via Google API
- Add a dark(er) theme? Maybe a lighter theme?


### Initial Idea:
> This app is primarily geared towards production/processing facilities where 24-hour shift work is a daily occurrence. This is stage 1 of a commercial app that will eventually be pitched to companies who have 24 hour production facilities where their staff is often kept on-site (ie canneries/fish processing in Alaska - this will be the app's first target customer-base). The app assists with long-term tracking of employees on a daily, weekly, monthly, and seasonal(annual) basis. It will allow different stages of management to check up on and track employees with organized note-taking, tracking, and exporting of data via spreadsheets.

### Tech Stack:
- MERN:
	- Mongoose
	- Express
	- React.js
	- Node.js
- Tailwind CSS
- Framer Motion
- Design:
	- Canva
	- Sketch

### Initial Wireframes:
! [Welcome Page](https://media.git.generalassemb.ly/user/43496/files/182efa94-dcc5-40cd-b9e1-3192aaa7159f)
! [Home Screen](https://media.git.generalassemb.ly/user/43496/files/ba78f192-7351-4520-954e-1822118070d0)
! [Employees Screen](https://media.git.generalassemb.ly/user/43496/files/881809cf-0907-4977-b415-24fb55f9c4da)
! [2nd Employees Screen](https://media.git.generalassemb.ly/user/43496/files/a14c36d2-265a-4e77-8e04-f99e4c97f960)
! [Log Example](https://media.git.generalassemb.ly/user/43496/files/9536ee4f-ec9b-4519-9a88-562e195acb15)
! [Map Page](https://media.git.generalassemb.ly/user/43496/files/30bd9305-62d7-4eb3-95f1-eb141f664512)
! [Profile Idea](https://media.git.generalassemb.ly/user/43496/files/217205bf-85b2-4a07-b297-a54209266d43)

### User Stories:
> - As a timekeeper, I want to easily login and check off who is in attendance and on-time for the day
- As a timekeeper, I want to easily mark who is absent/late and be prompted with a message to save to this event
- As a timekeeper, I want all of these events to automatically log in an attendance log
- As a department supervisor, I want to be able to know when it's my employee's birthdays
- As a department supervisor, I want to easily add notes to an employee's employee log
- As a department supervisor, I need any interactions with the app to be easy and quick as I have other things to do
- As a production manager, I want to have an easily understood interface that tells me how many employees I have working and in what department

### For potential contributors:
- If you'd like to be involved, let me know! I love recommendations, assistance and a second set of eyes on things.
	- Start out by cloning this repository down
	- Install dependencies 
	- Make changes/additions
	- Make a pull request from your local machine to the repo
		- If I have any issues with your recommendation I'll be sure to reach out directly and let you know why it can't be implemented or what changes need to be made before merging into the project
- ALL contributions are welcome! Whether it's just a friendly note on a bothersome bug or a certain color scheme bothers your vision, I want to hear it! This will be a project I'm working on for months to come and I love feedback!