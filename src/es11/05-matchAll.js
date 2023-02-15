const regex = /\b(White)+\b/g;

const colors = "Green, Red, Purple, Blue, Yellow, Black, White, Orange";

for(const match of colors.matchAll(regex)){
    console.log(match); //this search the concidence with the regex in the string
}