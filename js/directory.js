import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();



let usrName = JSON.parse(localStorage.getItem("username"));
if (usrName !== null) {
	document.getElementById("left").innerHTML = null;
	let box = document.createElement("div");
    box.style="display:flex;justify-content:space-between;align-items:center;color:gray"

	let capImg = document.createElement("img");
	capImg.src = "https://www.kindmeal.my/images/icon_notice.png";
	capImg.style = "height:30px";

	let desc = document.createElement("p");
	desc.innerText = "Hi, " + usrName + "!";
    desc.style="padding-top: 15px;font-size:18px"

	box.append(capImg, desc);
	document.getElementById("left").append(box);
}



let directoryPhotos1 = [
	"https://www.kindmeal.my/photos/item/0/362-3912-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4147-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4145-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3908-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3924-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4148-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3930-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3917-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3931-m.jpg",
];

let directoryPhotos1Names = [
	"Quinoa-Brown Rice Kimbap 藜麦糙米饭卷",
	"Seaweed Tomato Mee Hoon 海苔番茄米粉",
	"AENON Assam Laksa 爱能亚参拉沙",
	"Bean Curd Barley Soup 腐竹薏米水",
	"AENON Veggie Wrap 爱能蔬菜卷",
	"Seaweed Fish Brown Rice Porridge 紫菜鱼片糙米粥",
	"Organic Black Bean Noodle Soup 有机黑豆汤",
	"Claypot Mushroom Brown Rice 瓦煲野菌糙米饭",
	"Turmeric Nyonya Laksa 黄姜娘惹拉沙",
];

let directoryPhotos2 = [
	"https://www.kindmeal.my/photos/item/0/362-3927-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3911-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4143-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3914-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3928-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3929-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3922-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3925-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4150-m.jpg",
];

let directoryPhotos2Names = [
	"Flower Tea (菊花,玫瑰,薰衣草)",
	"Quinoa-Brown Rice Tuna Kimbap 吞拿藜麦糙米饭卷",
	"Healthy Steamboat 养身火锅",
	"Alfalfa Salad Inari 苜蓿沙拉甜豆包",
	"Misai Kucing Tea 猫须早茶",
	"Red Jujube Longan Wolfberry Tea 红枣桂圆枸杞茶",
	"Pumpkin Sago 金瓜西米露",
	"Banana Almond Frappe 杏仁香蕉刨冰",
	"Yam Rice With Herbal Soup 香芋饭配药膳汤",
];

function directoryFoodMenu(pic, foodname) {
	this.foodImage = pic;
	this.foodName = foodname;
	this.restaurantName = "Veggielicious Thai Cuisine";
	this.placeName = "Petaling Jaya, Selangor";
}

let directoryFoodMenu1arr = [],
	directoryFoodMenu2arr = [];
for (let i = 0; i < directoryPhotos1.length; i++) {
	let obj = new directoryFoodMenu(
		directoryPhotos1[i],
		directoryPhotos1Names[i]
	);
	let obj2 = new directoryFoodMenu(
		directoryPhotos2[i],
		directoryPhotos2Names[i]
	);
	directoryFoodMenu1arr.push(obj);
	directoryFoodMenu2arr.push(obj2);
}
// console.log(directoryFoodMenu1arr,directoryFoodMenu2arr)

let menuContainer1 = document.getElementById("foodMenuDiv1");
let menuContainer2 = document.getElementById("foodMenuDiv2");

directoryFoodMenu1arr.map((el) => {
	let box = document.createElement("div");
	box.setAttribute("class", "foodMenuBox");

	let photo = document.createElement("img");
	photo.src = el.foodImage;

	let fName = document.createElement("h6");
	fName.innerText = el.foodName;
	fName.style = "font-weight:bold";
	fName.style="font-size:15px"

	let restName = document.createElement("p");
	restName.innerText = el.restaurantName;

	let pName = document.createElement("p");
	pName.innerText = el.placeName;

	box.append(photo, fName, restName, pName);

	menuContainer1.append(box);
});

directoryFoodMenu2arr.map((el) => {
	let box = document.createElement("div");
	box.setAttribute("class", "foodMenuBox");

	let photo = document.createElement("img");
	photo.src = el.foodImage;

	let fName = document.createElement("h6");
	fName.innerText = el.foodName;
	fName.style = "font-weight:bold;margin-bottom:10px;font-size:15px";

	let restName = document.createElement("p");
	restName.innerText = el.restaurantName;

	let pName = document.createElement("p");
	pName.innerText = el.placeName;

	box.append(photo, fName, restName, pName);

	menuContainer2.append(box);
});
