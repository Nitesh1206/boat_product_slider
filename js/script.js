//watch
let ironman = document.getElementById('iwatch');
let captain = document.getElementById('cwatch');
let panther = document.getElementById('bwatch');


let watch_one = "/images/iron_man_smartwatch.png";
let watch_two = "/images/captain_america_smartwatch.png";
let watch_three = "/images/black_panther_smartwatch.png"

ironman.addEventListener('click' , function(){
    document.getElementById('ironwatch').src = watch_one;
    document.getElementById('storm').innerHTML = "Watch Storm - Iron Man Smartwatch";
    document.getElementById('watch').innerHTML = "Watch Storm - Iron Man Smartwatch";
})

captain.addEventListener('click' , function(){
    document.getElementById('ironwatch').src = watch_two;
    document.getElementById('storm').innerText = "Watch Storm - Captain America Smartwatch";
    document.getElementById('watch').innerHTML = "Watch Storm - Captain America Smartwatch";
})

panther.addEventListener('click' , function(){
    document.getElementById('ironwatch').src = watch_three;
    document.getElementById('storm').innerText = "Watch Storm - Black Panther Smartwatch";
    document.getElementById('watch').innerHTML = "Watch Storm - Black Panther Smartwatch";
})

//headphone
let ironman_two = document.getElementById('iheadphone');
let captain_two = document.getElementById('cheadphone');
let panther_two = document.getElementById('bheadphone');

let headphone_one = "/images/iron_man_boat450.png";
let headphone_two = "/images/captain_america_boat450.png";
let headphone_three = "/images/black_panther_boat450.png";

ironman_two.addEventListener('click' , function(){
    document.getElementById('ironheadphone').src = headphone_one;
    document.getElementById('rockerz').innerText = "Rockerz 450 - Iron Man Headphones";
    document.getElementById('headphone').innerText = "Rockerz 450 - Iron Man Headphones";
})

captain_two.addEventListener('click' , function(){
    document.getElementById('ironheadphone').src = headphone_two;
    document.getElementById('rockerz').innerText = "Rockerz 450 - Captain America Headphones";
    document.getElementById('headphone').innerText = "Rockerz 450 - Captain America Headphones";
})

panther_two.addEventListener('click' , function(){
    document.getElementById('ironheadphone').src = headphone_three;
    document.getElementById('rockerz').innerText = "Rockerz 450 - Black Panther Headphones";
    document.getElementById('headphone').innerText = "Rockerz 450 - Black Panther Headphones";
})

//earbuds
let ironman_three = document.getElementById('iearbuds');
let captain_three = document.getElementById('cearbuds');
let panther_three = document.getElementById('bearbuds');

let earbuds_one = "/images/iron_man_airdopes131.png";
let earbuds_two = "/images/captain_america_airdopes131.png";
let earbuds_three = "/images/black_panther_airdopes131.png";

ironman_three.addEventListener('click' , function(){
    document.getElementById('ironearbuds').src = earbuds_one;
    document.getElementById('airdopes').innerText = "Airdopes 131 - Iron Man Earbuds";
    document.getElementById('earbuds').innerText = "Airdopes 131 - Iron Man Earbuds";
})

captain_three.addEventListener('click' , function(){
    document.getElementById('ironearbuds').src = earbuds_two;
    document.getElementById('airdopes').innerText = "Airdopes 131 - Captain America Earbuds";
    document.getElementById('earbuds').innerText = "Airdopes 131 - Captain America Earbuds";
})

panther_three.addEventListener('click' , function(){
    document.getElementById('ironearbuds').src = earbuds_three;
    document.getElementById('airdopes').innerText = "Airdopes 131 - Black Panther Earbuds";
    document.getElementById('earbuds').innerText = "Airdopes 131 - Black Panther Earbuds";
})