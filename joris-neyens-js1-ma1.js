// question 1
var cat = {
    complain: function() {
        console.log("Meow!");
    }
}
cat.complain();

// question 2
const heading = document.querySelector("h3");

//question 3
heading.style.fontSize =  "2em";

//question 4
document.querySelector("h3").classList.add("subheading")

//question 5
const paragraphs = document.querySelector("p")

//question 6
const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraph</p>";

//question 7
function catInfo (catArray) {
    for(let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}
catInfo(cats)

//question 8
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catInfo (catArray) {

    let HTML = ""; 

    for(let i = 0; i < catArray.length; i++) {
        HTML += "<h5>" + (catArray[i].name) + "</h5>";
    }

return HTML

}

catInfo(cats)

//question 9

function catInfo (catArray) {

    let HTML = ""; 

    for(let i = 0; i < catArray.length; i++) {
        HTML += "<h5>" + (catArray[i].name) + "</h5>";
    }

return innerHTML

}

catInfo(cats)


// question 10 

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catInfo (catArray) {

    let HTML = ""; 

    for(let i = 0; i < catArray.length; i++) {

        let noAge = "Age unknown"

        if (catArray[i].age) {
            noAge = catArray[i].age;
        }

        HTML += `<div>
                    <h5>${catArray[i].name}</h5>
                    <p>${noAge}<p>
                </div>`
    }

return HTML

}

catInfo(cats)