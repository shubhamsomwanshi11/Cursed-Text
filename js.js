let arr2=[]
const specialChars = [['¯_( ͡° ͜ʖ ͡°)_/¯', '¯_( ͡° ͜ʖ ͡°)_/¯'], ['꧁𓊈𒆜', '𒆜𓊉꧂'], ['▄︻デ', '══━一'], ['░▒▓█', '█▓▒░'], ['ღ(¯`◕‿◕´¯) ♫ ♪ ♫ ', '♫ ♪ ♫ (¯`◕‿◕´¯)ღ'], ['═─◄█▓▒░ «•´¯`•', '•´¯`•» ░▒▓█►─═ '], ['★彡', '彡★']];
function convertToFraktur(text) {
    const conversionMap = {
        'A': '\u{1D504}', 'B': '\u{1D505}', 'C': '\u{212D}', 'D': '\u{1D507}', 'E': '\u{1D508}', 'F': '\u{1D509}', 'G': '\u{1D50A}', 'H': '\u{210C}', 'I': '\u{2111}', 'J': '\u{1D50D}', 'K': '\u{1D50E}', 'L': '\u{2112}', 'M': '\u{2133}', 'N': '\u{1D511}', 'O': '\u{1D512}', 'P': '\u{1D513}', 'Q': '\u{1D514}', 'R': '\u{211B}', 'S': '\u{1D516}', 'T': '\u{1D517}', 'U': '\u{1D518}', 'V': '\u{1D519}', 'W': '\u{1D51A}', 'X': '\u{1D51B}', 'Y': '\u{1D51C}', 'Z': '\u{1D51D}', 'a': '\u{1D51E}', 'b': '\u{1D51F}', 'c': '\u{1D520}', 'd': '\u{1D521}', 'e': '\u{1D522}', 'f': '\u{1D523}', 'g': '\u{1D524}', 'h': '\u{1D525}', 'i': '\u{1D526}', 'j': '\u{1D527}', 'k': '\u{1D528}', 'l': '\u{1D529}', 'm': '\u{1D52A}', 'n': '\u{1D52B}', 'o': '\u{1D52C}', 'p': '\u{1D52D}', 'q': '\u{1D52E}', 'r': '\u{1D52F}', 's': '\u{1D530}', 't': '\u{1D531}', 'u': '\u{1D532}', 'v': '\u{1D533}', 'w': '\u{1D534}', 'x': '\u{1D535}', 'y': '\u{1D536}', 'z': '\u{1D537}',
    };
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);

        if (conversionMap[char]) {
            result += conversionMap[char];
        } else {
            result += char;
        }
    }
    return result;
}
function convertToWasai(text) {
    const mapping = {
        'A': '卂', 'B': '乃', 'C': '匚', 'D': 'ᗪ', 'E': '乇', 'F': '千', 'G': 'Ꮆ',
        'H': '卄', 'I': '丨', 'J': 'ﾌ', 'K': 'Ҝ', 'L': 'ㄥ', 'M': '爪', 'N': '几',
        'O': 'ㄖ', 'P': '卩', 'Q': 'Ɋ', 'R': '尺', 'S': '丂', 'T': 'ㄒ', 'U': 'ㄩ',
        'V': 'ᐯ', 'W': '山', 'X': '乂', 'Y': 'ㄚ', 'Z': '乙'
    };
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const convertedChar = mapping[char];
        result += convertedChar || char;
    }

    return result;
}
function convertToFreakyFriday(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += text[i] + '\u0330';
    }
    return result;
}
function convertToCustom(text) {
    const mapping = {
        'A': 'ᕔ', 'B': 'ᗹ', 'C': 'ᙅ', 'D': 'ᗫ', 'E': 'ꗛ', 'F': 'ꘘ', 'G': 'Ǥ',
        'H': 'ዛ', 'I': 'Ĭ', 'J': 'Ĵ', 'K': 'Ҝ', 'L': 'Ը', 'M': 'ᙏ', 'N': 'ᙁ',
        'O': 'ꗞ', 'P': 'ᖘ', 'Q': 'Ҩ', 'R': 'Ɍ', 'S': 'ꕷ', 'T': 'Ꞇ', 'U': 'ꚶ',
        'V': 'ᕓ', 'W': 'ᙡ', 'X': '𐠷', 'Y': 'Ꮍ', 'Z': 'Ɀ'
    };
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const convertedChar = mapping[char];
        result += convertedChar || char;
    }

    return result;
}
function addUnderline(text) {
    let output = '';
    for (let i = 0; i < text.length; i++) {
        if (i < text.length - 1) {
            output += text[i] + '\u035F';
        } else {
            output += text[i];
        }
    }
    return output;
}
function convertToStrikethrough(text) {
    let strikethroughText = "";
    for (let i = 0; i < text.length; i++) {
        strikethroughText += text[i] + "\u0336\u0352\u0338";
    }
    return strikethroughText;
}
function boldify(str) {
    const charMap = {
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭', 'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
    };

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        result += charMap[c] || c;
    }
    return result;
}
function convertToBracketedString(inputString) {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    let outputString = "";

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charAt(i);
        if (upperCaseChars.includes(char)) {
            outputString += `༼${char}༽`;
        } else if (lowerCaseChars.includes(char)) {
            outputString += `${char}༽༼`;
        }
    }

    // Remove trailing ༼ characters if they exist
    outputString = outputString.replace(/༼+$/g, "");

    return outputString;
}
function convertToThai(text) {
    const latinChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const thaiChars = "ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ";
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const charIndex = latinChars.indexOf(text[i]);
        if (charIndex === -1) {
            result += text[i];
        } else {
            result += thaiChars.charAt(charIndex);
        }
    }

    return result;
}
function convertToSpecial(str) {
    const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "🅰Ⓑ🅲Ⓓ🅴Ⓕ🅶Ⓗ🅸Ⓙ🅺Ⓛ🅼Ⓝ🅾Ⓟ🆀Ⓡ🆂Ⓣ🆄Ⓥ🆆Ⓧ🆈Ⓩ";

    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const index = normalChars.indexOf(char);
        if (index === -1) {
            result += char;
        } else {
            result += specialChars.charAt(index);
        }
    }
    return result;
}
function circleLetters(str) {
    let circleMap = {
        'A': '\u24B6', 'B': '\u24B7', 'C': '\u24B8', 'D': '\u24B9', 'E': '\u24BA',
        'F': '\u24BB', 'G': '\u24BC', 'H': '\u24BD', 'I': '\u24BE', 'J': '\u24BF',
        'K': '\u24C0', 'L': '\u24C1', 'M': '\u24C2', 'N': '\u24C3', 'O': '\u24C4',
        'P': '\u24C5', 'Q': '\u24C6', 'R': '\u24C7', 'S': '\u24C8', 'T': '\u24C9',
        'U': '\u24CA', 'V': '\u24CB', 'W': '\u24CC', 'X': '\u24CD', 'Y': '\u24CE',
        'Z': '\u24CF',
        'a': '\u24D0', 'b': '\u24D1', 'c': '\u24D2', 'd': '\u24D3', 'e': '\u24D4',
        'f': '\u24D5', 'g': '\u24D6', 'h': '\u24D7', 'i': '\u24D8', 'j': '\u24D9',
        'k': '\u24DA', 'l': '\u24DB', 'm': '\u24DC', 'n': '\u24DD', 'o': '\u24DE',
        'p': '\u24DF', 'q': '\u24E0', 'r': '\u24E1', 's': '\u24E2', 't': '\u24E3',
        'u': '\u24E4', 'v': '\u24E5', 'w': '\u24E6', 'x': '\u24E7', 'y': '\u24E8',
        'z': '\u24E9'
    };

    let output = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter in circleMap) {
            output += circleMap[letter];
        } else {
            output += letter;
        }
    }
    return output;
}
function convertToBlockLetters(str) {
    const letterMap = {
        A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴',
        F: '🄵', G: '🄶', H: '🄷', I: '🄸', J: '🄹',
        K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾',
        P: '🄿', Q: '🅀', R: '🅁', S: '🅂', T: '🅃',
        U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈',
        Z: '🅉',
    };

    const blockTop = '▀▄▀▄▀▄';
    const blockBottom = '▀▄▀▄▀▄';

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toUpperCase();
        if (letterMap[letter]) {
            result += letterMap[letter];
        } else {
            result += letter;
        }
    }
    let final = blockTop + result + blockBottom
    return final;
}
function convertToStarText(str) {
    const letterMap = {
        A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ',
        F: 'ꜰ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
        K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ',
        P: 'ᴘ', Q: 'Q', R: 'ʀ', S: 'ꜱ', T: 'ᴛ',
        U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ',
        Z: 'ᴢ',
    };

    const starStart = '★彡[';
    const starEnd = ']彡★';

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toUpperCase();
        if (letterMap[letter]) {
            result += letterMap[letter];
        } else {
            result += letter;
        }
    }
    return starStart + result + starEnd;
}
function convertToFancyText0(str) {
    const letterMap = {
        A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔',
        F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙',
        K: '𝓚', L: '𝓛', M: '𝓜', N: '𝓝', O: '𝓞',
        P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣',
        U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨',
        Z: '𝓩', a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭',
        e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲',
        j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷',
        o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼',
        t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁',
        y: '𝔂', z: '𝔃',
    };

    const fancyStart = '꧁༒☬';
    const fancyEnd = '☬༒꧂';

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letterMap[letter]) {
            result += letterMap[letter];
        } else {
            result += letter;
        }
    }
    return fancyStart + result + fancyEnd;
}
function convertString(str) {
    const prefix = '▄︻デ';
    const suffix = '══━一';
    const upperCase = str.replace(/[A-Z]/g, '̷$&');
    const result = upperCase.replace(/[a-z]/g, '̷$&');
    return `${prefix}${result}${suffix}`;
}
function convertText(input) {
    const prefix = '█▓▒­░⡷⠂';
    const suffix = '⠐⢾░▒▓█';
    const replacements = {
        A: 'Д',
        B: 'Б',
        C: 'C',
        D: 'D',
        E: 'Ξ',
        F: 'F',
        G: 'G',
        H: 'H',
        I: 'I',
        J: 'Ҝ',
        K: 'K',
        L: 'L',
        M: 'И',
        N: 'Ф',
        O: 'Ǫ',
        P: 'Р',
        Q: 'Я',
        R: 'Γ',
        S: 'S',
        T: 'T',
        U: 'Ц',
        V: 'V',
        W: 'Щ',
        X: 'Ж',
        Y: 'У',
        Z: 'Z'
    };
    let output = '█▓▒­░⡷⠂';
    for (let i = 0; i < input.length; i++) {
        if (replacements.hasOwnProperty(input[i])) {
            output += replacements[input[i]];
        } else {
            output += input[i];
        }
    }
    output += suffix;
    return output;
}
function convertToCircleLetters(text) {
    const circleLetters = {
        A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ',
        I: 'Ⓘ', J: 'Ⓞ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ',
        Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ',
        Y: 'Ⓨ', Z: 'Ⓩ', a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ',
        g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ',
        o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ',
        w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ', ' ': ' '
    };

    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] in circleLetters) {
            result += circleLetters[text[i]];
        } else {
            result += text[i];
        }
    }

    return result;
}
function convertToSpecialCharacters(str) {
    const charMap = {
        'A': '🅰',
        'B': '🅱',
        'C': '🅲',
        'D': '🅳',
        'E': '🅴',
        'F': '🅵',
        'G': '🅶',
        'H': '🅷',
        'I': '🅸',
        'J': '🅹',
        'K': '🅺',
        'L': '🅻',
        'M': '🅼',
        'N': '🅽',
        'O': '🅾',
        'P': '🅿',
        'Q': '🆀',
        'R': '🆁',
        'S': '🆂',
        'T': '🆃',
        'U': '🆄',
        'V': '🆅',
        'W': '🆆',
        'X': '🆇',
        'Y': '🆈',
        'Z': '🆉',
        'a': '🅰',
        'b': '🅱',
        'c': '🅲',
        'd': '🅳',
        'e': '🅴',
        'f': '🅵',
        'g': '🅶',
        'h': '🅷',
        'i': '🅸',
        'j': '🅹',
        'k': '🅺',
        'l': '🅻',
        'm': '🅼',
        'n': '🅽',
        'o': '🅾',
        'p': '🅿',
        'q': '🆀',
        'r': '🆁',
        's': '🆂',
        't': '🆃',
        'u': '🆄',
        'v': '🆅',
        'w': '🆆',
        'x': '🆇',
        'y': '🆈',
        'z': '🆉'
    };
    const specialChars = str.split('').map(char => charMap[char] || char).join('');
    return `꧁𓊈𒆜${specialChars}𒆜𓊉꧂`;
}
function convertToFancyText1(str) {
    const fancyStart = 'ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥';
    const fancyEnd = '♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡';

    const upperCaseMap = new Map([['A', '𝓐'], ['B', '𝓑'], ['C', '𝓒'], ['D', '𝓓'], ['E', '𝓔'],
    ['F', '𝓕'], ['G', '𝓖'], ['H', '𝓗'], ['I', '𝓘'], ['J', '𝓙'],
    ['K', '𝓚'], ['L', '𝓛'], ['M', '𝓜'], ['N', '𝓝'], ['O', '𝓞'],
    ['P', '𝓟'], ['Q', '𝓠'], ['R', '𝓡'], ['S', '𝓢'], ['T', '𝓣'],
    ['U', '𝓤'], ['V', '𝓥'], ['W', '𝓦'], ['X', '𝓧'], ['Y', '𝓨'],
    ['Z', '𝓩']
    ]);

    const lowerCaseMap = new Map([['a', '𝓪'], ['b', '𝓫'], ['c', '𝓬'], ['d', '𝓭'], ['e', '𝓮'],
    ['f', '𝓯'], ['g', '𝓰'], ['h', '𝓱'], ['i', '𝓲'], ['j', '𝓳'],
    ['k', '𝓴'], ['l', '𝓵'], ['m', '𝓶'], ['n', '𝓷'], ['o', '𝓸'],
    ['p', '𝓹'], ['q', '𝓺'], ['r', '𝓻'], ['s', '𝓼'], ['t', '𝓽'],
    ['u', '𝓾'], ['v', '𝓿'], ['w', '𝔀'], ['x', '𝔁'], ['y', '𝔂'],
    ['z', '𝔃']
    ]);

    let fancyText = '';

    // convert each character in the string to its fancy equivalent
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (upperCaseMap.has(char)) {
            fancyText += upperCaseMap.get(char);
        } else if (lowerCaseMap.has(char)) {
            fancyText += lowerCaseMap.get(char);
        } else {
            fancyText += char;
        }
    }

    return fancyStart + fancyText + fancyEnd;
}
function convertToFancyText2(str) {
    const fancyStart = '彡(✿╹◡╹)';
    const fancyEnd = '(｀∀´)Ψ';
    const uppercaseFancy = '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡 ';
    const lowercaseFancy = '𝘢𝘣𝘤𝘦𝘥𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻';

    return fancyStart + str.split('').map((char) => {
        const index = uppercaseFancy.indexOf(char);
        if (index !== -1) {
            return uppercaseFancy.charAt(index);
        } else {
            const index = lowercaseFancy.indexOf(char);
            if (index !== -1) {
                return lowercaseFancy.charAt(index);
            } else {
                return char;
            }
        }
    }).join('') + fancyEnd;
}
function CombineAll(str, specialChars) {
    for (let i = 1; i < specialChars.length; i++) {
        const element = specialChars[i];
        let result = element[0] + str + element[1]
        console.log(result);
    }
}
// special symbol array

