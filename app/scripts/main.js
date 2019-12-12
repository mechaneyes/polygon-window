let randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min) + "px"
}

function rando(min, max) {
    if (max == null) {
        max = min
        min = 0
    }
    if (min > max) {
        var tmp = min
        min = max
        max = tmp
    }
    return min + (max - min) * Math.random()
}








// Purdy Colors
//
let colorPalette = ["#f81acc", "#E00E4E", "#5219AA", "#C90D77", "#CF368D"]

function sample(list) {
    return function() {
        return list[Math.floor(Math.random() * list.length)]
    };
}








// Initialize Timeline
//
let timing = new TimelineMax()

// Setting random value to the CSS variable, --random-top. This
// is the starting point for the slivers which will animate from
// that position to 0px and back.
// +
// Creates two ranges for those starting positions, which are either
// heigher than or lower than what's visible on the canvas
//
let allSlivers = $(".sliver").toArray()
let randomTrigger
let randomSliverHigh
let randomSliverLow
let setResetSlivers = () => {
    for (let j = 0; j <= allSlivers.length; j++) {
        $(allSlivers).each(function() {
            randomTrigger = Math.random()
            // console.log('randomTrigger: ' + randomTrigger)

            if (randomTrigger > 0.5) {
                randomSliverHigh = randomInt(-1500, -750)
                // console.log('randomSliverHigh: ' + randomSliverHigh)
                $(this).attr("style", "--random-top: " + randomSliverHigh)
            } else {
                randomSliverLow = randomInt(750, 1500)
                // console.log('randomSliverLow: ' + randomSliverLow)
                $(this).attr("style", "--random-top: " + randomSliverLow)
            }
        });
    }
    runAni()
}





// Running the timeline
// This is called again after the sliver positions have been reset
//
let runAni = () => {
    timing.to(".sliver", rando(2, 4), {
        top: 0,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
        ease: Power4.easeOut,
        onComplete: setResetSlivers
    })
}

setResetSlivers()











// // center elements
// TweenMax.set(".circlie", {
// 	left: "50%",
// 	top: "50%",
// 	xPercent: -50,
// 	yPercent: -50,
// 	alpha: 0
// });

// // random scale, or I can use cycle here
// // TweenMax.staggerTo(".circlie", 1, {cycle: {scale:[1, .25, .5, .75]}});

// var scales = [0.25, 0.5, 0.75, 1];
// var colors = ["#f81acc", "#E00E4E", "#5219AA", "#C90D77", "#CF368D"];

// TweenLite.set(".circlie", { scale: sample(scales) });

// var tl = new TimelineMax({ repeat: -1 });

// for (var i = 0; i < 2; i++) {
// 	tl.staggerTo(".circlie", 1, {
// 		backgroundColor: sample(colors),
// 		x: random(-80, 100),
// 		y: random(-100, 100),
// 		alpha: random(1),
// 		repeat: 1,
// 		repeatDelay: 0.1,
// 		yoyo: true,
// 		ease: Expo.easeOut
// 	});
// }

// function sample(list) {
// 	return function() {
// 		return list[Math.floor(Math.random() * list.length)];
// 	};
// }

// function random(min, max) {
// 	if (max == null) {
// 		max = min;
// 		min = 0;
// 	}
// 	return function() {
// 		return Math.random() * (max - min) + min;
// 	};
// }