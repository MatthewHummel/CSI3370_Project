<template>
  <div class="menupage-container">
    <div class="menupage-menupage">
      <div class="main-desktop-header1">
        <img src="/playground_assets/background1922-iww.svg" alt="background1922" class="main-desktop-background" />
        <div class="main-desktop-headinggroup">
          <div class="main-desktop-navigationbar">
            <span class="main-desktop-text038"><span><router-link to="/cart2" exact>My Cart</router-link></span></span>
            <span class="main-desktop-text040"><span><router-link to="/account2" exact>My
                  Account</router-link></span></span>
            <span class="main-desktop-text042"><span>Menu</span></span>
            <span class="main-desktop-text044"><span><router-link to="/signup2" exact>Sign up</router-link></span></span>
            <span class="main-desktop-text046"><span><router-link to="/home" exact>Home</router-link></span></span>
          </div>
          <img src="/playground_assets/logo1923-7x4p.svg" alt="Logo1923" class="main-desktop-logo" />
          <span class="main-desktop-text048">
            <span>Super Generic Cafe</span>
          </span>
        </div>
      </div>
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
      <div class="menupage-menusection2">
        <div class="menupage-productcard">
          <img src="/playground_assets/backgroundi2717-bgc-500h.png" alt="BackgroundI2717"
            class="menupage-background01" />
          <span class="menupage-text024">
            <span>
              Product Description - Bowl of mixed freshly cut fruit
            </span>
          </span>
          <span class="menupage-text026">
            <span>Mixed Fruit</span>
          </span>
          <div class="menupage-picture">
            <img src="/playground_assets/lattepic01i2717-zxpe-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic01" />
          </div>
          <span class="menupage-text028"><span>$4.99</span></span>
          <button @click='addCart("menupage-text026", "menupage-text028")' class="menupage-addtocartbutton">
            <img src="/playground_assets/primaryi2717-3fzd-200h.png" alt="PrimaryI2717" class="menupage-primary" />
            <span class="menupage-text030"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard01">
          <img src="/playground_assets/backgroundi2717-bhp7-500h.png" alt="BackgroundI2717"
            class="menupage-background02" />
          <span class="menupage-text032">
            <span>
              Product Description - Fresh daily house made croissant, plain no filling
            </span>
          </span>
          <span class="menupage-text034">
            <span>Croissant</span>
          </span>
          <div class="menupage-picture01">
            <img src="/playground_assets/lattepic01i2717-k5uf-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic011" />
          </div>
          <span class="menupage-text036"><span>$2.49</span></span>
          <button @click='addCart("menupage-text034", "menupage-text036")' class="menupage-addtocartbutton01">
            <img src="/playground_assets/primaryi2717-yilc-200h.png" alt="PrimaryI2717" class="menupage-primary01" />
            <span class="menupage-text038"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard02">
          <img src="/playground_assets/backgroundi2717-j9n-500h.png" alt="BackgroundI2717"
            class="menupage-background03" />
          <span class="menupage-text040">
            <span>
              Product Description - House made Sandwich prepared with freshly sliced deli meats and veggies
            </span>
          </span>
          <span class="menupage-text042">
            <span>Sandwich</span>
          </span>
          <div class="menupage-picture02">
            <img src="/playground_assets/lattepic01i2717-3y7p-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic012" />
          </div>
          <span class="menupage-text044"><span>$5.29</span></span>
          <button @click='addCart("menupage-text042", "menupage-text044")' class="menupage-addtocartbutton02">
            <img src="/playground_assets/primaryi2717-boyp-200h.png" alt="PrimaryI2717" class="menupage-primary02" />
            <span class="menupage-text046"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard03">
          <img src="/playground_assets/backgroundi2717-7whm-500h.png" alt="BackgroundI2717"
            class="menupage-background04" />
          <span class="menupage-text048">
            <span>
              Product Description - Loose leaf ceylon tea shipped to us straight from Sri Lanka
            </span>
          </span>
          <span class="menupage-text050">
            <span>Tea</span>
          </span>
          <div class="menupage-picture03">
            <img src="/playground_assets/lattepic01i2717-87rh-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic013" />
          </div>
          <span class="menupage-text052"><span>$1.89</span></span>
          <button @click='addCart("menupage-text050", "menupage-text052")' class="menupage-addtocartbutton03">
            <img src="/playground_assets/primaryi2717-pdhc-200h.png" alt="PrimaryI2717" class="menupage-primary03" />
            <span class="menupage-text054"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard04">
          <img src="/playground_assets/backgroundi2717-mze7-500h.png" alt="BackgroundI2717"
            class="menupage-background05" />
          <span class="menupage-text056">
            <span>
              Product Description - House made lemonade freshly squeezed using meyer lemons
            </span>
          </span>
          <span class="menupage-text058">
            <span>Lemonade</span>
          </span>
          <div class="menupage-picture04">
            <img src="/playground_assets/lattepic01i2717-5qp6-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic014" />
          </div>
          <span class="menupage-text060"><span>$2.39</span></span>
          <button @click='addCart("menupage-text058", "menupage-text060")' class="menupage-addtocartbutton04">
            <img src="/playground_assets/primaryi2717-dhtw-200h.png" alt="PrimaryI2717" class="menupage-primary04" />
            <span class="menupage-text062"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard05">
          <img src="/playground_assets/backgroundi2717-nq8a-500h.png" alt="BackgroundI2717"
            class="menupage-background06" />
          <span class="menupage-text064">
            <span>
              Product Description - Our freshest coffee blended together with ice and your choice of flavoring.
            </span>
          </span>
          <span class="menupage-text066">
            <span>Frappuccino</span>
          </span>
          <div class="menupage-picture05">
            <img src="/playground_assets/icedcoffeepic01i2717-jokb-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic015" />
          </div>
          <span class="menupage-text068"><span>$2.89</span></span>
          <button @click='addCart("menupage-text066", "menupage-text068")' class="menupage-addtocartbutton05">
            <img src="/playground_assets/primaryi2717-7q3-200h.png" alt="PrimaryI2717" class="menupage-primary05" />
            <span class="menupage-text070"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-h2">
          <span class="menupage-text072">Refreshments</span>
          <img src="/playground_assets/linei2717-0kra-200h.png" alt="LineI2717" class="menupage-line1" />
        </div>
      </div>
      <div class="menupage-menusection1">
        <div class="menupage-productcard06">
          <img src="/playground_assets/backgroundi2717-zn1u-500h.png" alt="BackgroundI2717"
            class="menupage-background07" />
          <span class="menupage-text073">
            <span>
              Product Description - Aquafina 16.9 oz bottled water.
            </span>
          </span>
          <span class="menupage-text075">
            <span>Bottled Water</span>
          </span>
          <div class="menupage-picture06">
            <img src="/playground_assets/lattepic01i2717-l6o-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic016" />
            <img src="\playground_assets\bottlewater.png" alt="Coffeepic01I2717"
              class="menupage-coffeepic01" />
          </div>
          <span class="menupage-text077"><span>$1.49</span></span>
          <button @click='addCart("menupage-text075", "menupage-text077")' class="menupage-addtocartbutton06">
            <img src="/playground_assets/primaryi2717-gm06-200h.png" alt="PrimaryI2717" class="menupage-primary06" />
            <span class="menupage-text079"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard07">
          <img src="/playground_assets/backgroundi2717-8za-500h.png" alt="BackgroundI2717"
            class="menupage-background08" />
          <span class="menupage-text081">
            <span>
             Product Description: Fresh expresso with a shot of any type of milk you'd like
            </span>
          </span>
          <span class="menupage-text083">
            <span>Latte</span>
          </span>
          <div class="menupage-picture07">
            <img src="/playground_assets/lattepic01i2717-y8e-300h.png" alt="Lattepic01I2717"
              class="menupage-lattepic017" />
            <img src="/playground_assets/lattepic01i2717-5qp6-300h.png" alt="Coffeepic01I2717"
              class="menupage-coffeepic011" />
          </div>
          <span class="menupage-text085"><span>$3.89</span></span>
          <button @click='addCart("menupage-text083", "menupage-text085")' class="menupage-addtocartbutton07">
            <img src="/playground_assets/primaryi2717-3w1b-200h.png" alt="PrimaryI2717" class="menupage-primary07" />
            <span class="menupage-text087"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard08">
          <img src="/playground_assets/backgroundi2717-4qrd-500h.png" alt="BackgroundI2717"
            class="menupage-background09" />
          <span class="menupage-text089">
            <span>
              Product Description - A freshly pulled shot of espresso
              layered with steamed whole milk and thick rich foam to
              offer a luxurious velvety texture and complex aroma.
            </span>
          </span>
          <span class="menupage-text091">
            <span>Cappuccino</span>
          </span>
          <div class="menupage-picture08">
            <img src="/playground_assets/coffeepic01i2717-8118-300h.png" alt="Coffeepic01I2717"
              class="menupage-coffeepic012" />
          </div>
          <span class="menupage-text093"><span>$4.00</span></span>
          <button @click='addCart("menupage-text091", "menupage-text093")' class="menupage-addtocartbutton08">
            <img src="/playground_assets/primaryi2717-qyuw-200h.png" alt="PrimaryI2717" class="menupage-primary08" />
            <span class="menupage-text095"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard09">
          <img src="/playground_assets/backgroundi2717-vbmf-500h.png" alt="BackgroundI2717"
            class="menupage-background10" />
          <span class="menupage-text097">
            <span>
              Product Description - Perfectly balanced with a golden
              crema, this intense espresso has a caramel like aroma,
              velvety body, earthy flavor and a bittersweet finish.
            </span>
          </span>
          <span class="menupage-text099">
            <span>Espresso</span>
          </span>
          <div class="menupage-picture09">
            <img src="/playground_assets/coffeepic01i2717-s39-300h.png" alt="Coffeepic01I2717"
              class="menupage-coffeepic013" />
          </div>
          <span class="menupage-text101"><span>$3.49</span></span>
          <button @click='addCart("menupage-text099", "menupage-text101")' class="menupage-addtocartbutton09">
            <img src="/playground_assets/primaryi2717-m9bi-200h.png" alt="PrimaryI2717" class="menupage-primary09" />
            <span class="menupage-text103"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard10">
          <img src="/playground_assets/backgroundi2717-zrxh-500h.png" alt="BackgroundI2717"
            class="menupage-background11" />
          <span class="menupage-text105">
            <span>
              Product Description - Freshly brewed coffee with the finest cream
            </span>
          </span>
          <span class="menupage-text107">
            <span>Coffee with Cream</span>
          </span>
          <div class="menupage-picture10">
            <img src="/playground_assets/coffeepic01i2717-qy1q-300h.png" alt="Coffeepic01I2717"
              class="menupage-coffeepic014" />
          </div>
          <span class="menupage-text109"><span>$3.99</span></span>
          <button @click='addCart("menupage-text107", "menupage-text109")' class="menupage-addtocartbutton10">
            <img src="/playground_assets/primaryi2717-ugo-200h.png" alt="PrimaryI2717" class="menupage-primary10" />
            <span class="menupage-text111"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-productcard11">
          <img src="/playground_assets/backgroundi2617-wdhl-500h.png" alt="BackgroundI2617"
            class="menupage-background12" />
          <span class="menupage-text113">
            <span>
              Product Description - One of our light, medium, dark,
              decaffeinated, or flavored brews of the day, brewed
              from only the top 1% of Arabica beans in the world.
            </span>
          </span>
          <span class="menupage-text115">
            <span>Black Coffee</span>
          </span>
          <div class="menupage-picture11">
            <img src="/playground_assets/lattepic01i2617-e67m-300h.png" alt="Lattepic01I2617"
              class="menupage-lattepic018" />
            <img src="/playground_assets/coffeepic01i2617-j9ra-300h.png" alt="Coffeepic01I2617"
              class="menupage-coffeepic015" />
          </div>
          <span class="menupage-text117"><span>$2.99</span></span>
          <button @click='addCart("menupage-text115", "menupage-text117")' class="menupage-addtocartbutton11">
            <img
              src="/playground_assets/primaryi2617-xzyn-200h.png"
              alt="PrimaryI2617"
              class="menupage-primary11"
            />
            <span class="menupage-text119"><span>Add to cart</span></span>
          </button>
        </div>
        <div class="menupage-menuheading">
          <span class="menupage-text121"><span>Our Menu</span></span>
          <img src="/playground_assets/menuunderlinei2617-hu5c-200h.png" alt="menuunderlineI2617"
            class="menupage-menuunderline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../main";

