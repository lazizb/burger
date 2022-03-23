const product = {
    plainBurger:{
        name: "Гамбургер Простой",
        price:  10000,
        amount: 0,
        calory: 400, 
        get CalPrice() {
            return this.amount * this.price
        },
        get CalcCalory () {
             return this.amount * this.calory
        }
    },
    freshBurger:{
        name: "Гамбургер Фреш",
        price:  20500,
        amount: 0,
        calory: 500, 
        get CalPrice() {
            return this.amount * this.price
        },
        get CalcCalory () {
             return this.amount * this.calory
        }
    },
    freshCombo:{
        name: "Фреш Комбо",
        price:  31900,
        amount: 0,
        calory: 700, 
        get CalPrice() {
            return this.amount * this.price
        },
        get CalcCalory () {
             return this.amount * this.calory
        }
    }
}
const plusOrMinusBtns = document.querySelectorAll('.main__product-btn');

plusOrMinusBtns.forEach(item => {
    item.addEventListener("click", function () {
        const parent = this.closest('.main__product');
        const parentId = parent.getAttribute("id");
        let out = parent.querySelector('.main__product-num');
        const price = parent.querySelector('.main__product-price span');
        const calory = parent.querySelector('.main__product-kcall span')
        let elementData = item.getAttribute('data-symbol');

        if (elementData == "+" && product[parentId].amount < 10) {
            product[parentId].amount++;
        }else if (elementData == "-" && product[parentId].amount > 0){
            product[parentId].amount--;
        }
        out.innerText = product[parentId].amount;
        price.innerText = product[parentId].CalPrice;
        calory.innerText = product[parentId].CalcCalory;
    })
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const productExtra = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        calory: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        calory: 10
    },
    cheese: {
        name: "Сыр ",
        price: 400,
        calory: 30
    },
}


const checboxes = document.querySelectorAll('.main__product-checkbox');

checboxes.forEach(checboxe => {
    checboxe.addEventListener('click', function () {
        const parent = checboxe.closest('.main__product');
        const parentId = parent.getAttribute('id');
        const price = parent.querySelector('.main__product-price span');
        const calory = parent.querySelector('.main__product-kcall span');
        const elData = checboxe.getAttribute('data-extra');         
        
        product[parentId][elData] = checboxe.checked;
        
        
        if (product[parentId][elData] == true) {
            product[parentId].price += productExtra[elData].price;
            product[parentId].calory += productExtra[elData].calory
        }else if (product[parentId][elData] == false) {
            product[parentId].price -= productExtra[elData].price;
            product[parentId].calory -= productExtra[elData].calory
            
        }
         
        price.innerText = product[parentId].CalPrice;
        calory.innerText = product[parentId].CalcCalory;
    })
});



