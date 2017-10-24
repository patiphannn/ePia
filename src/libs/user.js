import firebase from 'firebase'
import { Link } from 'react-router-dom'

const UserFunc = {
  onAuthStateChange: (cb) => {
    firebase.auth().onAuthStateChanged((user) => {
      cb(user)
    })
  }
}

export default UserFunc
