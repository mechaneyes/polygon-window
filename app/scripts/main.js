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


// Setup Range for Animation Times/Speeds
const timeMin = 2
const timeMax = 4






// Purdy Colors
//
let colorPalette = ["#f81acc", "#E00E4E", "#5219AA", "#C90D77", "#CF368D"]

function sample(list) {
    return function() {
        return list[Math.floor(Math.random() * list.length)]
    };
}












// Setting random value to the CSS variable, --random-top. This
// is the starting point for the slivers which will animate from
// that position to 0px and back.
// +
// Creates two ranges for those starting positions, which are either
// heigher than or lower than what's visible on the canvas
//
let allSlivers = $('.sliver').toArray()
let randomTrigger
let randomSliverHigh
let randomSliverLow

let setResetSlivers = () => {
    for (let j = 0; j <= allSlivers.length; j++) {
        $(allSlivers).each(function() {
            randomTrigger = Math.random()
            // console.log('randomTrigger: ' + randomTrigger)

            if (randomTrigger >= 0.5) {
                randomSliverHigh = randomInt(-2000, -500)
                // console.log('randomSliverHigh: ' + randomSliverHigh)
                $(this).attr("style", "--random-top: " + randomSliverHigh)
            } else {
                randomSliverLow = randomInt(500, 2000)
                // console.log('randomSliverLow: ' + randomSliverLow)
                $(this).attr("style", "--random-top: " + randomSliverLow)
            }
        });
    }
	// runAni()
	tl.invalidate().restart()
    console.log('setReset')
}




// Initialize and Build Out Timeline
//
let tl = new TimelineMax({
        delay: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
        ease: Power4.easeOut,
        onComplete: function() {
            console.log('tl complete')
            setResetSlivers()
        }
    })


	// One row and five columns
    .to('.fiveSlivers .sliver', rando(timeMin, timeMax), {
        top: 0
	}, 0)


	// One row and ten columns
	.to('.tenSlivers .sliver', rando(timeMin, timeMax), {
	    top: 0
	}, 0)


	// Two rows and ten columns
    .to('.topRow .sliver', rando(timeMin, timeMax), {
        top: 0
    }, 0)
    .to('.bottomRow .sliver', rando(timeMin, timeMax), {
        top: 250
    }, 0)
	.set({}, {}, timeMax) // This line sets the duration of the timeline (not including the delay)
	
	// console.log("duration is: " + tl.duration())
	// console.log("totalDuration is: " + tl.totalDuration())

setResetSlivers()









// DEPRECATED
// 
// Running the timeline
// This is called again after the sliver positions have been reset
//
let runAni = () => {

    let tl = new TimelineMax({
    	// repeat: -1,
    	delay: 1,
        repeat: 1,
        repeatDelay: 1,
    	yoyo: true,
    	ease: Power4.easeOut,
    	// onComplete: setResetSlivers
    	onComplete: function() {
    		console.log('tl complete')
    		// tl.invalidate().call(setResetSlivers)
    		// console.log('numRun: ' + numRun)
    		// numRun++
    		// setResetSlivers()
    		this.restart()
    	}
    })


    .to('.fiveSlivers .sliver', rando(2, 4), {
            top: 0
        }, 0)
        .to('.topRow .sliver', rando(2, 4), {
            top: 0
        }, 0)
        .to('.bottomRow .sliver', rando(2, 4), {
            top: 250
        }, 0)
		.set({}, {}, 4) // This line sets the total duration of the timeline
		

    // console.log("duration is: " + tl.duration())
    console.log("totalDuration is: " + tl.totalDuration())
}

// setResetSlivers()











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