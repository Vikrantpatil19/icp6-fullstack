import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

function Login() {

  // const handleGoogleSignIn = async () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   try {
  //     const result = await firebase.auth().signInWithPopup(provider);
  //     // You can access the user's information here
  //     const user = result.user;
  //     console.log(user);
  //   } catch (error) {
  //     // Handle errors here
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className=" fw-bold lh-1 text-body-emphasis mb-3">Book your Ride Now</h1>
            <p className="col-lg-10 fs-6 ">Enjoy Your seamless experience by signing up now!! </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-3 p-md-5 border rounded-3 bg-body-tertiary">
              <button className="w-100  btn btn-md border d-flex  justify-content-center" type="button">
                <img className="icon mx-3 " src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" style={{ height: "24px" }} />
                Sign in with Google
              </button>

              <hr className="my-4" />
              <small className="text-body-secondary">By signing in, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
