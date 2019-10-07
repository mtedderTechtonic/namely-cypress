# namely-cypress
Let's automate clocking in/out with cypress!

## How to run

`git clone https://github.com/mtedderTechtonic/namely-cypress.git`

In your terminal, navigate to where the repository lives:

`npm install`

This will intall all the dependencies required to run this application.

Next, enter this command:

`npm run cypress`

A `cypress.json` file should have been created.  Open this file.
Inside the file, you should add your Namely credentials and the following options:

```
"env": {
  "baseUrl": "https://techtonic.namely.com/users/login",
    "video": false,
    "watchForFileChanges": false,
    "env": {
        "email": "<YOUR EMAIL HERE>",
        "password": "<YOUR PASSWORD HERE>"
    },
    "chromeWebSecurity": false
  }
 ```
 
 ### To clock in:
 
 In your terminal, type this command to start the clock-in script:
 
 `npm run clock-in`
 
 If the test passes, you have successfully clocked in!
 
 ### To clock out:
 
 In your terminal, type this command to start the clock-out script:
 
 `npm run clock-out`
 
 If the test passes, you have successfully clocked out!
