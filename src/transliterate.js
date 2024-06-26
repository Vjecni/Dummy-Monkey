// src/transliterate.js
const cyrillicToLatinMap = {
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
  'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
  'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
  'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ы': 'Y',
  'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya', 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g',
  'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y',
  'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
  'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
  'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

const latinToCyrillicMap = {};
Object.keys(cyrillicToLatinMap).forEach(key => {
  latinToCyrillicMap[cyrillicToLatinMap[key]] = key;
});

export function transliterate(text) {
  return text.split('').map(char => cyrillicToLatinMap[char] || char).join('');
}

export function reverseTransliterate(text) {
  let result = '';
  let i = 0;
  while (i < text.length) {
    let char = text[i];
    let nextChar = text[i + 1];
    let combination = char + nextChar;
    if (latinToCyrillicMap[combination]) {
      result += latinToCyrillicMap[combination];
      i += 2;
    } else {
      result += latinToCyrillicMap[char] || char;
      i++;
    }
  }
  return result;
}
