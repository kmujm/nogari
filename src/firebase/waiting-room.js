import firebase from './firebase-manager';

export function getRoomInfo(roomNumber, callback) {

  firebase.database().ref('rooms').child(String(roomNumber)).on('value', (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      console.log("No data available");
    }
  });

  // const getData = firebase.database().ref('rooms').child(String(roomNumber)).get().then((snapshot) => {
  //   if (snapshot.exists()) {
  //     callback(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });
}

export function joinRoom() {

}