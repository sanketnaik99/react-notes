![Website](https://img.shields.io/website?logo=React&style=for-the-badge&url=https%3A%2F%2Fnotes.sanketnaik.dev) &nbsp;&nbsp; [![Netlify Status](https://api.netlify.com/api/v1/badges/6c0df32f-9c60-40f9-a265-5e151fb8536d/deploy-status)](https://app.netlify.com/sites/serene-carson-4b82d1/deploys)

# React Notes

![Notes](docs/banner.png)

This project was built using the following technologies -

- ReactJS
- MaterializeCSS
- Redux
- Firebase Authentication
- Firebase Firestore

## Project Structure

The website follows a simple structure where any user can view a demo page where they can add new notes which get stored temporarily in the local app state. These notes get deleted when the user reloads the page. Alternatively, a user can sign up using email and password authentication or login using their Google account and can add notes which get saved in the cloud firestore database. A user can only view their own notes and no other user can view the notes created by other users.

The pages visible to unauthenticated and authenticated users are as follows.

- [React Notes](#react-notes)
  - [Project Structure](#project-structure)
  - [Unauthenticated User](#unauthenticated-user)
  - [Demo Page](#demo-page)
  - [Sign In Page](#sign-in-page)
    - [Email and Password Sign In](#email-and-password-sign-in)
    - [Google Sign In](#google-sign-in)
  - [Sign Up Page](#sign-up-page)
    - [Email and Password Sign Up](#email-and-password-sign-up)
  - [Authenticated User](#authenticated-user)
  - [Notes Page](#notes-page)

## Unauthenticated User

## Demo Page

This page is displayed when an unauthenticated user opens the application. Here, the user can access the notes system but the notes that are added will not be stored anywhere. An initial note is also displayed to the user as an example. If the user refreshes the page, the notes will be deleted and only the initial note will remain.

## Sign In Page

This page allows the user to sign in to the application. The user can either decide to sign in using their email and password or choose to sign in with Google.

### Email and Password Sign In

If the user chooses to sign in with their email and password, their email and password inputs are validated using Firebase Authentication. If the email and password are correct, the user is redirected to the user Notes page and their existing notes are fetched from the Cloud Firestore Database.

If the user does not have an account or enters the wrong email or password, an error message is displayed.

### Google Sign In

If the user chooses to sign in with their Google ID, a pop-up is shown where the user can choose the ID with which they want to continue to the rest of the application.

Note: Even if a user does not have an existing ID, a new entry is created in the database and their account is automatically registered when using the Google Sign In.

## Sign Up Page

This page allows the user to sign up for the application. The user can use the Email and Password to sign up or they can directly log in using the Google Sign In option.

### Email and Password Sign Up

If the user chooses to sign up using their email and password, they will be asked to enter their Full Name, Email ID and their password. This information will be used to create an account and to obtain other details like initials.

## Authenticated User

## Notes Page

The notes page will allow an authenticated user to view their saved notes. This page fetches the notes from Cloud Firestore and displays it to the user. If the user hasn't added any notes, a 'Your Notes List is Empty' message to the user. Additionally, the user can delete a note and it will be deleted from the database as well.
