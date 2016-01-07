function titleCase(str) {
    str = str.toLowerCase().split("");
    str[0] = str[0].toUpperCase();
    for (i = 1; i < str.length; i++) {
        if (str[i + 1] == " ") {
            str[i + 2] = str[i + 2].toUpperCase();
        }
    }
    str = str.join("");
    return str;
}
console.log(titleCase("I'm a little tea pot", ""));
