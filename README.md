# NetherlandRabbits.com Frontend

Frontend for Netherland Rabbits sales website, where users can see an up-to-date listing of available Netherland Dwarf rabbits for sale, find out more about the purchasing process, and fill out a contact form for more information.  

<br>
<img src="https://media.giphy.com/media/2wneInSPbFnRkb5oM4/giphy.gif">
<br>

## Technologies and packages used on frontend
* ReactJS
* Mostly vanilla CSS
* Vivus for SVG path animation on custom SVG
* React-router-dom and Redux
* Various packages for card animations and transitions

## Technologies and packages used on backend
* NodeJS backend serving REST API for inventory queries and contact forms
* Sendgrid nodemailer implementation used to forward inquries to website operator
* Inventory on backend is fed from a Google Sheet
  * Provided through google-spreadsheet package
  * This makes editing of the website inventory trivial for the layperson

