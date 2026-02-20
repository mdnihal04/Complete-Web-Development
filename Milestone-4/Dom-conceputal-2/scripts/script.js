let thrivingList = [];
let strugglingList = [];

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count")
let strugglingCount = document.getElementById("struggling-count");

const allFilterBtn = document.getElementById("all-filter-button");
const thrivingFilterButton = document.getElementById("thriving-filter-button");
const strugglingFilterButton = document.getElementById("struggling-filter-button");


const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");


function calculateCount(){
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount();


function toggleStyle(id){
    allFilterBtn.classList.remove("bg-black", "text-white");
    thrivingFilterButton.classList.remove("bg-black", "text-white");
    strugglingFilterButton.classList.remove("bg-black", "text-white");


    allFilterBtn.classList.add("bg-gray-300", "text-black");
    thrivingFilterButton.classList.add("bg-gray-300", "text-black");
    strugglingFilterButton.classList.add("bg-gray-300", "text-black");

    const selected = document.getElementById(id);
    selected.classList.remove("bg-gray-300", "text-black");
    selected.classList.add("bg-black", "text-white");
    
}