# Welcome

## Getting started

### Environment

- **Linux Ubuntu 20.04.2 LTS**
- **npm version 6.4.11**

### Installation

- Clone repository using `git`

  ```shell
  $ git clone https://github.com/JoshiAyush/netflix.git netflix
  ```

- Install packages required using `npm`, in the project's root dir enter the command given below:
  ```shell
  $ npm install
  ```

This will install all the packages required by this project.

### Firebase

- Go to [`firebase`][firebase-login] and create an account.
- Register an app named `netflix` on firebase, see [`Create firebase project`][firebase-create-app].
- Go to your app's `project setting` and get the `SDK configurations` from there.
- Save the configurations in a file `src/lib/credentials.js` and then `export` the configurations,
  ```javascript
  export const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
  };
  ```
- Execute function `seedDatabase()` from the file `src/seed.js` to seed database with data.

<!-- Definitions -->

[firebase-login]: https://console.firebase.google.com/u/0/
[firebase-create-app]: https://docs.kii.com/en/samples/push-notifications/push-notifications-android-fcm/create-project/
