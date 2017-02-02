import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
};

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