function CombinedCards(text) {
    let combine2 = CombineAll(convertToFraktur(text), specialChars),
        combine3 = CombineAll(convertToWasai(text), specialChars),
        combine4 = CombineAll(convertToFreakyFriday(text), specialChars),
        combine5 = CombineAll(convertToCustom(text), specialChars),
        combine6 = CombineAll(addUnderline(text), specialChars),
        combine7 = CombineAll(convertToStrikethrough(text), specialChars),
        combine8 = CombineAll(boldify(text), specialChars),
        combine9 = CombineAll(convertToThai(text), specialChars),
        combine10 = CombineAll(convertToBracketedString(text), specialChars),
        combine11 = CombineAll(convertToSpecial(text), specialChars),
        combine12 = CombineAll(circleLetters(text), specialChars),
        combine13 = CombineAll(convertToBlockLetters(text), specialChars),
        combine14 = CombineAll(convertToStarText(text), specialChars),
        combine15 = CombineAll(convertToFancyText0(text), specialChars),
        combine16 = CombineAll(convertString(text), specialChars),
        combine17 = CombineAll(convertText(text), specialChars),
        combine18 = CombineAll(convertToCircleLetters(text), specialChars),
        combine19 = CombineAll(convertToSpecialCharacters(text), specialChars),
        combine20 = CombineAll(convertToFancyText1(text), specialChars),
        combine21 = CombineAll(convertToFancyText2(text), specialChars)
    arr2 = [combine2, combine3, combine4, combine5, combine6, combine7, combine8, combine9, combine10, combine11, combine12, combine13, combine14, combine15, combine16, combine16, combine17, combine18, combine19, combine20, combine21];
    console.log(arr2);
    // return arr2;
}
