<template>
  <body class="background">
    <div>

      <img class="logo" src="/playground_assets/logo1923-7x4p.svg" />
      <p class="logo-text">
        Super generic Account!
      </p>


      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <!-- Start of account form-->
              <div class="mb-3">
                <br>
                <input 
                type="email" 
                class="form-control" 
                id="email" 
                v-model="email"
                required
                aria-describedby="emailHelp"
                placeholder="Email">
              </div>
              <div class="mb-3">
                <input 
                type="password" 
                class="form-control" 
                id="password" 
                v-model="password"
                required
                placeholder="Password">
                <div v-if="password.length >1 && password.length < 6" class="text-danger">
                                Password is not long enough!
                            </div>
              </div>
              <button 
              @click="login"
              class="btn btn-primary">Log in</button>
              <br>
              <br>
              <button 
              @click="logout"
              class="btn btn-primary">Log out</button>
            <!--End of account form-->
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>

      <!-- HEADER -->
      <div class="main-desktop-header1">
        <img src="/playground_assets/background1922-iww.svg" alt="background1922" class="main-desktop-background" />
        <div class="main-desktop-headinggroup">
          <div class="main-desktop-navigationbar">
            <span class="main-desktop-text038"><span><router-link to="/cart" exact>My cart</router-link></span></span>
            <span class="main-desktop-text040"><span>My account</span></span>
            <span class="main-desktop-text042"><span><router-link to="/menu" exact>Menu</router-link></span></span>
            <span class="main-desktop-text044"><span><router-link to="/signup" exact>Sign up</router-link></span></span>
            <span class="main-desktop-text046"><span><router-link to="/home" exact>Home</router-link></span></span>
          </div>
          <img src="/playground_assets/logo1923-7x4p.svg" alt="Logo1923" class="main-desktop-logo" />
          <span class="main-desktop-text048">
            <span>Super generic cafe</span>
          </span>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="main-desktop-footer">
        <div class="main-desktop-group14">
          <img src="/playground_assets/placeholderi921-no8m.svg" alt="placeholderI921"
            class="main-desktop-placeholder3" />
        </div>
        <div class="main-desktop-divider1">
          <img src="/playground_assets/linei921-umj.svg" alt="lineI921" class="main-desktop-line2" />
        </div>
        <div class="main-desktop-social-media">
          <img src="/playground_assets/iconini921-l7yt.svg" alt="iconinI921" class="main-desktop-iconin" />
          <img src="/playground_assets/iconfbi921-c75n.svg" alt="iconfbI921" class="main-desktop-iconfb" />
          <img src="/playground_assets/icontwi921-e5cf.svg" alt="icontwI921" class="main-desktop-icontw" />
        </div>
        <div class="main-desktop-logotitle">
          <div class="main-desktop-logo1">
            <img src="/playground_assets/vectori921-xr6a.svg" alt="VectorI921" class="main-desktop-vector15" />
            <img src="/playground_assets/vectori921-rwi.svg" alt="VectorI921" class="main-desktop-vector16" />
            <img src="/playground_assets/vectori921-w4kr.svg" alt="VectorI921" class="main-desktop-vector17" />
          </div>
          <span class="main-desktop-text086">Super generic cafe</span>
        </div>
      </div>
    </div>
  </body>
</template>
    
    
    
<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//for vue router
export default {
  name: 'Myaccount',
  metaInfo: {
    title: 'Super Generic Account',
  },
  //basic data field to return email and password
  data() {
    return {
      email: "",
      password: ""
    }
  },
//mounted function to run if a user is logged in. stops user from clicking account header when logged in.
 mounted: function() {
   if(firebase.auth().currentUser)
    this.$router.replace("menu");
 },

  methods: {
    //login function
      login: function() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in 
            // push user to menu page when they log in
            const user = userCredential.user;
            this.$router.push("menu");
          })
          // display error popup if unable to log in
          .catch((error) => {
            alert("Unable to log in user: " + error.message);
          });
      },
      //log out function
      logout: function() {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          alert("An error occurred while signing out: " + error.message);
        });
      },

  }
}
</script>
    
<style scoped>
.logo-text {
  color: rgba(52, 199, 89, 1);
  font-size: 48px;
  text-align: center;
  font-family: Alegreya;
  font-weight: 700;
  padding-top: 20px;
}

