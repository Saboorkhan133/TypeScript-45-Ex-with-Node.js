var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a arrary of countries order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order", countriesToVisit);
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in Original Order:", countriesToVisit);
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in Original Order:", countriesToVisit);
console.log("Original Arrary Reversed:", countriesToVisit.reverse());
console.log("Back to Original Order:", countriesToVisit.reverse());
console.log("Sorted in Alphabatical Order:", countriesToVisit.sort());
console.log("Original Arrary Reversed:", countriesToVisit.reverse());
