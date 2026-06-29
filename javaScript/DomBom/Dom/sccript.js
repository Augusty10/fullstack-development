// Example 1 

  document.getElementById("changeTextButton").addEventListener('click' , function (){
      let paragraph = document.getElementById("myParagraph");
     paragraph.textContent=" the paragraph is changed "      
    
  })

  // example 2 

  document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citesList = document.getElementById("citiesList");
    citesList.firstElementChild.classList.add("highlight");
  })


  // example 3 

  document.getElementById("changeOrder").addEventListener('click',function(){
    document.getElementById("coffeeType");
    coffeeType.textContent ="Espresso";
    coffeeType.style.backgraoundColor="brown";
    coffeeType.style.padding = "5px" ;
  })


    // example 4
    

    document.getElementById("addNewItem").addEventListener('click', function (){
        let newItem =document.createElement('list')
        newItem.textContent ="Eggs"
        document.getElementById("shoppingList").appendChild(newItem)
    
    })

    // EXAMPLE 5
    document.getElementById("removeLastTask").addEventListener('click', function(){
       document.getElementById("taskList");
       taskList.lastElementChild.remove();

    })

// example 6

document.getElementById("clickMeButton").addEventListener('click', function(){
alert(" DOM ");

})

// example 7 
document.getElementById("teaList").addEventListener("click" , function(){
    
})

// example 8

// example 9 

// example 10