.background {
  background-image: linear-gradient(180deg, rgba(26, 26, 26, 1) 0%, rgba(43, 43, 43, 1) 100%);
  height: 60vw;
}

.logo {
  width: 100px;
  margin: auto;
  padding-top: 8vw;
}

.login {
  padding-top: 2vw;
}

.login button {
  width: 220px;
  height: 40px;
  border: 3px solid rgb(52, 199, 177);
  background-color: rgb(29, 113, 113);
  color: white;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}

.logout {
  padding-top: 2vw;
}

.logout button {
  width: 220px;
  height: 40px;
  border: 3px solid rgb(199, 155, 52);
  background-color: rgb(113, 72, 29);
  color: white;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}


.register {
  padding-top: 2vw;
}

.register input {
  width: 400px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 3px solid rgb(29, 113, 50);
}

.register button {
  width: 220px;
  height: 40px;
  border: 3px solid rgba(52, 199, 89, 1);
  background-color: rgb(29, 113, 50);
  color: white;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}


.main-desktop-header1 {
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 94px;
  display: flex;
  padding: 0;
  position: fixed;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-background {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 105%;
  opacity: 0.75;
  position: absolute;
  box-shadow: 0px 2px 5px 0px rgba(48, 48, 48, 1);
}

.main-desktop-headinggroup {
  top: 27px;
  left: 165px;
  width: 1246px;
  height: 30px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-navigationbar {
  top: 13px;
  left: 828px;
  width: 418px;
  height: 14px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-text038 {
  left: 279px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya SC;
  font-weight: 500;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}

.main-desktop-text040 {
  left: 160px;
  color: rgba(52, 199, 89, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya SC;
  font-weight: 500;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}

.main-desktop-text042 {
  left: 80px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Alegreya SC;
  font-weight: 500;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}

.main-desktop-text044 {
  left: 372px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Alegreya SC;
  font-weight: 500;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}

.main-desktop-text046 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Alegreya SC;
  font-weight: 500;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}

.main-desktop-logo {
  top: 0px;
  left: 0px;
  width: 31px;
  height: 30px;
  position: absolute;
}

.main-desktop-text048 {
  top: 13px;
  left: 37px;
  color: rgba(52, 199, 89, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Alegreya;
  font-weight: 700;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}

.main-desktop-footer {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.main-desktop-group14 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 200px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-placeholder3 {
  top: 0px;
  left: 0px;
  width: 100%;
  position: absolute;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10000000149011612);
}

.main-desktop-divider1 {
  top: 122px;
  left: 38px;
  width: 1440px;
  height: 1px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-line2 {
  top: -0.9999253749847412px;
  position: absolute;
}

.main-desktop-social-media {
  top: 151px;
  left: 665px;
  width: 98.1281967163086px;
  height: 20.000001907348633px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-iconin {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}

.main-desktop-iconfb {
  top: 0px;
  left: 44px;
  width: 10px;
  height: 20px;
  position: absolute;
}

.main-desktop-icontw {
  top: 3px;
  left: 78.4761962890625px;
  width: 20px;
  height: 16px;
  position: absolute;
}

.main-desktop-logotitle {
  top: 40px;
  left: 559px;
  width: 311px;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.main-desktop-logo1 {
  top: 0px;
  left: 0px;
  width: 31px;
  height: 30.000011444091797px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.main-desktop-vector15 {
  top: 10.2061767578125px;
  left: 0px;
  width: 31px;
  height: 20px;
  position: absolute;
}

.main-desktop-vector16 {
  top: 2.18115234375px;
  left: 15.9129638671875px;
  width: 5px;
  height: 7px;
  position: absolute;
}

.main-desktop-vector17 {
  top: 0px;
  left: 20.9864501953125px;
  width: 7px;
  height: 9px;
  position: absolute;
}

.main-desktop-text086 {
  top: 14px;
  left: 37px;
  color: rgb(52, 199, 89);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 14px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.signinbutton {
  width: 220px;
  height: 40px;
  border: 3px solid rgba(52, 199, 89, 1);
  background-color: rgb(39, 153, 67);
  color: white;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}
</style>