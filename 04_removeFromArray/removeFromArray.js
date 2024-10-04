const removeFromArray = function(array, ...removelist) {
    let filtered = array.filter(
        (element) => 
        {return removelist.findIndex((toRemove) => {return toRemove === element}) == -1;}
    );
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
