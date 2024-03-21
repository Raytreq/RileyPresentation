// To do:
// - make better purple and red?
// - make main loop of the program
// - make the program export a presentation
// - make sure everything is good, clean and documented well 

#include "functions.jsx"; 

// Ask user for presentation length until correct value is given
var presentationLength = prompt ("Enter the presentation legth: (3-26)", "6", "Presentation length");
var correctPresentationLength = ["3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
while (!correctPresentationLength.includes(presentationLength)) {
    presentationLength = prompt("You have entered a wrong length of the presentation. Please enter a correct value: (3-26)","6", "Presentation length")
}

// Ask user for a single main color for the presentation's theme, out of 5 possible options
var colorAccent = prompt ("Enter the accent color for the presentation: (1-5) \n [1:Deep Sky Blue | 2:Pumpkin Orange | 3:Twitch Purple | 4:Lemon Green  | 5:Candy Apple Red ] \n Enter own value: 0", "1", "Color Accent");
var colorAccentOptions = ["0","1","2","3","4","5"];
while (!colorAccentOptions.includes(colorAccent)) {
    colorAccent = prompt("You have entered a wrong option. Please enter a correct value: (1-5)\n [1:Deep Sky Blue | 2:Pumpkin Orange | 3:Twitch Purple | 4:Lemon Green  | 5:Candy Apple Red ] \n Enter own value: 0","1", "Color Accent")
}

// Assign correct hexadecimal value to the variable
if (colorAccent == "0") {
    colorAccentValue = prompt("Enter your own HEX code for the color accent: (!Don't forget to delete the hashtag, otherwise the program won't work)", "fafa33", "Custom color accent");
}
else if (colorAccent == "1") {
    colorAccentValue = "00bfff";
}
else if (colorAccent == "2") {
    colorAccentValue = "ff7518";
}
else if (colorAccent == "3") {
    colorAccentValue = "9146ff";
}
else if (colorAccent == "4") {
    colorAccentValue = "32cd32";
}
else if (colorAccent == "5") {
    colorAccentValue = "ff0800";
}
else {
    alert("Somehow an error occured while trying to get a color accent value. You can feel proud of yourself now bozo.","おめでとう")
}

// Create and export the first slide of the presentation
var used = [];
openRandomBG();
var title = prompt ("Enter the title of the presentation: ", "Title", "Title");
var author = prompt ("Enter the author of the presentation: ", "Author", "Author");
var subtitle = prompt ("Enter a subtitle for the first slide: ", "Subtitle", "Subtitle")
createFirstOrLastSlideText(title, author, subtitle);
exportAsPNG("slide1");

// Create all of the main slides

// Create and export the last slide of the presentation
openRandomBG();
var main = prompt ("Enter the main text of the last slide: ", "Main text", "Main text");
var secondary = prompt ("Enter the secondary text of the last slide: ", "Secondary text", "Secondary text");
var additional = prompt ("Enter an additional text for the last slide: ", "Additional text", "Additional text")
createFirstOrLastSlideText(main, secondary, additional);
exportAsPNG("slide100");
