
import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();




let firstdetail1 = [
    {images: 'https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg',name: "Plant-Based Culinary Experience"},

    {images: 'https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg', name: 'Wholesome Western Experience'},

    {images: 'https://www.kindmeal.my/photos/deal/6/686-4475-m.jpg', name: 'Blend of Asian Flavors'},

    {images: 'https://www.kindmeal.my/photos/deal/6/679-4332-m.jpg', name: 'Garden Comfort Food'}
]


firstdetail1.map(function(el){
    let div = document.createElement('div');
    div.setAttribute('class', "totaldiv")
    let div1 = document.createElement('div')
    div.setAttribute("class", 'imgdiv')
    let img = document.createElement('img')
    img.src = el.images;
    img.setAttribute('class', 'hotimages3a')
    let title = document.createElement('p')
    title.innerText = el.name;
    title.setAttribute('class', 'hottitle3a')
    div1.append(img);
    div.append(div1,title)
    document.querySelector('#fourimagesa').append(div)

})


let seconddetail1a = [
    {image: 'https://www.kindmeal.my/photos/moment/16/16373-25137-m.jpg', dp:'https://www.kindmeal.my/photos/member/27/27959-m.jpg',title: 'melklm at Stars Picker Audio Cafe:',comment: 'Wonderful ambience, friendly attentive service and absolutely delicious food! Will definitely be back :)',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16360-25103-m.jpg', dp: 'https://www.kindmeal.my/photos/member/33/33871-m.jpg', title: 'Calvinyee at Greens Home Kitchen:',comment: '泰式青醬意大利面……微微的辣， 香濃的青醬，配上橄欖油去烹調，絕對好吃',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16352-25085-m.jpg',dp:'https://www.kindmeal.my/photos/member/30/30031-m.jpg',title: 'KateLai at Stars Picker Audio Cafe:', comment: 'Nice enviroment with nice food..and you can enjoy their headset too.', read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/15/15309-22533-m.jpg',dp:"https://www.kindmeal.my/photos/member/19/19456-m.jpg",title: 'RainbowTan at Martinos Dessert Room:' ,comment: 'Signature spaghetti in rich, creamy spinach sauce, with chewy button mushrooms and refreshing sundried tomatoes. Must try this pas..',read: 'Read Review »'},
]
append(seconddetail1a)
function append(data){


data.map(function(el){
    let maindiv = document.createElement('div')
    maindiv.setAttribute('class', 'alldiv3a')
    maindiv.style.cursor="pointer"
    // maindiv.addEventListener("click",function(){
    //     product(el)
    // })
    

    let imgdiv = document.createElement('div')
    imgdiv.setAttribute('class', 'imgs3a')

    let sectiontwodiv = document.createElement('div')
    sectiontwodiv.setAttribute('class', 'remaincontent')

    let titlediv = document.createElement('div')
    titlediv.setAttribute('class', 'com')

    let dpdiv = document.createElement('div')
    dpdiv.setAttribute('class', 'dpdiv3a')

    let namediv = document.createElement('div')
    namediv.setAttribute('class', 'namdiv3a')

    let cmntdiv = document.createElement('div')
    cmntdiv.setAttribute('class', 'cmntdiv')

    let image = document.createElement('img')
    image.src = el.image;
    image.setAttribute('class', 'im3a')

    let dp = document.createElement('img');
    dp.src = el.dp;
    dp.setAttribute('class', 'dp3a')

    let name = document.createElement('p');
    name.innerText = el.title;


    let cmnt = document.createElement('p')
    cmnt.innerText = el.comment;

    let read = document.createElement('p')
    read.innerText = el.read;
    read.setAttribute('class', 'read')

    imgdiv.append(image);

    dpdiv.append(dp);

    namediv.append(name);

    titlediv.append(dpdiv,namediv);

    cmntdiv.append(cmnt);

    sectiontwodiv.append(titlediv,cmntdiv,read)

    maindiv.append(imgdiv,sectiontwodiv)

    // console.log(maindiv);

    document.querySelector('#hotcomment2a').append(maindiv)
    


})
}

// function product(el){
//     localStorage.setItem("pro",JSON.stringify(el))
//     window.location.href="card.html"
// }

//  document.getElementById("btnlistr1").addEventListener("click",function(){
//     append(seconddetail1a)
//     window.location.href="card.html"
//  })



let thirddetail1a = [
    {images: 'https://www.kindmeal.my/photos/deal/5/529-2478-m.jpg',name: "Scrumptious Croutons"},

    {images: 'https://www.kindmeal.my/photos/deal/6/618-3514-m.jpg', name: 'Trendy Fusion Delights'},

    {images: 'https://www.kindmeal.my/photos/deal/6/665-4120-m.jpg', name: 'A Delicious Connection'},

    {images: 'https://www.kindmeal.my/photos/deal/5/574-3020-m.jpg', name: 'Mad About Food'}
]

thirddetail1a.map(function(el){
    let div = document.createElement('div');
    div.setAttribute('class', "totaldiv")
    let div1 = document.createElement('div')
    div.setAttribute("class", 'imgdiv')
    let img = document.createElement('img')
    img.src = el.images;
    img.setAttribute('class', 'hotimages3a')
    let title = document.createElement('p')
    title.innerText = el.name;
    title.setAttribute('class', 'hottitle3a')
    div1.append(img);
    console.log(div1)
    div.append(div1,title)
    // console.log(div)  
    document.querySelector('#fourimages12a').append(div)

})

let fourthdetail1a = [
    {image: 'https://www.kindmeal.my/photos/moment/16/16344-25057-m.jpg', dp:'https://www.kindmeal.my/photos/member/12/12420-m.jpg',title: 'MeiMei at Nandos:',comment: 'Nandos peri peri sauce is stated as vegetarian. But I guess its for the vegan too? I love the sauce!',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/15/15210-22289-m.jpg', dp: 'https://www.kindmeal.my/photos/member/33/33341-m.jpg', title: 'AiXiao shared a review:',comment: '最近吹起了Viggie Burger风，而阔别19年第一次在McDonald里吃Burger，以前都是吃薯条🍟和汽水，新加坡虽然有素Burger，但是也不是每一间都有，所以吹起素Burger风潮后，我开始在新加坡见一间进一间的去看。 终于今天在Khatib ..',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16185-24666-m.jpg',dp:'https://www.kindmeal.my/photos/member/28/28997-m.jpg',title: 'ElaineNeoh at 95 Degres Art Cafe:', comment: 'Vegetarian burger is nice but not valid for discount 😂😂 RM27', read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/15/15193-22252-m.jpg',dp:"https://www.kindmeal.my/photos/member/30/30213-m.jpg",title: 'VegYuan at AENON The Health Kitchen:' ,comment: 'Totally love the Cheesy Burger which caught me by surprise with the texture, taste, and appearance! Who will ever imagine and ex..',read: 'Read Review »'},
]

fourthdetail1a.map(function(el){
    let maindiv = document.createElement('div')
    maindiv.setAttribute('class', 'alldiv3a')

    let imgdiv = document.createElement('div')
    imgdiv.setAttribute('class', 'imgs3a')

    let sectiontwodiv = document.createElement('div')
    sectiontwodiv.setAttribute('class', 'remaincontent')

    let titlediv = document.createElement('div')
    titlediv.setAttribute('class', 'com')

    let dpdiv = document.createElement('div')
    dpdiv.setAttribute('class', 'dpdiv3a')

    let namediv = document.createElement('div')
    namediv.setAttribute('class', 'namdiv3a')

    let cmntdiv = document.createElement('div')
    cmntdiv.setAttribute('class', 'cmntdiv')

    let image = document.createElement('img')
    image.src = el.image;
    image.setAttribute('class', 'im3a')

    let dp = document.createElement('img');
    dp.src = el.dp;
    dp.setAttribute('class', 'dp3a')

    let name = document.createElement('p');
    name.innerText = el.title;


    let cmnt = document.createElement('p')
    cmnt.innerText = el.comment;

    let read = document.createElement('p')
    read.innerText = el.read;
    read.setAttribute('class', 'read')

    imgdiv.append(image);

    dpdiv.append(dp);

    namediv.append(name);

    titlediv.append(dpdiv,namediv);

    cmntdiv.append(cmnt);

    sectiontwodiv.append(titlediv,cmntdiv,read)

    maindiv.append(imgdiv,sectiontwodiv)

    // console.log(maindiv);

    document.querySelector('#hotcomment12a').append(maindiv)

})

let fifthdetail1a = [
    {images: 'https://www.kindmeal.my/photos/deal/6/621-3576-m.jpg',name: "Honestly Superb Meals"},

    {images: 'https://www.kindmeal.my/photos/deal/5/579-4524-m.jpg', name: 'Lush Comfort Food'},

    {images: 'https://www.kindmeal.my/photos/deal/6/621-3576-m.jpg', name: 'Fine Coffees & Fabulous Food'},

    {images: 'https://www.kindmeal.my/photos/deal/3/369-3697-m.jpg', name: 'Waffles & Snacks'}
]

fifthdetail1a.map(function(el){
    let div = document.createElement('div');
    div.setAttribute('class', "totaldiv")
    let div1 = document.createElement('div')
    div.setAttribute("class", 'imgdiv')
    let img = document.createElement('img')
    img.src = el.images;
    img.setAttribute('class', 'hotimages3a')
    let title = document.createElement('p')
    title.innerText = el.name;
    title.setAttribute('class', 'hottitle3a')
    div1.append(img);
    console.log(div1)
    div.append(div1,title)
    // console.log(div)  
    document.querySelector('#fourimages22a').append(div)

})

let sixthdetail1a = [
    {image: 'https://www.kindmeal.my/photos/moment/16/16373-25137-m.jpg', dp:'https://www.kindmeal.my/photos/member/10/10038-m.jpg',title: 'joyceleeol at The Good Co.:',comment: 'The Good Co . No : 29 Jalan Bangsar 5 Jalan Riong, Bangsar 59100 Kuala Lumpur Tel : 03 22026536 Business hour : 8.00am to 6.00pm O.. :)',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16313-24975-m.jpg', dp: 'https://www.kindmeal.my/photos/member/32/32600-m.jpg', title: 'Calvinyee at Greens Home Kitchen:',comment: '麻坡特产Otak 乌打（也称乌达，马来文:Otak-otak） 是一种以鱼肉泥与各种香料混合，放进香蕉叶或亚答叶包裹拿去炊蒸或烘烤的食品，在东南亚一带非常常见，也是马来西亚麻坡（Muar）的代表性美食。..',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16099-24499-m.jpg',dp:'https://www.kindmeal.my/photos/member/33/33595-m.jpg',title: 'TanKaiYian shared a review:', comment: 'This is so healthy and tasty!', read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16094-24482-m.jpg',dp:"https://www.kindmeal.my/photos/member/20/20155-m.jpg",title: 'SophieLee shared a review:' ,comment: '今早的点心早餐🌹🌹',read: 'Read Review »'},
]


sixthdetail1a.map(function(el){
    let maindiv = document.createElement('div')
    maindiv.setAttribute('class', 'alldiv3a')

    let imgdiv = document.createElement('div')
    imgdiv.setAttribute('class', 'imgs3a')

    let sectiontwodiv = document.createElement('div')
    sectiontwodiv.setAttribute('class', 'remaincontent')

    let titlediv = document.createElement('div')
    titlediv.setAttribute('class', 'com')

    let dpdiv = document.createElement('div')
    dpdiv.setAttribute('class', 'dpdiv3a')

    let namediv = document.createElement('div')
    namediv.setAttribute('class', 'namdiv3a')

    let cmntdiv = document.createElement('div')
    cmntdiv.setAttribute('class', 'cmntdiv')

    let image = document.createElement('img')
    image.src = el.image;
    image.setAttribute('class', 'im3a')

    let dp = document.createElement('img');
    dp.src = el.dp;
    dp.setAttribute('class', 'dp3a')

    let name = document.createElement('p');
    name.innerText = el.title;


    let cmnt = document.createElement('p')
    cmnt.innerText = el.comment;

    let read = document.createElement('p')
    read.innerText = el.read;
    read.setAttribute('class', 'read')

    imgdiv.append(image);

    dpdiv.append(dp);

    namediv.append(name);

    titlediv.append(dpdiv,namediv);

    cmntdiv.append(cmnt);

    sectiontwodiv.append(titlediv,cmntdiv,read)

    maindiv.append(imgdiv,sectiontwodiv)

    // console.log(maindiv);

    document.querySelector('#hotcomment22a').append(maindiv)

})


let seventhdetail1a = [
    {images: 'https://www.kindmeal.my/photos/deal/6/621-3576-m.jpg',name: "Salads, Sammich and Juices For 2"},

    {images: 'https://www.kindmeal.my/photos/deal/5/590-3137-l.jpg', name: 'Fine Coffees & Fabulous Food'},

    {images: 'https://www.kindmeal.my/photos/deal/5/574-3020-l.jpg', name: 'Mad About Food'},

    {images: 'https://www.kindmeal.my/photos/deal/6/698-4639-m.jpg', name: 'Nutritious Meets Delicious'}
]

seventhdetail1a.map(function(el){
    let div = document.createElement('div');
    div.setAttribute('class', "totaldiv")
    let div1 = document.createElement('div')
    div.setAttribute("class", 'imgdiv')
    let img = document.createElement('img')
    img.src = el.images;
    img.setAttribute('class', 'hotimages3a')
    let title = document.createElement('p')
    title.innerText = el.name;
    title.setAttribute('class', 'hottitle3a')
    div1.append(img);
    console.log(div1)
    div.append(div1,title)
    // console.log(div)  
    document.querySelector('#fourimages32a').append(div)

})


let eighthdetail1a = [
    {image: 'https://www.kindmeal.my/photos/moment/16/16314-24978-m.jpg', dp:'https://www.kindmeal.my/photos/member/10/10072-m.jpg',title: 'WongEeLynn at Wonder Poke Wonder Tea:',comment: 'Weekday lunch with a friend at my favourite poké bowl café. Loving the vegan options, very reasonable prices, large portions, gar.. :)',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/16/16224-24752-m.jpg', dp: 'https://www.kindmeal.my/photos/member/30/30530-m.jpg', title: 'CasaLatinaKL at Casa Latina Cafe & Cacao Lab:',comment: 'Our newly dressed " Ceviche" :)',read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/deal/4/469-1822-s.jpg',dp:'https://www.kindmeal.my/photos/member/10/10038-m.jpg',title: 'Sohini at Salad Atelier:', comment: 'In their menu, this is called French Toasts. But not to be mistaken with the typical French Toasts that was fried with coated egg ..', read: 'Read Review »'},

    {image: 'https://www.kindmeal.my/photos/moment/14/14891-21520-m.jpg',dp:"https://www.kindmeal.my/photos/member/11/11524-m.jpg",title: 'EstherLiew at GRAB Cafe:' ,comment: 'Since I have decided to go Vegan. Here are the options from grabcafe. Garden salad without eggs together with sesame sauce and also ..',read: 'Read Review »'},
]


eighthdetail1a.map(function(el){
    let maindiv = document.createElement('div')
    maindiv.setAttribute('class', 'alldiv3a')

    let imgdiv = document.createElement('div')
    imgdiv.setAttribute('class', 'imgs3a')

    let sectiontwodiv = document.createElement('div')
    sectiontwodiv.setAttribute('class', 'remaincontent')

    let titlediv = document.createElement('div')
    titlediv.setAttribute('class', 'com')

    let dpdiv = document.createElement('div')
    dpdiv.setAttribute('class', 'dpdiv3a')

    let namediv = document.createElement('div')
    namediv.setAttribute('class', 'namdiv3a')

    let cmntdiv = document.createElement('div')
    cmntdiv.setAttribute('class', 'cmntdiv')

    let image = document.createElement('img')
    image.src = el.image;
    image.setAttribute('class', 'im3a')

    let dp = document.createElement('img');
    dp.src = el.dp;
    dp.setAttribute('class', 'dp3a')

    let name = document.createElement('p');
    name.innerText = el.title;


    let cmnt = document.createElement('p')
    cmnt.innerText = el.comment;

    let read = document.createElement('p')
    read.innerText = el.read;
    read.setAttribute('class', 'read')

    imgdiv.append(image);

    dpdiv.append(dp);

    namediv.append(name);

    titlediv.append(dpdiv,namediv);

    cmntdiv.append(cmnt);

    sectiontwodiv.append(titlediv,cmntdiv,read)

    maindiv.append(imgdiv,sectiontwodiv)

    // console.log(maindiv);

    document.querySelector('#hotcomment32a').append(maindiv)

})


// ------------------login ---------------------------------------

let y = localStorage.getItem("loginstatus");
let logout = () => {
    let x = false;
    localStorage.setItem("loginstatus", x)
    window.location.href = "artical.html";
};
if (y) {
    let z = JSON.parse(localStorage.getItem("UserDetails"))
    let x = document.getElementById("loginAndsignup");
    x.innerHTML = null;
    let name = document.createElement("p");
    name.innerText = `${z[0].UserName}`;
    //   name.style.color = "black";
    let lgt = document.createElement("p");
    lgt.innerText = "logout";
    lgt.addEventListener("click", logout);
    x.append(name, lgt);
}

