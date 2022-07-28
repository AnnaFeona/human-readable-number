const _NUMBER = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
}
module.exports = function toReadable (number) {
    let num = [0,0,0];
    let tmp = number;
    let result = '';
    
    for (let i = 0; i < 3; i++){
        num[i] = tmp % 10;
        tmp = (tmp - num[i])/10;
    }

    if (number % 100 < 20 && num[0]) {
        if (num[2] === 0){
            return _NUMBER[number]; 
        } else {
            return _NUMBER[num[2]] + ' hundred ' + _NUMBER[number % 100];
        }
    } else {
        if (num[2] === 0){
            result = num[0] ? _NUMBER[num[1]*10] + ' ' + _NUMBER[num[0]] : _NUMBER[num[1]*10];
        } else {
            if (num[1] === 0) {
                result = num[0] ? _NUMBER[num[2]] + ' hundred' + ' ' + _NUMBER[num[0]] : _NUMBER[num[2]] + ' hundred';
            } else {
                result = num[0] ? _NUMBER[num[2]] + ' hundred' + ' ' + _NUMBER[num[1]*10] + ' ' + _NUMBER[num[0]] : _NUMBER[num[2]] + ' hundred' + ' ' + _NUMBER[num[1]*10];
            }
        }
    }
    return result;
}