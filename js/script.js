/* Show and hide latest changes - buttons on portfolio page*/

const changesButton = document.querySelectorAll(".changes");
const hideButton = document.querySelectorAll(".hide");
const lists = document.querySelectorAll(".list");

for(let i = 0; i < changesButton.length; i++) {

    for(let i = 0; i < lists.length; i++) {

        for(let i = 0; i < hideButton.length; i++) {

            changesButton[i].onclick = function () {
                lists[i].classList.add("show-list");
                changesButton[i].style.display = "none";
                hideButton[i].style.display = "block";
            }
    
            hideButton[i].onclick = function () {
                lists[i].classList.remove("show-list");
                changesButton[i].style.display = "block";
                hideButton[i].style.display = "none";
            }
        }   
    }
}