export default {
  name: 'Menupage2',
  metaInfo: {
    title: 'Super Generic Menu',
  },




  methods: {
    
    addCart(className, classPrice) {

      var itemName = document.getElementsByClassName(className)[0].innerText;
      var price = document.getElementsByClassName(classPrice)[0].innerText;
      price = Number(price.replace(/[^0-9\.-]+/g, ""));

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //we are signed in here
          const uid = user.uid;
          const email = user.email;

          console.log(itemName);
          console.log(price);
          console.log("uid be: " + uid);
          db.collection('cart').doc(uid).collection('cartItems').doc(itemName).set({
             itemName: itemName,
             price: price,
             quantity: 1,
            })

        }

      });

    }
    
  },

    
}

</script>

<style scoped>
.menupage-container {
  min-height: 100vh;
}

.menupage-menupage {
  width: 100%;
  height: 2575px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: var(--dl-color-default-1a1a1a);
}

.menupage-header {
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 94px;
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

.menupage-background {
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 94px;
  opacity: 0.75;
  position: absolute;
  box-shadow: 0px 2px 5px 0px rgba(48, 48, 48, 1);
}

.menupage-headinggroup {
  top: 27px;
  left: 165px;
  width: 1210px;
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

.menupage-navigationbar {
  top: 13px;
  left: 850px;
  width: 360px;
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

.menupage-text {
  left: 311px;
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

.menupage-text002 {
  left: 209px;
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

.menupage-text004 {
  left: 146px;
  color: rgba(52, 199, 89, 1);
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

.menupage-text006 {
  left: 63px;
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

.menupage-text008 {
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

.menupage-logo {
  top: 0px;
  left: 0px;
  width: 31px;
  height: 30px;
  position: absolute;
}

.menupage-text010 {
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

.menupage-graybox {
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 200px;
  position: absolute;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10000000149011612);
}

.menupage-divider {
  top: 122px;
  left: -6px;
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

.menupage-line {
  top: -0.9999253749847412px;
  left: 0px;
  width: 1440px;
  height: 1px;
  position: absolute;
}

.menupage-social-media {
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

.menupage-iconin {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}

.menupage-iconfb {
  top: 0px;
  left: 44px;
  width: 10px;
  height: 20px;
  position: absolute;
}

.menupage-icontw {
  top: 3px;
  left: 78.4761962890625px;
  width: 20px;
  height: 16px;
  position: absolute;
}

.menupage-pagenavigation {
  top: 88px;
  left: 461px;
  width: 472px;
  height: 15px;
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

.menupage-group86 {
  top: 0px;
  left: 0px;
  width: 472px;
  height: 15px;
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

.menupage-text012 {
  left: 210px;
  color: rgba(255, 255, 255, 0.75);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.menupage-text014 {
  left: 325px;
  color: rgba(255, 255, 255, 0.75);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.menupage-text016 {
  left: 444px;
  color: rgba(255, 255, 255, 0.75);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.menupage-text018 {
  left: 115px;
  color: rgba(255, 255, 255, 0.75);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.menupage-text020 {
  color: rgba(255, 255, 255, 0.75);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.menupage-logotitle {
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

.menupage-logo1 {
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

.menupage-vector {
  top: 10.2061767578125px;
  left: 0px;
  width: 31px;
  height: 20px;
  position: absolute;
}

.menupage-vector1 {
  top: 2.18115234375px;
  left: 15.9129638671875px;
  width: 5px;
  height: 7px;
  position: absolute;
}

.menupage-vector2 {
  top: 0px;
  left: 20.9864501953125px;
  width: 7px;
  height: 9px;
  position: absolute;
}

.menupage-text022 {
  top: 14px;
  left: 37px;
  color: rgba(52, 199, 89, 1);
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

.menupage-menusection2 {
  top: 1287px;
  left: 120px;
  width: 1200px;
  height: 1040px;
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

.menupage-productcard {
  top: 603px;
  left: 820px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background01 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text024 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text026 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic01 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-text028 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text030 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard01 {
  top: 603px;
  left: 410px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background02 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text032 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text034 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture01 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic011 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-text036 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton01 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary01 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text038 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard02 {
  top: 603px;
  left: 0px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background03 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text040 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text042 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture02 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic012 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-text044 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton02 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary02 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text046 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard03 {
  top: 126px;
  left: 820px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background04 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text048 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text050 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture03 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic013 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-text052 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton03 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary03 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text054 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard04 {
  top: 126px;
  left: 410px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background05 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text056 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text058 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture04 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic014 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-text060 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton04 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary04 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text062 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard05 {
  top: 126px;
  left: 0px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background06 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text064 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text066 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture05 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic015 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-text068 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton05 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary05 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text070 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-h2 {
  top: 0px;
  left: 321px;
  width: 558px;
  height: 66px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-text072 {
  left: 168px;
  color: rgb(217, 217, 217);
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-line1 {
  top: 64px;
  left: 249px;
  width: 60px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}

.menupage-menusection1 {
  top: 174px;
  left: 120px;
  width: 1200px;
  height: 1040px;
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

.menupage-productcard06 {
  top: 603px;
  left: 820px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background07 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text073 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text075 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture06 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic016 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-coffeepic01 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 234px;
  position: absolute;
  border-color: transparent;
}

.menupage-text077 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton06 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary06 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text079 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard07 {
  top: 603px;
  left: 410px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background08 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text081 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text083 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture07 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic017 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-coffeepic011 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 234px;
  position: absolute;
  border-color: transparent;
}

.menupage-text085 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton07 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary07 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text087 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard08 {
  top: 603px;
  left: 0px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background09 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text089 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text091 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture08 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-coffeepic012 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 234px;
  position: absolute;
  border-color: transparent;
}

.menupage-text093 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton08 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary08 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text095 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard09 {
  top: 126px;
  left: 820px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background10 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text097 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text099 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture09 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-coffeepic013 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 234px;
  position: absolute;
  border-color: transparent;
}

.menupage-text101 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton09 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary09 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text103 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard10 {
  top: 126px;
  left: 410px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background11 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text105 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text107 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture10 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-coffeepic014 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 234px;
  position: absolute;
  border-color: transparent;
}

.menupage-text109 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton10 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary10 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text111 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-productcard11 {
  top: 126px;
  left: 0px;
  width: 380px;
  height: 437px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-background12 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 437px;
  position: absolute;
  border-color: transparent;
  border-radius: 6px;
}

.menupage-text113 {
  top: 296px;
  left: 20px;
  color: rgba(179, 179, 179, 1);
  width: 337px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-text115 {
  top: 252px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  width: 270px;
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-picture11 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 226px;
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
  background-color: rgba(196, 196, 196, 1);
}

.menupage-lattepic018 {
  top: -10px;
  left: -18.4571533203125px;
  width: 417px;
  height: 241px;
  position: absolute;
  border-color: transparent;
}

.menupage-coffeepic015 {
  top: 0px;
  left: 0px;
  width: 380px;
  height: 234px;
  position: absolute;
  border-color: transparent;
}

.menupage-text117 {
  top: 364px;
  left: 20px;
  color: rgba(50, 215, 75, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-addtocartbutton11 {
  top: 365px;
  left: 260px;
  width: 100px;
  height: 32px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  cursor: pointer;
}

.menupage-primary11 {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 32px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}

.menupage-text119 {
  top: 10px;
  left: 15px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-menuheading {
  top: 0px;
  left: 321px;
  width: 558px;
  height: 66px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}

.menupage-text121 {
  left: 187px;
  color: rgba(217, 217, 217, 1);
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.menupage-menuunderline {
  top: 64px;
  left: 249px;
  width: 60px;
  height: 2px;
  position: absolute;
  border-color: transparent;
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

.main-desktop-text042 {
  left: 80px;
  color: rgba(52, 199, 89, 1);
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
  height: 200px;
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
}</style>
