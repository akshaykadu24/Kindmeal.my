import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();




let data= [
    {
        img : 'https://www.kindmeal.my/photos/recipe/108/108160-16367-m.jpg',
        title : 'Pasta',
        details:["Tunisian Pasta"],
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
    },
    {
        img : 'https://www.kindmeal.my/photos/recipe/122/122087-18943-m.jpg',
        title : "Sandwich",
        details:["Grilled Peanut Butter Sandwich"]   ,
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],     
    },
    {
        img : 'https://www.kindmeal.my/photos/recipe/1039/1039477-58910-m.jpg',
        title : 'Cup cake',
        details:["Peanut Butter Cups"],
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
        
    },
    {
        img : 'https://www.kindmeal.my/photos/recipe/122/122905-19102-m.jpg',
        title : 'Milkshake',
        details:["Mango Cocunut Baido milkshake"],
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
        
        
       
    },
    {
        img : 'https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title : 'Maggie',
        details:["Vegie Oat Maggi"],
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
        
        
    },
    {
        img : 'https://www.kindmeal.my/photos/recipe/112/112994-17411-m.jpg',
        title : 'Ice cream',
        details:["Hot Orange Mocha"],
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
        

    },
    {
        img : 'https://www.kindmeal.my/photos/recipe/68/68864-7304-m.jpg',
        title : 'Burger',
        details:["Vegie Oat Burger"],
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
       
    },
    {
        img : 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25hY2tzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title : 'Cutlet',
        details:"Meat Free Cutlets",
        time:["https://www.kindmeal.my/images/icon_time_small.png","30min"],
        hearts:["https://www.kindmeal.my/images/icon_heart_small.png","0"],
        comment:["https://www.kindmeal.my/images/icon_commentbubble_small.png","0"],
    }
];







let searching = (search) =>{
    event.preventDefault()

   
    
    let filter_search = data.forEach((elem,i)=>{
        // console.log(elem.title,search.value)
        if(data[i].title==search){
            console.log(data[i]);

            append(data[i]);
        }

        
        })
    
}



let select = document.getElementById('select').value
document.getElementById("search_recipes").addEventListener('click',()=>{
    let search1 = document.getElementById('search').value
    searching(search1);
    
})

const append = (data) => {
 
    document.getElementById("big_div").innerHTML=null;
    // document.getElementById("getting").innerHTML=null;

      
    
     
        let div = document.createElement("div");

        let title = document.createElement("h1");
        title.innerText = data.title;
        title.setAttribute("class","title")

        let img_div = document.createElement("div");
        img_div.setAttribute("class","img_div");

        let img = document.createElement("img");
        img.setAttribute("class","food_image")
        img.src = data.img;
        img_div.appendChild(img);



        // let title = document.createElement("h3");
        // title.innerText = data.title;

        
        let detail_div = document.createElement("div");
        detail_div.setAttribute("class","detail_div");

        let details = document.createElement("p");
        details.setAttribute("class","details");
        details.innerText = data.details;
        detail_div.appendChild(details);

        // let details = document.createElement("h6");
        // details.innerText = data.details;

        // let time = document.createElement("img");
        // time.src = data.time[0];


        let aaaddd = document.createElement("div");
        aaaddd.setAttribute("class","aaaddd");

        //inside time

        let time = document.createElement("div");
        time.setAttribute("class","ttt_div");

        let time_image = document.createElement("img");
        time_image.setAttribute("class","time_image")
        time_image.src = data.time[0];
        time.appendChild(time_image);

        //append time and class

        let how_time = document.createElement("div");
        how_time.setAttribute("class","how_time")
        how_time.innerText = data.time[1];
        time.appendChild(how_time);

        aaaddd.appendChild(time);
        ////////////////////

//inside hearts

        let hearts = document.createElement("div");
      hearts.setAttribute("class","hhh_div")

        let hearts_image = document.createElement("img");
        hearts_image.setAttribute("class","hearts_image")
        hearts_image.src = data.hearts[0];
        hearts.appendChild(hearts_image);


        let how_hearts = document.createElement("div");
        how_hearts.setAttribute("class","how_hearts")
        how_hearts.innerText = data.hearts[1];
        hearts.appendChild(how_hearts);

        aaaddd.appendChild(hearts);


///inside comment


let comment = document.createElement("div");
         comment.setAttribute("class","ccc_div");

         let comment_image = document.createElement("img");
        comment_image.setAttribute("class","comment_image")
        comment_image.src = data.comment[0];
        comment.appendChild(comment_image);



        let how_comment = document.createElement("div");
        how_comment.setAttribute("class","how_comment")
        how_comment.innerText = data.comment[1];
        comment.appendChild(how_comment);

        aaaddd.appendChild(comment);





        

        

        //append image and class
        

        ////////////////////////////////////////////////////

      //append image and class of hearts

      


        ////////////////////////////////////////////////////////



        // let hearts = document.createElement("img");
        // hearts.src = data.hearts[0];

        





        div.append(title,img_div,detail_div,aaaddd);
        document.getElementById("getting").append(div);
  
    // let div = document.createElement("div");

    // let img = document.createElement("img");
    // img.

}
