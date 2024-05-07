const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let categories = [];

menu.forEach((item) => {
  if(!categories.includes(item.category)){
    categories.push(item.category);
  }
});

let btn_container_DOM = document.querySelector(".btn-container");
let section_center_DOM = document.querySelector(".section-center"); 

let button_DOM = document.createElement("button");
button_DOM.textContent = "All";
button_DOM.id = "All";
button_DOM.classList.add("btn", "btn-outline-dark", "btn-item");
button_DOM.addEventListener("click", ShowMenuRegardingCategory);
btn_container_DOM.appendChild(button_DOM);
button_DOM.click();

categories.forEach((category) => {
  let button_DOM = document.createElement("button");
  button_DOM.textContent = category;
  button_DOM.id = category;
  button_DOM.classList.add("btn", "btn-outline-dark", "btn-item");
  button_DOM.addEventListener("click", ShowMenuRegardingCategory);
  btn_container_DOM.appendChild(button_DOM);
});

function ShowMenuRegardingCategory(){
  section_center_DOM.innerHTML = "";
  console.log(this.id);

  menu.forEach((item) => {
      if(this.id === "All"){
        AddItemToMenu(item);
      }
      else
      {
        if(item.category === this.id){
          AddItemToMenu(item);
        }
      }
    }
  );
}

function AddItemToMenu(item){
  let div_menu_items_DOM = document.createElement("div");
  let div_menu_info_DOM = document.createElement("div");
  let div_menu_title_DOM = document.createElement("div");
  let div_menu_text_DOM = document.createElement("div");
  let img_menu_img_DOM = document.createElement("img"); 
  let h4_menu_title_DOM = document.createElement("h4"); 
  let h4_menu_price_DOM = document.createElement("h4"); 
  div_menu_items_DOM.classList.add("menu-items", "col-lg-6", "col-sm-12");
  div_menu_info_DOM.classList.add("menu-info");
  div_menu_title_DOM.classList.add("menu-title");
  h4_menu_price_DOM.classList.add("price");
  div_menu_text_DOM.classList.add("menu-text");
  h4_menu_title_DOM.textContent = item.title;
  h4_menu_price_DOM.textContent = item.price;
  div_menu_text_DOM.textContent = item.desc;
  img_menu_img_DOM.src = item.img;
  img_menu_img_DOM.alt = item.title;
  img_menu_img_DOM.classList.add("photo");
  div_menu_items_DOM.appendChild(img_menu_img_DOM);
  div_menu_title_DOM.appendChild(h4_menu_title_DOM);
  div_menu_title_DOM.appendChild(h4_menu_price_DOM);
  div_menu_info_DOM.appendChild(div_menu_title_DOM);
  div_menu_info_DOM.appendChild(div_menu_text_DOM);
  div_menu_items_DOM.appendChild(div_menu_info_DOM);
  section_center_DOM.appendChild(div_menu_items_DOM);
}


