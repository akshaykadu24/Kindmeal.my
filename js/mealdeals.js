import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

let data= [
    {
        img : 'https://images.unsplash.com/photo-1618213957768-7789409b9dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title : 'Pizza',
        shop_name : 'PC Studio Cafe',
        location : 'Mumbai',
        details : 'We indulge you in a delightful meat-free Western culinary experience within a cozy ambience, while also offering plant-based cooki..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star_grey.png'],
        contains :['https://www.kindmeal.my/images/icon_egg_disabled.png','https://www.kindmeal.my/images/icon_milk.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '20%',
        price : 399
    },
    {
        img : 'https://images.unsplash.com/photo-1569706971632-fd1fdb494764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title : 'Milk bread',
        shop_name : 'Dining Bowl ',
        location : 'pune',
        details : 'Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png'],
        contains :['https://www.kindmeal.my/images/icon_egg_disabled.png','https://www.kindmeal.my/images/icon_milk.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '15%',
        price : 159
    },
    {
        img : 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title : 'Maggie',
        shop_name : 'The Black Cat Cafe',
        location : 'Mumbai',
        details : 'Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star_grey.png'],
        contains :['https://www.kindmeal.my/images/icon_egg_disabled.png','https://www.kindmeal.my/images/icon_milk_disabled.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '20%',
        price : 79
    },
    {
        img : 'https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title : 'burger',
        shop_name : 'Ring Zhi Vegetarian Restaurant',
        location : 'pune',
        details : 'This place brings back memories to those days where we would have such delicious authentic meals for festive eats. Select from AN..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star_half.png'],
        contains :['https://www.kindmeal.my/images/icon_egg_disabled.png','https://www.kindmeal.my/images/icon_milk_disabled.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '20%',
        price : 129
    },
    {
        img : 'https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title : 'Egg maggie',
        shop_name : 'Juve Wellness Puchong',
        location : 'Mumbai',
        details : 'Select from Ala Carte meal items from the menu, served with a cup of Wellness Tea! Featured food menu items include: Juve Four Se..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star_half.png'],
        contains :['https://www.kindmeal.my/images/icon_egg.png','https://www.kindmeal.my/images/icon_milk_disabled.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '15%',
        price : 119
    },
    {
        img : 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        title : 'Pasta',
        shop_name : 'Rawsome',
        location : 'Mumbai',
        details : 'Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience. Indulge in a satisfying mea..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star_half.png'],
        contains :['https://www.kindmeal.my/images/icon_egg_disabled.png','https://www.kindmeal.my/images/icon_milk.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '20%',
        price : 139

    },
    {
        img : 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        title : 'Ice cream',
        shop_name : 'PCLO Cafe',
        location : 'pune',
        details : 'Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png'],
        contains :['https://www.kindmeal.my/images/icon_egg_disabled.png','https://www.kindmeal.my/images/icon_milk.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '20%',
        price : 199
    },
    {
        img : 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25hY2tzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title : 'Cutlet',
        shop_name : 'Croutons Cafe',
        location : 'pune',
        details : 'Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: • ..',
        rating : ['https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star.png','https://www.kindmeal.my/images/icon_star_half.png'],
        contains :['https://www.kindmeal.my/images/icon_egg.png','https://www.kindmeal.my/images/icon_milk.png','https://www.kindmeal.my/images/icon_alcohol_disabled.png'],
        discount : '15%',
        price : 210
    }
]

let searching = (search,categories,loca) =>{
    event.preventDefault()
    
    let filter_search = data.filter((elem)=>{
        // console.log(elem.title,search.value)
        return elem.title == search.value
        })
    // let filter_categories = filter_search.filter((elem)=>{
    //     return elem
    // })
    // let filter_loca = filter_categories.filter((elem)=>{
    //     return elem
    // })
    console.log(filter_search)
    append(filter_search)
}

let search = document.getElementById('search')

let categories = document.getElementById('categories').value
let loca = document.getElementById('location').value
search_deals.addEventListener('click',()=>{
    
    searching(search,categories,loca)
})







let doc = (tag) =>{
    return document.createElement(tag)
}
let container = document.getElementById('container')
let cart = JSON.parse(localStorage.getItem('cart')) || []
let append = (data) =>{
    container.innerHTML = null
    data.forEach(({img,title,shop_name,location,details,rating,contains,discount,price})=>{
        let aimg = doc('img')
        aimg.src = img
        aimg.setAttribute('id','main_img')
        let atitle = doc('h1')
        atitle.innerText = title
        let heading_div = doc('div')
        heading_div.setAttribute('id','heading_div')
        let ashop_name = doc('h2')
        ashop_name.innerText = `${shop_name} - `
        let alocation = doc('h3')
        alocation.innerText = location
        heading_div.append(ashop_name,alocation)
        let adetails = doc('p')
        adetails.innerText = details
        let button_div = doc('div')
        button_div.setAttribute('id','button_div')
        let button = doc('button')
        button.innerText = 'Add to Cart'
        let addcart = (el) =>{
            console.log('akshay')
            cart.push(el)
            localStorage.setItem('cart',JSON.stringify(cart))
        }
        button.addEventListener('click',()=>{
            addcart({img,title,shop_name,location,details,rating,contains,discount,price})
        })


        let arating = doc('div')
        arating.setAttribute('id','rating_div')
        let rating_func = (rating) =>{
            
            rating.forEach((elem) =>{
                console.log('ak')
                let img1 = doc('img')
                img1.src = elem
                let star_div = doc('div')
                star_div.append(img1)
                arating.append(star_div)
            })
        }
        rating_func(rating)
        button_div.append(button,arating)

        let down_div =  doc('div')
        down_div.setAttribute('id','down_div')

        let acontains = doc('div')
        acontains.setAttribute('id','contain_div')
        let contain_func = (contains) =>{
            contains.forEach((elem) =>{
                let img2 = doc('img')
                img2.src = elem
                let contain_div = doc('div')
                contain_div.append(img2)
                acontains.append(contain_div)
            })
        }
        contain_func(contains)
        let adiscount = doc('p')
        adiscount.setAttribute('id','disc')
        adiscount.innerHTML = `KindMeal Discount <p>${discount}</p>`
        let aprice = doc('p')
        aprice.setAttribute('id','price')
        aprice.innerHTML = `Price <h1>${price}</h1>`
        down_div.append(acontains,adiscount,aprice)
        let div = doc('div')
        let data_div = doc('div')
        data_div.setAttribute('id','data_div')
        data_div.append(atitle,heading_div,adetails,button_div,down_div)
        div.append(aimg,data_div)
        container.append(div)


    })
}

append(data)