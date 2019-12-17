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

            if (randomTrigger >= 0.3) {
                randomSliverHigh = randomInt(-1500, -500)
                // console.log('randomSliverHigh: ' + randomSliverHigh)
                $(this).attr("style", "--random-top: " + randomSliverHigh)
            } else {
                randomSliverLow = randomInt(500, 1500)
                // console.log('randomSliverLow: ' + randomSliverLow)
                $(this).attr("style", "--random-top: " + randomSliverLow)
            }
        });
    }
	// runAni()
	tl.invalidate().restart()
    // console.log('setReset')
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
            // console.log('tl complete')
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







