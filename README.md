# test project
## Description
Create a tool which presents the given test data in `data/testdaten.txt` in an user interface. Use HTML.
In addition, the tool must be able to display the federal states of Germany (Bundesland) for each of the records.
Request the GoogleMaps Geocoding API to get the federal states.
*Hint: In Germany, the zip code is clearly assigned to a federal state.*

`https://maps.googleapis.com/maps/api/geocode/json?address=<ADRESS>&key=<GOOGLE_API_KEY>`

**Please consider that API requests are expensive and limited.**

Write your code like you would do it for a production system in a company and please consider the following points:
* architecture / code structure
* OOP
* performance
* reusable code
* modularity
* clean code

PS: We don't care about a good frontend layout ;)

We wish you success!

## Installation

1. `npm install`

## Run the tool

1. create a `google-api-key.js` with the following content: `export const GOOGLE_API_KEY = 'YOUR_API_KEY_HERE';`
2. `npm start` (watcher)
