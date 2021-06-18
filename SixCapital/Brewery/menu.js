const menu = [

    {
      id: 1,
      title: "Hamburger doublestack",
      category: "lunch",
      price: 12.99,
      img: "./images2/item-8.jpeg",
      desc: `the American classic-two quarter pounders with side fixens `,
    },
    {
      id: 2,
      title: "Street Tacos",
      category: "dinner",
      price: 13.99,
      img: "./images2/item-4.jpeg",
      desc: `Street taco options are grilled chicken, shredded beef or smoked tofu.  A combination of these can be ordered as well. `,
    },
    {
      id: 3,
      title: "BBQ brisket",
      category: "dinner",
      price: 19.99,
      img: "./images2/item-1.jpeg",
      desc: `Chef special long smoked BBQ brisket.  Mouth watering good.`,
    },
    {
      id: 4,
      title: "marinated chicken",
      category: "dinner",
      price: 14.99,
      img: "./images2/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 5,
      title: "Egg Salad Sandwich",
      category: "lunch",
      price: 12.99,
      img: "./images2/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "bacon & egg sandwich",
      category: "lunch",
      price: 9.99,
      img: "./images2/item-7.jpeg",
      desc: `Breakfast for lunch.  Everything tastes better with bacon. `,
    },
    {
      id: 7,
      title: "Teriyaki steak",
      category: "dinner",
      price: 29.99,
      img: "./images2/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const sectionCenter=document.querySelector(".section-center");
const btnContainer=document.querySelector(".btn-container");

//Display all items when page loads
window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu);
  displayMenuButtons();
}); 
function displayMenuItems(menuItems){  
    let displayMenu=menuItems.map(function(item){
        //console.log(item);
        return `<article class="menu-item">
           <img src=${item.img} alt=${item.title} class="photo"/>
           <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
             </div>
           </article>`;
    });
    displayMenu=displayMenu.join('');
    sectionCenter.innerHTML=displayMenu;                        
}
function displayMenuButtons(){
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
}