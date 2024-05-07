// To do:
// - make sure everything is good, clean and documented well 
// - make banger readme
// - make function for text creation and maybe something more
// - make all images have a small border?

#include "functions.jsx"; 

// Ask user for presentation length until correct value is given
var presentationLength = prompt ("Enter the presentation legth: (3-26)", "6", "Presentation length");
var correctPresentationLength = ["3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
while (!correctPresentationLength.includes(presentationLength)) {
    presentationLength = prompt("You have entered a wrong length of the presentation. Please enter a correct value: (3-26)","6", "Presentation length")
}

// Ask user for a single main color for the presentation's theme, out of 5 possible options
var colorAccent = prompt ("Enter the accent color for the presentation: (1-5) \n [1:Blue | 2:Orange | 3:Purple | 4:Green  | 5:Red ] \n Enter own value: 0", "1", "Color accent");
var colorAccentOptions = ["0","1","2","3","4","5"];
while (!colorAccentOptions.includes(colorAccent)) {
    colorAccent = prompt("You have entered a wrong value. Please enter a correct value: (1-5)\n [1:Blue | 2:Orange | 3:Purple | 4:Green  | 5:Red ] \n Enter own value: 0","1", "Color accent")
}

// Assign correct hexadecimal value to the variable
if (colorAccent == "0") {
    colorAccentValue = prompt("Enter your own HEX code for the color accent: (!Don't forget to delete the hashtag, otherwise the program won't work)", "fdfb30", "Custom color accent");
}
else if (colorAccent == "1") {
    colorAccentValue = "00bfff";
}
else if (colorAccent == "2") {
    colorAccentValue = "fd7e28";
}
else if (colorAccent == "3") {
    colorAccentValue = "9047fb";
}
else if (colorAccent == "4") {
    colorAccentValue = "32cd32";
}
else if (colorAccent == "5") {
    colorAccentValue = "fd251e";
}
else {
    alert("Somehow an error occured while trying to get a color accent value. You can feel proud of yourself now bozo.","おめでとう")
}

// Define the table that stores used backgrounds
var used = [];

// Define the color of the text background for all slides (Default=Black)
var ColourOfBG = new SolidColor;
ColourOfBG.rgb.hexValue = "000000";


// Create and export the first slide of the presentation
openRandomBG()
var title = prompt ("Enter the title of the presentation: ", "Title", "Title");
var author = prompt ("Enter the author of the presentation: ", "Author", "Author");
var subtitle = prompt ("Enter a subtitle for the first slide: ", "Subtitle", "Subtitle")
firstOrLastSlideText(title, author, subtitle);
exportAsPNG("slide1");
saveAsPSD("slide1");

// Create and export all of the main slides
var possibleSlideTypes = ["1","2","3","4","5"]
var possibleOptions = ["1", "2"]

for (var i = 2; i < presentationLength; i++) {
    var slideType = prompt("Enter the type of the slide: (1-5) \n [1:Text BG aligned to the left | 2:Text BG aligned to the right | 3:Horizontally centered text BG| 4:Vertically centered text BG | 5:Text BG covering the whole slide]", "1", "Slide type");
    while (!possibleSlideTypes.includes(slideType)) {
        slideType = prompt("You have entered a wrong value. Please enter a correct value: (1-5)\n [1:Text BG aligned to the left | 2:Text BG aligned to the right | 3:Horizontally centered text BG| 4:Vertically centered text BG | 5:Text BG covering the whole slide]","1", "Slide type")
    }
    openRandomBG();

    if (slideType == "1") {
        var title = prompt ("Enter the title of the slide: ", "Title", "Title");
        var subtitle = prompt ("Enter the subtitle of the slide: ", "Subtitle", "Subtitle");
        var content = prompt ("Enter the content of the slide: ", "Content", "Content");
        leftText(title, subtitle, content);
    }

    else if (slideType == "2") {
        var title = prompt ("Enter the title of the slide: ", "Title", "Title");
        var subtitle = prompt ("Enter the subtitle of the slide: ", "Subtitle", "Subtitle");
        var content = prompt ("Enter the content of the slide: ", "Content", "Content");
        rightText(title, subtitle, content);
    }

    if (slideType == "3") {

        var option = prompt("You have chosen a slide type that allows both text and images.\n Enter the subtype of the slide: (1-2) \n [1:Fill the slide with text| 2:Fill the slide with text and one medium image]", "1", "Slide subtype");
        while (!possibleOptions.includes(option)) {
            option = prompt("You have entered a wrong value. Please enter a correct value: (1-2) \n [1:Fill the slide with text| 2:Fill the slide with text and one medium image]", "1", "Slide subtype")
        }
    
        if (option == "1") {
            var title = prompt("Enter the title of the slide: ", "Title", "Title");
            var subtitle = prompt("Enter the subtitle of the slide: ", "Subtitle", "Subtitle");
            var content = prompt("Enter the content of the slide: ", "Content", "Content");
            horizontallyCenteredText(title, subtitle, content);
        }
    
        else if (option == "2") {
            imageVariant = "1";
    
            var title = prompt("Enter the title of the slide: ", "Title", "Title");
            var subtitle = prompt("Enter the content of the slide: ", "Subtitle", "Subtitle");
            horizontallyCenteredImage(title, subtitle);
        }
    }

    else if (slideType == "4") {
    
        var option = prompt("You have chosen a slide type that allows both text and images.\n Enter the subtypetype of the slide: (1-2) \n [1:Fill the slide with text| 2:Fill the slide with text and three small images]", "1", "Slide subtype");
        while (!possibleOptions.includes(option)) {
            option = prompt("You have entered a wrong value. Please enter a correct value: (1-2) \n [1:Fill the slide with text| 2:Fill the slide with text and three small images]", "1", "Slide subtype")
        }
    
        if (option == "1") {
            var title = prompt("Enter the title of the slide: ", "Title", "Title");
            var subtitle = prompt("Enter the subtitle of the slide: ", "Subtitle", "Subtitle");
            var content = prompt("Enter the content of the slide: ", "Content", "Content");
            verticallyCenteredText(title, subtitle, content);
        }
    
        else if (option == "2") {
            imageVariant = "2";
    
            var title = prompt("Enter the title of the slide: ", "Title", "Title");
            var firstImageText = prompt("Enter the description of the first image: ", "First image", "First image description");
            var secondImageText = prompt("Enter the description of the second image: ", "Second image", "Second image description");
            var thirdImageText = prompt("Enter the description of the third image: ", "Third image", "Third image description");
            verticallyCenteredImage(title, firstImageText, secondImageText, thirdImageText);
        }
    }

    else if (slideType == "5") {
        var possibleOptions = ["1", "2"]
        var option = prompt ("You have chosen a slide type that allows both text and images.\n Enter the subtypetype of the slide: (1-2) \n [1:Fill the slide with text| 2:Fill the slide with text and one large image]", "1", "Slide subtype");
        while (!possibleOptions.includes(option)) {
            option = prompt("You have entered a wrong value. Please enter a correct value: (1-2) \n [1:Fill the slide with text| 2:Fill the slide with text and one large image]", "1", "Slide subtype")
        }
    
        if (option == "1") {
            var title = prompt ("Enter the title of the slide: ", "Title", "Title");
            var subtitle = prompt ("Enter the subtitle of the slide: ", "Subtitle", "Subtitle");
            var content = prompt ("Enter the content of the slide: ", "Content", "Content");
            wholeText(title, subtitle, content);
        }
    
        else if (option == "2") {
            imageVariant = "3";
    
            var title = prompt ("Enter the title of the slide: ", "Title", "Title");
            var subtitle = prompt ("Enter the content of the slide: ", "Subtitle", "Subtitle");
            wholeImage(title, subtitle);
        }
    }

    exportAsPNG("slide"+i);
    saveAsPSD("slide"+i);
}

// Create and export the last slide of the presentation
openRandomBG();
var main = prompt ("Enter the main text of the last slide: ", "Main text", "Main text");
var secondary = prompt ("Enter the secondary text of the last slide: ", "Secondary text", "Secondary text");
var additional = prompt ("Enter an additional text for the last slide: ", "Additional text", "Additional text")
firstOrLastSlideText(main, secondary, additional);

exportAsPNG("slide"+i);
saveAsPSD("slide"+i);

// Create a PDF from exported slides
automatePDF(i);