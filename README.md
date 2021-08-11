## ReactJS [NetherlandBunnies.com](https://www.netherlandbunnies.com "NetherlandBunnies.com") Frontend 
###### (Github for NodeJS backend for this project found [here](https://github.com/ggroce/netherland-rabbits-backend "Backend: netherland-rabbits-backend"))

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
<br>

## Details on the [backend](https://github.com/ggroce/netherland-rabbits-backend "Backend: netherland-rabbits-backend")
* NodeJS backend serving REST API for inventory queries and contact forms
* Sendgrid nodemailer implementation used to forward inquries through email to website operator
* Website inventory on backend is fed from a Google Sheet
  * Provided through google-spreadsheet package
  * This makes editing of the website inventory instantaneous and trivial for the layperson

<br>
Both the frontend and backend have been deployed to a Digital Ocean droplet  

#### Todo: 
- [ ] Refactor CSS into concerns better
- [ ] Utilize lazy to split packages up
