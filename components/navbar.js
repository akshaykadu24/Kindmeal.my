let navbar = () => {
  return ` 
    <div id="upr">
            <div id="logo"><img src="./navbar/logo.PNG" alt="" /></div>
            <div id="social">
           <img src="./navbar/social_1.jpg" alt="" />
           <a href="https://www.facebook.com/KindMeal.my"><img src="./navbar/social_2.jpg" alt="" /></a>
           <a href="https://twitter.com/KindMeal"><img src="./navbar/social_3.jpg" alt="" /></a>
            </div>
            <div id="loginAndsignup">
              <p>login</p>
              <button>Facebook</button>
              <button>Email</button>
              <p>Signup</p>
            </div>
          </div>
          <div id="lower">
            <div>Home</div>
            <div>Meal Deals</div>
            <div>KindMoments</div>
            <div>Hot Picks</div>
            <div>Recipes</div>
            <div>Directory</div>
            <div>Articles</div>
            <div>Help</div>
          </div>`;
};

export default navbar;
