class Formatter {
  static capitalize(string) {
    const letter = string.slice(0, 1)
    return letter.toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\'\s]/g, "")
  }

  static titleize(input) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];


    const words = input.toLowerCase().split(" ");


    words[0] = capitalizeWord(words[0]);


    for (let i = 1; i < words.length; i++) {
      if (!exceptions.includes(words[i])) {
        words[i] = capitalizeWord(words[i]);
      }
    }

    const titleized = words.join(" ");

    return titleized;
  }
}


function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
