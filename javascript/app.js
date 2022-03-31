

const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}



// JavaScript code
function search() {
	let input = document.getElementById('search-input').value;
	input=input.toLowerCase();
	let x = document.getElementsByClassName('food-name');
	var item = document.getElementsByClassName('food-item')
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			item[i].style.display="none";
    
		}
		else {
		item[i].style.display="grid";				
		}
	}
    input.value="";
}

//sort function

