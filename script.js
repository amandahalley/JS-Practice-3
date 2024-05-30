// 1
function reverseNum(num)
{
	num = num.toString();
	return num.split("").reverse().join("");
}
console.log(Number(reverseNum(43251)));




// 2
function alphOrder(str)
  {
return str.split('').sort().join('');
  }
console.log(alphOrder("KeyinCollege"));




// 3




// 4
function CurDate() {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const format = {
        "mm-dd-yyyy": `${month}-${day}-${year}`,
    };

    return format;
}

const CurDateFormat = CurDate();
console.log("mm-dd-yyyy: " + CurDateFormat["mm-dd-yyyy"]);




// 5

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('this is a string'));
console.log(capitalize('This is also a string'));






// 6
function checkPeriod(str) {
    if (str.includes(".")) {
        return "contains period";

    } else {
        return "does not contain period";

    }
}
console.log(checkPeriod("This sentence has a period."))
console.log(checkPeriod("This sentence does not have a period"))

// 7

function putSuffix(num) {
    if (num === undefined) {
        return;
    }
    switch (num % 10) {
        case 1:
            return num + "st"
        case 2:
            return num + "nd"
        case 3:
            return num + "rd"
        default:
            return num + "th"
    }
}

console.log(putSuffix(11));
console.log(putSuffix(22));
console.log(putSuffix(33));
console.log(putSuffix(44));

