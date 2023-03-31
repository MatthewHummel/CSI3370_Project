<template>
  <div class="my-cart-container">
    <div class="my-cart-my-cart">
      <div class="main-desktop-header1">
        <img
          src="/playground_assets/background1922-iww.svg"
          alt="background1922"
          class="main-desktop-background"
        />
        <div class="main-desktop-headinggroup">
          <div class="main-desktop-navigationbar">
            <span class="main-desktop-text038"><span>My cart</span></span>
            <span class="main-desktop-text040"><span>My account</span></span>
            <span class="main-desktop-text042"><span><router-link to="/menu" exact>Menu</router-link></span></span>
            <span class="main-desktop-text044"><span><router-link to="/signup" exact>Sign up</router-link></span></span>
            <span class="main-desktop-text046"><span><router-link to="/home" exact>Home</router-link></span></span>
          </div>
          <img
            src="/playground_assets/logo1923-7x4p.svg"
            alt="Logo1923"
            class="main-desktop-logo"
          />
          <span class="main-desktop-text048">
            <span>Super generic cafe</span>
          </span>
        </div>
      </div>
      <div class="my-cart-mycartoverview">
        <span class="my-cart-text"><span>My cart</span></span>
        <img
          alt="divider2931"
          src="/playground_assets/divider2931-lwp9.svg"
          class="my-cart-divider"
        />
        <div class="my-cart-promocode">
          <img
            alt="Primary2617"
            src="/playground_assets/primary2617-sk5r-400w.png"
            class="my-cart-primary"
          />
          <img
            alt="Primary2617"
            src="/playground_assets/primary2617-6eb-200h.png"
            class="my-cart-primary1"
          />
          <span class="my-cart-text02"><span>Submit</span></span>
          <span class="my-cart-text04"><span>type here</span></span>
          <span class="my-cart-text06"><span>Promo code</span></span>
        </div>
        <img
          alt="divider2617"
          src="/playground_assets/divider2617-pls.svg"
          class="my-cart-divider1"
        />
        <div class="my-cart-orderbutton">
          <span class="my-cart-text08"><span>Place Order</span></span>
        </div>
        <div class="my-cart-checkoutprice">
          <span class="my-cart-text10">
            <span class="my-cart-text11">
              Total:
              <span v-html="raw6hrl"></span>
            </span>
            <span>$00.00</span>
          </span>
          <img
            alt="Line22617"
            src="/playground_assets/line22617-oxtl.svg"
            class="my-cart-line2"
          />
          <span class="my-cart-text13"><span>Tip: $0.00</span></span>
          <span class="my-cart-text15">
            <span class="my-cart-text16">
              Tax:
              <span v-html="raw13fq"></span>
            </span>
            <span>$0.00</span>
          </span>
          <span class="my-cart-text18">
            <span class="my-cart-text19">Discounts: -</span>
            <span>0%</span>
          </span>
          <span class="my-cart-text21">
            <span class="my-cart-text22">
              Subtotal:
              <span v-html="rawipkp"></span>
            </span>
            <span>$00.00</span>
          </span>
        </div>
        <div class="my-cart-cartitems">
          <div class="my-cart-item4">
            <div class="my-cart-productpicture3">
              <img
                alt="placeholder2617"
                src="/playground_assets/placeholder2617-uiu.svg"
                class="my-cart-placeholder3"
              />
            </div>
            <span class="my-cart-text39">
              <span>product_name</span>
            </span>
            <img
              alt="Trashicon2617"
              src="/playground_assets/trashicon2617-z96.svg"
              class="my-cart-trashicon3"
            />
            <div class="my-cart-quantitygroup3">
              <div class="my-cart-group333">
                <img
                  alt="Rectangle102617"
                  src="/playground_assets/rectangle102617-l56n-200h.png"
                  class="my-cart-rectangle103"
                />
                <span class="my-cart-text41">0</span>
              </div>
              <p class="my-cart-rectangle113">
                -
              </p>
              <p class="my-cart-rectangle123">
                +
              </p>
            </div>
            <span class="my-cart-text42"><span>$0.00</span></span>
          </div>
          <div class="my-cart-item3">
            <div class="my-cart-productpicture3">
              <img
                alt="placeholder2617"
                src="/playground_assets/placeholder2617-uiu.svg"
                class="my-cart-placeholder3"
              />
            </div>
            <span class="my-cart-text39">
              <span>product_name</span>
            </span>
            <img
              alt="Trashicon2617"
              src="/playground_assets/trashicon2617-z96.svg"
              class="my-cart-trashicon3"
            />
            <div class="my-cart-quantitygroup3">
              <div class="my-cart-group333">
                <img
                  alt="Rectangle102617"
                  src="/playground_assets/rectangle102617-l56n-200h.png"
                  class="my-cart-rectangle103"
                />
                <span class="my-cart-text41">0</span>
              </div>
              <p class="my-cart-rectangle113">
                -
              </p>
              <p class="my-cart-rectangle123">
                +
              </p>
            </div>
            <span class="my-cart-text42"><span>$0.00</span></span>
          </div>
          <div class="my-cart-item2">
            <div class="my-cart-productpicture3">
              <img
                alt="placeholder2617"
                src="/playground_assets/placeholder2617-uiu.svg"
                class="my-cart-placeholder3"
              />
            </div>
            <span class="my-cart-text39">
              <span>product_name</span>
            </span>
            <img
              alt="Trashicon2617"
              src="/playground_assets/trashicon2617-z96.svg"
              class="my-cart-trashicon3"
            />
            <div class="my-cart-quantitygroup3">
              <div class="my-cart-group333">
                <img
                  alt="Rectangle102617"
                  src="/playground_assets/rectangle102617-l56n-200h.png"
                  class="my-cart-rectangle103"
                />
                <span class="my-cart-text41">0</span>
              </div>
              <p class="my-cart-rectangle113">
                -
              </p>
              <p class="my-cart-rectangle123">
                +
              </p>
            </div>
            <span class="my-cart-text42"><span>$0.00</span></span>
          </div>
          <div class="my-cart-item1">
            <div class="my-cart-productpicture3">
              <img
                alt="placeholder2617"
                src="/playground_assets/placeholder2617-uiu.svg"
                class="my-cart-placeholder3"
              />
            </div>
            <span class="my-cart-text39">
              <span>product_name</span>
            </span>
            <img
              alt="Trashicon2617"
              src="/playground_assets/trashicon2617-z96.svg"
              class="my-cart-trashicon3"
            />
            <div class="my-cart-quantitygroup3">
              <div class="my-cart-group333">
                <img
                  alt="Rectangle102617"
                  src="/playground_assets/rectangle102617-l56n-200h.png"
                  class="my-cart-rectangle103"
                />
                <span class="my-cart-text41">0</span>
              </div>
              <p class="my-cart-rectangle113">
                -
              </p>
              <p class="my-cart-rectangle123">
                +
              </p>
            </div>
            <span class="my-cart-text42"><span>$0.00</span></span>
          </div>
        </div>
        <div class="main-desktop-footer">
        <div class="main-desktop-group14">
          <img
            src="/playground_assets/placeholderi921-no8m.svg"
            alt="placeholderI921"
            class="main-desktop-placeholder3"
          />
        </div>
        <div class="main-desktop-divider1">
          <img
            src="/playground_assets/linei921-umj.svg"
            alt="lineI921"
            class="main-desktop-line2"
          />
        </div>
        <div class="main-desktop-social-media">
          <img
            src="/playground_assets/iconini921-l7yt.svg"
            alt="iconinI921"
            class="main-desktop-iconin"
          />
          <img
            src="/playground_assets/iconfbi921-c75n.svg"
            alt="iconfbI921"
            class="main-desktop-iconfb"
          />
          <img
            src="/playground_assets/icontwi921-e5cf.svg"
            alt="icontwI921"
            class="main-desktop-icontw"
          />
        </div>
        <div class="main-desktop-logotitle">
          <div class="main-desktop-logo1">
            <img
              src="/playground_assets/vectori921-xr6a.svg"
              alt="VectorI921"
              class="main-desktop-vector15"
            />
            <img
              src="/playground_assets/vectori921-rwi.svg"
              alt="VectorI921"
              class="main-desktop-vector16"
            />
            <img
              src="/playground_assets/vectori921-w4kr.svg"
              alt="VectorI921"
              class="main-desktop-vector17"
            />
          </div>
          <span class="main-desktop-text086">Super generic cafe</span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCart',
  metaInfo: {
    title: 'Super Generic Cart',
  },
}
</script>

