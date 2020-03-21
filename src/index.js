module.exports = function toReadable (number) {
     
     
    const FIRST_LEVEL = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    const SECOND_LEVEL_1 = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const SECOND_LEVEL_2 = [
        null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let result = '';
    const digits = String(number).split('');
    for (var i = 0; i < digits.length; i++) {
        var digit = +digits[i];
        if ((digits.length - i) % 3 === 2) {
            if (digit === 1) {
                result += SECOND_LEVEL_1[digits[i + 1]];
            } else if (digit !== 0) {
                result += SECOND_LEVEL_2[digit] + ' ';
            }
            if (digit === 1 || +digits[i + 1] === 0) {
                i++;
            }
        } else {
            result += FIRST_LEVEL[digit];
        }
        if (i < digits.length - 1) {
            switch ((digits.length - i - 1) % 3) {
                case 0:
                    switch ((digits.length - i - 1) / 3) {
                        case 3:
                            result += ' billion ';
                            break;
                        case 2:
                            result += ' million ';
                            break;
                        case 1:
                            result += ' thousand ';
                            break;
                    }
                    break;
                case 2:
                    result += ' hundred ';
                    break;
            }
        }
    }
    return result.trim();
}
    
    

