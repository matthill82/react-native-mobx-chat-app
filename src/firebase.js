// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyD5BzBHlRrXp_PLkOTMfzqmbQZTNZO19f8',
    authDomain: 'benchmark-chat.firebaseapp.com',
    databaseURL: 'https://benchmark-chat.firebaseio.com',
    projectId: 'benchmark-chat',
    storageBucket: 'benchmark-chat.appspot.com',
    messagingSenderId: '680708007687',
};

export default firebase.initializeApp(firebaseConfig);;
