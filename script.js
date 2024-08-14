$(document).ready(function () {
    $('#cross').click(function () {
        $('.navigation').css({ "visibility": "hidden" })
    });
    $('#menu').click(function () {
        $('.navigation').css({ "visibility": "visible" })
    });
});
var flag = true;
$(`#lg-dk`).click(function () {
    if (flag) {
        $(`body`).css({ "background-color": "rgba(255, 255, 255, 0.926)" });
        $(`#lg-dk`).attr("src", "./images/darkmode.png").css({"width":"4vh"}); 
        $(`#menu`).attr("src", "./images/menu1.png");
        $(`.profile,.what-i-do,.projects,.records,.contact`).css({"background-color": "whitesmoke","box-shadow":"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px","color":"grey" });
        $("h3").css({"color":"black"});
        $(".profile p a").css({"color":"rgb(4, 43, 101)"});
        $(".lists ul li a").css({"color":"grey"});
        $(".lists ul li a span").css({"color":"rgb(4, 43, 101)"})
        $("h5").css({"color":"black"});
        $("button").css({"background-color":"grey"});
        $(".links a img").css({"background-color":"grey","color":"white"});
        $(".navigation").css({"background-color":"grey"});
    } else {
        $("body").css({ "background-color": "#19202E" });
        $(`#lg-dk`).attr("src", "./images/lightmode.png"); 
        $(`#menu`).attr("src", "./images/menu.png");
        $(".profile,.what-i-do,.projects,.records,.contact").css({"background-color": "#1b2437f4","box-shadow":"none" ,"color":"white"});
        $("h3").css({"color":"white"});
        $(".profile p a").css({"color":"blue"});
        $(".lists ul li a").css({"color":"white"});
        $(".lists ul li a span").css({"color":"blue"})
        $("h5").css({"color":"white"});
        $("button").css({"background-color":"#2b36495f"});
        $(".links a img").css({"background-color":"#21293a"});
        $(".navigation").css({"background-color":"#2b36495f"});
    }
    flag = !flag;
});

function downloadPDF() {
    var a = document.createElement('a');
    a.href = './certificates/kartiksinghbora_resume.pdf';
    a.download = 'kartiksinghbora_resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

$(document).ready(function () {
    var smallScreen = window.matchMedia("(max-width: 780px)");
    var isOpen = false; // Track the current background color state

    function toggleBackgroundColor() {
        if (isOpen) {
            $('.nav-content').css({ "display": "" }); // Set to original background color
        } else {
            $('.nav-content').css({ "display": "none" }); // Set to red
        }
        isOpen = !isOpen; // Toggle the state
    }

    if (smallScreen.matches) {
        $('#menu').click(toggleBackgroundColor);
    }

    // Handle window resize to apply or remove the listener
    smallScreen.addListener(function (e) {
        if (e.matches) {
            $('#menu').off('click').on('click', toggleBackgroundColor);
        } else {
            $('#menu').off('click');
            $('.nav-content').css({ "display": "" }); // Reset background color when larger
            isOpen = false; // Reset state
        }
    });
});


document.addEventListener('mousemove', (e) => {
    const primaryCursor = document.getElementById('primary-cursor');
    const secondaryCursor = document.getElementById('secondary-cursor');
    
    primaryCursor.style.left = `${e.pageX}px`;
    primaryCursor.style.top = `${e.pageY}px`;  
    let x = e.pageX;
    let y = e.pageY;
  
    const updateSecondaryCursor = () => {
      secondaryCursor.style.left = `${x}px`;
      secondaryCursor.style.top = `${y}px`;
    };
    setTimeout(updateSecondaryCursor, 100); 

  });
  

