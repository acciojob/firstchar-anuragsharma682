function firstChar(text) {
  if (!text) return ""; 

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      return text[i];
    }
  }

  return ""; 
}
alert(firstChar(text));
