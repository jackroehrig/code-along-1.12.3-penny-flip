// TODO: Declare any global variables we need

let headRolls = 0
let tailRolls = 0

    // TODO: Add event listener and handler for flip and clear buttons

    document.getElementById('flip').addEventListener('click', () => {
        let wasFlippedHeads = Math.random() < 0.5

        if(wasFlippedHeads){
            headRolls++
            document.getElementById('message').textContent = 'You Flipped Heads!'
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        } else {
            tailRolls++
            document.getElementById('message').textContent = 'You Flipped Tails!'
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
        }

        let total = headRolls + tailRolls

        let percentageHeads = 0
        let percentageTails = 0

        percentageHeads = Math.round((headRolls / total) * 100)
        percentageTails = Math.round((tailRolls / total) * 100)

        document.getElementById('heads').textContent = headRolls
        document.getElementById('tails').textContent = tailRolls
        document.getElementById('heads-percent').textContent = percentageHeads + '%'
        document.getElementById('tails-percent').textContent = percentageTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        headRolls = 0
        tailRolls = 0

        document.getElementById('message').textContent = 'Let"s Get Rolling!'

        total = headRolls + tailRolls

        let percentageHeads = 0
        let percentageTails = 0

        document.getElementById('heads').textContent = headRolls
        document.getElementById('tails').textContent = tailRolls
        document.getElementById('heads-percent').textContent = percentageHeads + '%'
        document.getElementById('tails-percent').textContent = percentageTails + '%'
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
    })


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)