



//Kilometer To Meter Coverter started

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(45.6785);
console.log(result);


//Kilometer To Meter Coverter End



//Budget Calculator Started

function budgetCalculator(ghori, mobile, laptop) {
    var ghoriPrice = 50 * ghori;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;
    var total = ghoriPrice + mobilePrice + laptopPrice;
    return total;

}



//Budget Calculator End


//Hotel Cost Function started


function hotelCost(days) {
    var roomCost = 0;

    if (days <= 10) {
        roomCost = 100 * days;
    }

    else if (days <= 20) {
        var withoutOffer = 100 * 10;
        var remainingOffer = days - 10;
        var FirstDayOffer = remainingOffer * 80;
        var roomCost = withoutOffer + FirstDayOffer;
    }

    else {
        var withoutOffer = 10 * 100;
        var FirstDayOffer = 10 * 80;
        var remainingOffer = days - 20;
        var wholeLifeOffer = remainingOffer * 50;
        var roomCost = withoutOffer + FirstDayOffer + wholeLifeOffer;
    } return roomCost;


}

//Hotel Cost Function End




// Mega Friend Function Started


function megaFriend(friends) {
    var charCounter = 0;
    var longestName = 0;
    for (var i = 0; i < friends.length; i++) {

        if (friends[i].length > charCounter) {
            charCounter = friends[i].length;
            longestName = friends[i];


        }
    } return longestName;
}

// Mega Friend Function End






























