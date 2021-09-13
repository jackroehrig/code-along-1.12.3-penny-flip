// TODO: Declare any global variables we need

// let headRolls = 0
// let tailRolls = 0

let totalTwos = 0;
let totalThrees = 0;
let totalFours = 0;
let totalFives = 0;
let totalSixes = 0;
let totalSevens = 0;
let totalEights = 0;
let totalNines = 0;
let totalTens = 0;
let totalElevens = 0;
let totalTwelves = 0;
let totalDoubles = 0;
let totalRolls = 0;
let rollTotal = 0;

    // TODO: Add event listener and handler for flip and clear buttons

    document.getElementById('roll').addEventListener('click', () => {
        let randomDie1 = Math.ceil(Math.random() * 6);
        let randomDie2 = Math.ceil(Math.random() * 6);
        rollTotal = randomDie1 + randomDie2;
        totalRolls++;

        if(randomDie1 === randomDie2) {
            totalDoubles++;
            document.getElementById('total-doubles').textContent = totalDoubles;
        }

        document.getElementById('message').textContent = `You rolled a ${randomDie1} and a ${randomDie2} for a total of ${rollTotal}!`

        switch(randomDie1) {
            case 1:
                document.getElementById('dice-image1').src = 'assets/images/dice/dice1.png'
            break;
            case 2:
                document.getElementById('dice-image1').src = 'assets/images/dice/dice2.png'
            break;
            case 3:
                document.getElementById('dice-image1').src = 'assets/images/dice/dice3.png'
            break;
            case 4:
                document.getElementById('dice-image1').src = 'assets/images/dice/dice4.png'
            break;
            case 5:
                document.getElementById('dice-image1').src = 'assets/images/dice/dice5.png'
            break;
            case 6:
                document.getElementById('dice-image1').src = 'assets/images/dice/dice6.png'
            break;
        }

        switch(randomDie2) {
            case 1:
                document.getElementById('dice-image2').src = 'assets/images/dice/dice1.png'
            break;
            case 2:
                document.getElementById('dice-image2').src = 'assets/images/dice/dice2.png'
            break;
            case 3:
                document.getElementById('dice-image2').src = 'assets/images/dice/dice3.png'
            break;
            case 4:
                document.getElementById('dice-image2').src = 'assets/images/dice/dice4.png'
            break;
            case 5:
                document.getElementById('dice-image2').src = 'assets/images/dice/dice5.png'
            break;
            case 6:
                document.getElementById('dice-image2').src = 'assets/images/dice/dice6.png'
            break;
        }

        switch(rollTotal){
            case 2:
                totalTwos++;
                document.getElementById('total-twos').textContent = totalTwos;
            break;
            case 3:
                totalThrees++;
                document.getElementById('total-threes').textContent = totalThrees;
            break;
            case 4:
                totalFours++;
                document.getElementById('total-fours').textContent = totalFours;
            break;
            case 5:
                totalFives++;
                document.getElementById('total-fives').textContent = totalFives;
            break;
            case 6:
                totalSixes++;
                document.getElementById('total-sixes').textContent = totalSixes;
            break;
            case 7:
                totalSevens++;
                document.getElementById('total-sevens').textContent = totalSevens;
            break;
            case 8:
                totalEights++;
                document.getElementById('total-eights').textContent = totalEights;
            break;
            case 9:
                totalNines++;
                document.getElementById('total-nines').textContent = totalNines;
            break;
            case 10:
                totalTens++;
                document.getElementById('total-tens').textContent = totalTens;
            break;
            case 11:
                totalElevens++;
                document.getElementById('total-elevens').textContent = totalElevens;
            break;
            case 12:
                totalTwelves++;
                document.getElementById('total-twelves').textContent = totalTwelves;
            break;
        }

        document.getElementById('percentage-twos').textContent = Math.round(totalTwos/totalRolls * 100) + '%'
        document.getElementById('percentage-threes').textContent = Math.round(totalThrees/totalRolls * 100) + '%'
        document.getElementById('percentage-fours').textContent = Math.round(totalFours/totalRolls * 100) + '%'
        document.getElementById('percentage-fives').textContent = Math.round(totalFives/totalRolls * 100) + '%'
        document.getElementById('percentage-sixes').textContent = Math.round(totalSixes/totalRolls * 100) + '%'
        document.getElementById('percentage-sevens').textContent = Math.round(totalSevens/totalRolls * 100) + '%'
        document.getElementById('percentage-eights').textContent = Math.round(totalEights/totalRolls * 100) + '%'
        document.getElementById('percentage-nines').textContent = Math.round(totalNines/totalRolls * 100) + '%'
        document.getElementById('percentage-tens').textContent = Math.round(totalTens/totalRolls * 100) + '%'
        document.getElementById('percentage-elevens').textContent = Math.round(totalElevens/totalRolls * 100) + '%'
        document.getElementById('percentage-twelves').textContent = Math.round(totalTwelves/totalRolls * 100) + '%'
    })

    document.getElementById('clear').addEventListener('click', () => {
        totalTwos = 0;
        totalThrees = 0;
        totalFours = 0;
        totalFives = 0;
        totalSixes = 0;
        totalSevens = 0;
        totalEights = 0;
        totalNines = 0;
        totalTens = 0;
        totalElevens = 0;
        totalTwelves = 0;
        totalDoubles = 0;
        totalRolls = 0;
        rollTotal = 0;

        document.getElementById('dice-image1').src = 'assets/images/dice/dice1.png'
        document.getElementById('dice-image2').src = 'assets/images/dice/dice2.png'

        document.getElementById('message').textContent = "Let's Get Rolling!"

        document.getElementById('total-twos').textContent = 0;
        document.getElementById('total-threes').textContent = 0;
        document.getElementById('total-fours').textContent = 0;
        document.getElementById('total-fives').textContent = 0;
        document.getElementById('total-sixes').textContent = 0;
        document.getElementById('total-sevens').textContent = 0;
        document.getElementById('total-eights').textContent = 0;
        document.getElementById('total-nines').textContent = 0;
        document.getElementById('total-tens').textContent = 0;
        document.getElementById('total-elevens').textContent = 0;
        document.getElementById('total-twelves').textContent = 0;
        document.getElementById('percentage-twos').textContent = 0 + '%';
        document.getElementById('percentage-threes').textContent = 0 + '%';
        document.getElementById('percentage-fours').textContent = 0 + '%';
        document.getElementById('percentage-fives').textContent = 0 + '%';
        document.getElementById('percentage-sixes').textContent = 0 + '%';
        document.getElementById('percentage-sevens').textContent = 0 + '%';
        document.getElementById('percentage-eights').textContent = 0 + '%';
        document.getElementById('percentage-nines').textContent = 0 + '%';
        document.getElementById('percentage-tens').textContent = 0 + '%';
        document.getElementById('percentage-elevens').textContent = 0 + '%';
        document.getElementById('percentage-twelves').textContent = 0 + '%';
        document.getElementById('total-doubles').textContent = 0;
    })

    // document.getElementById('flip').addEventListener('click', () => {
    //     let wasFlippedHeads = Math.random() < 0.5

    //     if(wasFlippedHeads){
    //         headRolls++
    //         document.getElementById('message').textContent = 'You Flipped Heads!'
    //         document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
    //     } else {
    //         tailRolls++
    //         document.getElementById('message').textContent = 'You Flipped Tails!'
    //         document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
    //     }

    //     let total = headRolls + tailRolls

    //     let percentageHeads = 0
    //     let percentageTails = 0

    //     percentageHeads = Math.round((headRolls / total) * 100)
    //     percentageTails = Math.round((tailRolls / total) * 100)

    //     document.getElementById('heads').textContent = headRolls
    //     document.getElementById('tails').textContent = tailRolls
    //     document.getElementById('heads-percent').textContent = percentageHeads + '%'
    //     document.getElementById('tails-percent').textContent = percentageTails + '%'
    // })

    // document.getElementById('clear').addEventListener('click', function () {
    //     headRolls = 0
    //     tailRolls = 0

    //     document.getElementById('message').textContent = 'Let"s Get Rolling!'

    //     total = headRolls + tailRolls

    //     let percentageHeads = 0
    //     let percentageTails = 0

    //     document.getElementById('heads').textContent = headRolls
    //     document.getElementById('tails').textContent = tailRolls
    //     document.getElementById('heads-percent').textContent = percentageHeads + '%'
    //     document.getElementById('tails-percent').textContent = percentageTails + '%'
    //     document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
    // })


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