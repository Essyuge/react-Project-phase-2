 ## Books Store App

## Author

Esther Uge.

## PROJECT DESCRIPTION
This Website is based on keeping tracks of favourite books on their specific categories. The user can smoothly navigate throughtout each category, can easly veiw the books per category . The User can delete unwanted books from the App.

## SETUP
to access  this project on your local files, you can clone it using this steps

```bash
  Open the Terminal

Clone the repository:git@github.com:Essyuge/react-Project-phase-2.git


Change Directory: cd react-Project-phase-2

npm install
if u get an error when running npm start ,then run
nvm install --lts
open browser by running npm start
```
## Technologies used
*  JSX
*  db.json

## db.json
to create a localhost start with { } then " " inside the strings write your object name then : [ ]
```bash
npm i json-server
json-server --watch db.json
```

# How to deploy apps for free
Deploying single react applications using Heroku and Vercel

## Single React App on Heroku
1) Create a Heroku account.
2) Create your app.
3) Download Heroku CLI from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4) Run these codes.

```bash
heroku login
```
```bash
git init
```
```bash
heroku git:remote -a <app-name>
```
```bash
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```
```bash
git add .
```
```bash
git commit -am "my first commit"
```
```bash
git push heroku main
```

## Single React App on Vercel
1) Create a Vercel account.
2) Linking GitHub
3) Continue with GitHub
4) Add GitHub Repo
5) Choose the repo to deploy
6) Diploy

## LIVE 
View [LIVE](https://rehtse-books-library.vercel.app/):

## LICENSE

This project is under the [XMD](License) license.