$(function () {

    let button = $('<button>(nice)</button>')
    $(button).addClass("deeznuts").appendTo('body')
    
    $('.deeznuts').click(function () {
        alert("got em!");
    });
    
    $('#btnSubmit').click(function () {
        // e.preventDefault();
        var submitValue = $('#textInput').val();
        alert(submitValue);
    })
    
    let item = $('.hover')
    item.mouseover(function () {
        $(item).css('background-color', 'purple');
    });
    item.mouseout(function () {
        $(item).css('background-color', 'white')
    });
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    let para = $('p')
    para.click(function () {
        $(para).css('color', getRandomColor());
    });
    
    let me = $('<button>click here</button>');
    $(me).addClass("meName").appendTo('body');
    
    $('.meName').click(function () {
        
        let div = $('<div></div>');
        $(div).appendTo('body');
        
        let span = $('<br><span>Ryan</span>')
        $(span).appendTo(div);
    });
    
    let friends = $('<button>friends</button>');
    $(friends).addClass("allMyFriends").appendTo('body');

    let list = $('<ul></ul>')
    $(list).appendTo('body');
   
    var myFrands = ["Kim", "Hunter", "Aaron", "Jillian", "Other Ryan"];
    friendCounter = 0;

    $('.allMyFriends').click(function(){
        if(friendCounter <= myFrands.length - 1) {
            let listItem = document.createElement("li");
            let frandName = document.createTextNode(myFrands[friendCounter]);
            $(frandName).appendTo(listItem);
            // listItem.appendChild(frandName);
            $(listItem).appendTo(list);
            // list.appendChild(listItem);
            friendCounter++
        }

    })
    
    
    
    
    
});