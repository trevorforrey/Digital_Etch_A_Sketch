var config = {
  apiKey: "AIzaSyD4DmO_AQLFoLo-BteDSRr38uluBL0hsXk",
  authDomain: "etchasketch-11c91.firebaseapp.com",
  databaseURL: "https://etchasketch-11c91.firebaseio.com",
  projectId: "etchasketch-11c91",
  storageBucket: "etchasketch-11c91.appspot.com",
  messagingSenderId: "445914375130"
};

var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database();
let bottomLeftRef = db.ref('drawBoard/bottomLeft');
let topLeftRef = db.ref('drawBoard/topLeft');
let bottomRightRef = db.ref('drawBoard/bottomRight');
let topRightRef = db.ref('drawBoard/topRight');

var app = new Vue({
  el: '#app',
  data: {
    test: 'Hello'
  },
  firebase: {
    bottomLeft: {
      source: bottomLeftRef,
      asObject: true,
      readyCallback: function() {
        console.log('got da data');
      }
    },
    topLeft: {
      source: topLeftRef,
      asObject: true,
      readyCallback: function() {
        console.log('got da data');
      }
    },
    bottomRight: {
      source: bottomRightRef,
      asObject: true,
      readyCallback: function() {
        console.log('got da data');
      }
    },
    topRight: {
      source: topRightRef,
      asObject: true,
      readyCallback: function() {
        console.log('got da data');
      }
    }
  }
})
