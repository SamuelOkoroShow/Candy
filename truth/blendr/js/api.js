var myDataRef = new Firebase('https://resplendent-inferno-1454.firebaseio.com/Companies/Zappos/Campaigns/Cloths/Data');

var myBudgetRef = new Firebase('https://resplendent-inferno-1454.firebaseio.com/Companies/Zappos/Campaigns/Cloths/');

myDataRef.on("child_added", function (snapshot, prevChildKey) {
    newPost = snapshot.val();
    purchases.push(newPost.purchases);
    if (newPost.id == units) {
        cool = true;
        log();
    }

});

function saveAPI(data) {

    myBudgetRef.update({
        "Budget": data
    });

    myBudgetRef.on("child_changed", function (snapshot) {
        var changedPost = snapshot.val();
        alert("Success!");
    });

}