<style scoped>
.my-cart-container {
  min-height: 100vh;
}
.my-cart-my-cart {
  width: 100%;
  height: 1202px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: var(--dl-color-default-1a1a1a);
}
.my-cart-mycartoverview {
  top: 57px;
  left: 0px;
  width: 100%;
  height: 1144px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: var(--dl-color-default-1a1a1a);
}
.my-cart-text {
  top: 97px;
  left: 165px;
  color: rgba(217, 217, 217, 1);
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
.my-cart-divider {
  top: 876px;
  left: 1273.1292724609375px;
  width: 1114px;
  height: 0px;
  position: absolute;
}
.my-cart-promocode {
  top: 180px;
  left: 946px;
  width: 329px;
  height: 93.265625px;
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
.my-cart-primary {
  top: 57.515625px;
  left: 8px;
  width: 321px;
  height: 36px;
  position: absolute;
  border-color: rgba(52, 199, 89, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
}
.my-cart-primary1 {
  top: 57.515625px;
  left: 230.9700927734375px;
  width: 98px;
  height: 36px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}
.my-cart-text02 {
  top: 68px;
  left: 264.11376953125px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text04 {
  top: 68px;
  left: 23.10498046875px;
  color: var(--dl-color-default-lightgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text06 {
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-divider1 {
  top: 180px;
  left: 924px;
  width: 455px;
  height: 0px;
  position: absolute;
}
.my-cart-orderbutton {
  top: 768px;
  left: 1115px;
  width: 158px;
  height: 32px;
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
  background-color: rgba(52, 199, 89, 1);
}
.my-cart-text08 {
  top: 9px;
  left: 47.00007629394531px;
  color: var(--dl-color-default-darkgray);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-checkoutprice {
  top: 573px;
  left: 1095px;
  width: 182px;
  height: 165px;
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
.my-cart-text10 {
  top: 140px;
  left: 74px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text11 {
  font-weight: 400;
}
.my-cart-line2 {
  top: 135px;
  left: 0px;
  width: 180px;
  height: 0px;
  position: absolute;
}
.my-cart-text13 {
  top: 105px;
  left: 101px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text15 {
  top: 70px;
  left: 97px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text16 {
  font-weight: 400;
}
.my-cart-text18 {
  top: 35px;
  left: 58px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text19 {
  font-weight: 400;
}
.my-cart-text21 {
  left: 45px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-text22 {
  font-weight: 400;
}
.my-cart-cartitems {
  top: 185px;
  left: 158.532470703125px;
  width: 736.4674072265625px;
  height: 478px;
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
.my-cart-item4 {
  top: 395px;
  left: 7px;
  width: 729.4674072265625px;
  height: 100px;
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
.my-cart-productpicture {
  top: 0px;
  left: 0px;
  width: 174.20118713378906px;
  height: 100px;
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
  background-color: rgba(196, 196, 196, 1);
}
.my-cart-placeholder {
  top: -16px;
  left: 0px;
  width: 179px;
  height: 127px;
  position: absolute;
}
.my-cart-text24 {
  top: 34px;
  left: 188.8638916015625px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-trashicon {
  top: 31px;
  left: 688.0946655273438px;
  width: 41px;
  height: 38px;
  position: absolute;
}
.my-cart-quantitygroup {
  top: 34px;
  left: 442.0355224609375px;
  width: 108.87574005126953px;
  height: 33px;
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
.my-cart-group33 {
  top: 0px;
  left: 37.01768493652344px;
  width: 34.84023666381836px;
  height: 33px;
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
.my-cart-rectangle10 {
  top: 1px;
  left: 0px;
  width: 35px;
  height: 32px;
  position: absolute;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
}
.my-cart-text26 {
  left: 9.798921585083008px;
  color: rgba(255, 255, 255, 1);
  width: 15px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-rectangle11 {
  top: 16px;
  left: 0px;
  width: 22px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}
.my-cart-rectangle12 {
  top: 16px;
  left: 87.10052490234375px;
  width: 22px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}
.my-cart-text27 {
  top: 34px;
  left: 593.4615478515625px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: center;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-item3 {
  top: 260px;
  left: 7px;
  width: 729.4674072265625px;
  height: 100px;
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
.my-cart-productpicture1 {
  top: 0px;
  left: 0px;
  width: 174.20118713378906px;
  height: 100px;
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
  background-color: rgba(196, 196, 196, 1);
}
.my-cart-placeholder1 {
  top: -16px;
  left: 0px;
  width: 179px;
  height: 127px;
  position: absolute;
}
.my-cart-text29 {
  top: 34px;
  left: 188.8638916015625px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-trashicon1 {
  top: 31px;
  left: 688.0946655273438px;
  width: 41px;
  height: 38px;
  position: absolute;
}
.my-cart-quantitygroup1 {
  top: 34px;
  left: 442.0355224609375px;
  width: 108.87574005126953px;
  height: 33px;
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
.my-cart-group331 {
  top: 0px;
  left: 37.01768493652344px;
  width: 34.84023666381836px;
  height: 33px;
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
.my-cart-rectangle101 {
  top: 1px;
  left: 0px;
  width: 35px;
  height: 32px;
  position: absolute;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
}
.my-cart-text31 {
  left: 9.798921585083008px;
  color: rgba(255, 255, 255, 1);
  width: 15px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-rectangle111 {
  top: 16px;
  left: 0px;
  width: 22px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}
.my-cart-rectangle121 {
  top: 16px;
  left: 87.10052490234375px;
  width: 22px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}
.my-cart-text32 {
  top: 34px;
  left: 593.4615478515625px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: center;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-item2 {
  top: 125px;
  left: 7px;
  width: 729.4674072265625px;
  height: 100px;
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
.my-cart-productpicture2 {
  top: 0px;
  left: 0px;
  width: 174.20118713378906px;
  height: 100px;
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
  background-color: rgba(196, 196, 196, 1);
}
.my-cart-placeholder2 {
  top: -16px;
  left: 0px;
  width: 179px;
  height: 127px;
  position: absolute;
}
.my-cart-text34 {
  top: 34px;
  left: 188.8638916015625px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-trashicon2 {
  top: 31px;
  left: 688.0946655273438px;
  width: 41px;
  height: 38px;
  position: absolute;
}
.my-cart-quantitygroup2 {
  top: 34px;
  left: 442.0355224609375px;
  width: 108.87574005126953px;
  height: 33px;
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
.my-cart-group332 {
  top: 0px;
  left: 37.01768493652344px;
  width: 34.84023666381836px;
  height: 33px;
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
.my-cart-rectangle102 {
  top: 1px;
  left: 0px;
  width: 35px;
  height: 32px;
  position: absolute;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
}
.my-cart-text36 {
  left: 9.798921585083008px;
  color: rgba(255, 255, 255, 1);
  width: 15px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-rectangle112 {
  top: 16px;
  left: 0px;
  width: 22px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}
.my-cart-rectangle122 {
  top: 16px;
  left: 87.10052490234375px;
  width: 22px;
  height: 2px;
  position: absolute;
  border-color: transparent;
}
.my-cart-text37 {
  top: 34px;
  left: 593.4615478515625px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: center;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-item1 {
  top: -10px;
  left: 7px;
  width: 729.4674072265625px;
  height: 100px;
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
.my-cart-productpicture3 {
  top: 0px;
  left: 0px;
  width: 174.20118713378906px;
  height: 100px;
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
  background-color: rgba(196, 196, 196, 1);
}
.my-cart-placeholder3 {
  top: -16px;
  left: 0px;
  width: 179px;
  height: 127px;
  position: absolute;
  border-style: solid;
  border-width: 2px;
  border-color: white;
}
.my-cart-text39 {
  top: 21px;
  left: 210px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Alegreya;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-trashicon3 {
  top: 31px;
  left: 688.0946655273438px;
  width: 41px;
  height: 38px;
  position: absolute;
}
.my-cart-quantitygroup3 {
  top: 34px;
  left: 442.0355224609375px;
  width: 108.87574005126953px;
  height: 33px;
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
.my-cart-group333 {
  top: 0px;
  left: 37.01768493652344px;
  width: 34.84023666381836px;
  height: 33px;
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
.my-cart-rectangle103 {
  top: 1px;
  left: 0px;
  width: 35px;
  height: 32px;
  position: absolute;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
}
.my-cart-text41 {
  left: 9.798921585083008px;
  color: rgba(255, 255, 255, 1);
  width: 15px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Open Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.my-cart-rectangle113 {
    top: -18px;
    left: -2px;
    position: absolute;
    border-color: transparent;
    font-size: 53px;
    color: white;
}
.my-cart-rectangle123 {
  top: -18px;
    left: 87.10052490234375px;
    position: absolute;
    border-color: transparent;
    font-size: 53px;
    color: white;
}
.my-cart-text42 {
  top: 34px;
  left: 593.4615478515625px;
  color: var(--dl-color-default-secondary);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: center;
  font-family: Open Sans;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
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
  box-shadow: 0px 2px 5px 0px rgba(48, 48, 48, 1) ;
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
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10000000149011612) ;
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
</style>
