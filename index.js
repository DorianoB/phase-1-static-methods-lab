class Formatter {
  static capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  static sanitize(inputString) {
    return inputString.replace(/[^a-zA-Z0-9-' ]/g, "");
  }
  static titleize(inputString) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];

    const titleizedWords = inputString.split(" ").map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word.toLowerCase();
      }
    });

    return titleizedWords.join(" ");
  }
}
