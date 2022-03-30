// document.querySelector("#search-input").addEventListener('input',filterList);

// function filterList (){
//     const searchInput = document.querySelector('#search-input');
//     const filter = searchInput.ariaValueMax.toLocaleLowerCase();
//     const listItems = document.querySelectorAll('.food-items');
//     listItems.forEach((item) =>{
//         let text = item.textContent;
//         if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
//             item.style.display="";
//         }
//         else{
//             item.style.display= 'none';
//         }
//     })

// }
document.querySelector("#search-input").addEventListener('input',filterList);

function filterList (){
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.ariaValueMax.toLocaleLowerCase();
    const listItems = document.querySelectorAll('.food-items');
    listItems.forEach((featured) =>{
        let text = featured.textContent;
        if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
            featured.style.display="";
        }
        else{
            featured.style.display= 'none';
        }
    })

}

// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("search-input");
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByClassName(".food-items");
//     li = ul.getElementsByClassName(".food-img");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByClassName(".food-name")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }