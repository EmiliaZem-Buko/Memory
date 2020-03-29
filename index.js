var count = 0;
var openPicture = [];
var moves = 0;
var time = 0;
var fruit = ["apple", "banana", "grapes"];
var image = ["apple.png", "banana.png", "grapes.png"];

setInterval(function () {

    time++;
    $("h3").text("time: " + time + "s");

}, 1000);

$(".btn").click(putPicture);

// Pictures are visible, after 2 open, disapired.

function putPicture() {

    if (count >= 2) {
        return;
    }

    var thisPicture = this.getElementsByClassName("picture")[0];
    thisPicture.style.display = "block";

    if (openPicture.includes(thisPicture)) {
        return;
    }
    // openPicture.push(thisPicture.getAttribute("data-fruit"));
    openPicture.push(thisPicture);

    count += 1;

    if (count === 2) {


        setTimeout(function () {
            count = 0;

            var even = openPicture.length;

            if (even % 2 === 0) {


                if (openPicture[even - 1].getAttribute("data-fruit") === openPicture[even - 2].getAttribute("data-fruit")) {
                    openPicture[even - 1].style.display = "block";
                    openPicture[even - 2].style.display = "block";
                }

                else {
                    openPicture[even - 1].style.display = "none";
                    openPicture[even - 2].style.display = "none";

                    openPicture.pop();
                    openPicture.pop();
                }

                moves++;
                $("h2").text("moves: " + moves);
            }
        }, 1500);
    }
}

function randomPicture() {


    fruit = [
        { name: "apple", image: "apple.png" },
        { name: "banana", image: "banana.png" },
        { name: "grapes", image: "grapes.png" }
    ];

    var img = document.querySelectorAll(".btn img");

    fruit.forEach(function (e) {

        for (var i = 0; i < 2; i++) {
            console.log(e);

            do {
                var randomIndex = Math.floor(Math.random() * img.length);
            } while (img[randomIndex].dataset.fruit != "")

            img[randomIndex].dataset.fruit = e.name;
            img[randomIndex].setAttribute("src", e.image)


        }
    });
} randomPicture()
