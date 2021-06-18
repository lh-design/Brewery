const menu = [
  {
    id: 1,
    title: "kolschal distancing",
    category: "brews",
    tprice: 2.00,
    price: 6.00,
    cprice: 11.00,
    img: "./images2/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },

  {
    id: 2,
    title: "aurora borealis",
    category: "brews",
    tprice: 2.00,
    price: 6.00,
    cprice: 11.00,
    img: "./images2/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },

  {
    id: 3,
    title: "Honey Habanero Brown",
    category: "brews",
    tprice: 2.00,
    price: 6.00,
    cprice: 11.00,
    img: "./images2/item-9.jpeg",
    desc: `American brown Ale with Wildflower honey and fresh habaneros!`,
  },

  {
    id: 4,
    title: "Powder Dump",
    category: "brews",
    tprice: 2.00,
    price: 6.00,
    cprice: 11.00,
    img: "./images2/item-11.jpeg",
    desc: `After a day on the slopes cruising through fresh Colorado powder, relax and try our cream ale loaded with Madagascar bourbon vanilla`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//Display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  /* displayMenuButtons();*/
});
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);
    return `<article class="menu-item">
           <img src=${item.img} alt=${item.title} class="photo"/>
           <div class="item-info">
              <header>
                <h4>${item.title}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
                </p>
              <div>
               <h4 class="price"><span>Taster . . . . . . . . . . .$${item.tprice}</span></h4>
               <h4 class="price"><span>Pint . . . . . . . . . . . . $${item.price}</span></h4>
               <h4 class="price"><span>Crowler . . . . . . . . .  $${item.cprice}</span></h4>
              </div>
             </div>
           </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}
/*function displayMenuButtons(){
    const categories=menu.reduce(
      function(values,item){
        if(!values.includes(item.category)){
          values.push(item.category);
        }
        return values;
      },["all"]
    );
  const categoryBtns=categories
      .map(function(category){
        return`<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
      })
      .join("");

      btnContainer.innerHTML=categoryBtns;
      const filterBtns=btnContainer.querySelectorAll(".filter-btn");

      filterBtns.forEach(function(btn){
        btn.addEventListener("click",function(e){
          //console.log(e.currentTarget.dataset.id);
          const category=e.currentTarget.dataset.id;
          const menuCategory=menu.filter(function(menuItem){
            //console.log(menuItem.category);
            if(menuItem.category===category){
             return menuItem;
            }
          });
          //console.log(menuCategory);
          if(category==="all"){
            displayMenuItems(menu);
          }else{
            displayMenuItems(menuCategory);
          }
        });
       });
}*/


