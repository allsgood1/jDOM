document.addEventListener('DOMContentLoaded', function () {


    let button = document.createElement('button');
    let btnText = document.createTextNode('(nice)');
    button.classList.add('button');
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.addEventListener("click", function () {
        alert("dont give up!")
    })

    var deezNuts = document.getElementById("btnSubmit");

    deezNuts.addEventListener("click", function () {
        var submitValue = document.getElementById('textInput').value;
        alert(submitValue);
    });


    var bogus = document.getElementById("hover");

    bogus.addEventListener("mouseover", function () {
        bogus.style.background = "purple";
    });
    bogus.addEventListener("mouseout", function () {
        bogus.style.background = "white";
    });


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    var para = document.getElementById('para');
    para.addEventListener("click", function () {
        para.style.color = getRandomColor();
    });

    let me = document.createElement('button');
    let spanWord = document.createTextNode('span');
    me.appendChild(spanWord);
    document.body.appendChild(me);

    me.addEventListener("click", function () {

        let div = document.createElement('div');
        document.body.appendChild(div);

        let span = document.createElement('span');
        let spanText = document.createTextNode('Ryan');
        span.appendChild(spanText);
        div.appendChild(span);
    });

    let friends = document.createElement('button');
    let friendsWord = document.createTextNode('friends');
    friends.appendChild(friendsWord);
    document.body.appendChild(friends);

    let list = document.createElement('ul');
    document.body.appendChild(list);


    friendCounter = 0;
    var myFrands = ["Kim", "Hunter", "Aaron", "Jillian", "Other Ryan"];

    friends.addEventListener("click", function(){


        if(friendCounter <= myFrands.length - 1) {
            let listItem = document.createElement("li");
            let frandName = document.createTextNode(myFrands[friendCounter]);
            listItem.appendChild(frandName);
            list.appendChild(listItem);
            friendCounter++
        }

    })


})





