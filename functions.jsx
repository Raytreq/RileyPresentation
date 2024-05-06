// Export a file as a PNG without saving it, to call it just insert how would you like the file to be named
function exportAsPNG(fileName) {
    var png = new ExportOptionsSaveForWeb();
    png.PNG8 = false;
    png.transparency = true;
    png.interlaced = false;
    png.quality = 100;
    png.includeProfile = false;
    png.format = SaveDocumentType.PNG; 

    savePath = File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/result/slides/"+fileName+".png");
    app.activeDocument.exportDocument(savePath, ExportType.SAVEFORWEB, png);
};

// Create a semi-transparent background on the left of the document for text
function leftBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[0, 0], [1240, 0], [1240, 1080], [0, 1080]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a semi-transparent background on the right of the document for text
function rightBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[680, 0], [1920, 0], [1920, 1080], [680, 1080]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a semi-transparent background in the middle of the document for text
function horizontallyCenteredBG() {
    activeDocument.artLayers.add();
    var ColourOfBG = new SolidColor;
    ColourOfBG.rgb.hexValue = "000000";
    activeDocument.selection.select([[320, 0], [1600, 0], [1600, 1080], [320, 1080]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a semi-transparent background in the middle of the document for text
function verticallyCenteredBG() {
    activeDocument.artLayers.add();
    var ColourOfBG = new SolidColor;
    ColourOfBG.rgb.hexValue = "000000";
    activeDocument.selection.select([[0, 176], [1920, 176], [1920, 904], [0, 904]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a semi-transparent background on the enitre document for text
function wholeBG() {
    activeDocument.artLayers.add();
    var ColourOfBG = new SolidColor;
    ColourOfBG.rgb.hexValue = "000000";
    activeDocument.selection.select([[0, 0], [1920, 0], [1920, 1080], [0, 1080]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a semi-transparent background in the middle of document for text
function middleBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[278, 231], [1641, 231], [1641, 850], [278, 850]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}


// Define missing "includes" function
Array.prototype.includes = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) { return true; }
    }
    return false;
}

// Open random background that has not been already used 
function openRandomBG() {
    var random = Math.round(Math.random() * (26 - 1) + 1);
    while (used.includes(random)) {
        var random = Math.round(Math.random() * (26 - 1) + 1);
    };
    used.push(random);

    var fileRef = new File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/backgrounds/bg" + random + ".png");
    app.open( fileRef );  
}

// Create text on the middle of the slide, best for first or last slide, to call it just insert three types of text
function firstOrLastSlideText(mainText, secondaryText, additionalText) {
    middleBG();

    var myDoc = app.activeDocument;
    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [962, 460]; 
    myText.color = myColor;
    myText.size = 78;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [962, 564]; 
    myText.color = myColor;
    myText.size = 86;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Regular";
    myText.contents = additionalText;
    myText.position = [962, 680]; 
    myText.color = myColor;
    myText.size = 92;
    myText.justification = Justification.CENTER;
}

// Create text for left-side slide
function leftText(mainText, secondaryText, slideContent) {
    leftBG();
    var myDoc = app.activeDocument;
    myDoc.autoKerning = AutoKernType.METRICS;
    myDoc.useAutoLeading = true;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [36, 286]; 
    myText.color = myColor;
    myText.size = 62;
    myText.justification = Justification.LEFT;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [36, 370]; 
    myText.color = myColor;
    myText.size = 70;
    myText.justification = Justification.LEFT;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Light";
    myText.contents = slideContent;
    myText.position = [36, 440]; 
    myText.color = myColor;
    myText.size = 45;
    myText.justification = Justification.LEFT;
    myText.kind = TextType.PARAGRAPHTEXT;

    myText.width = 1150;
    myText.height = 700;
}

// Create text for right-side slide
function rightText(mainText, secondaryText, slideContent) {
    rightBG();
    var myDoc = app.activeDocument;
    myDoc.autoKerning = AutoKernType.METRICS;
    myDoc.useAutoLeading = true;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [1880, 286]; 
    myText.color = myColor;
    myText.size = 62;
    myText.justification = Justification.RIGHT;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [1880, 370]; 
    myText.color = myColor;
    myText.size = 70;
    myText.justification = Justification.RIGHT;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Light";
    myText.contents = slideContent;
    myText.position = [730, 440]; 
    myText.color = myColor;
    myText.size = 45;
    myText.kind = TextType.PARAGRAPHTEXT;
    myText.justification = Justification.RIGHT;

    myText.width = 1150;
    myText.height = 700;
}

// Create text for horizontally centered slide
function horizontallyCenteredText(mainText, secondaryText, slideContent) {
    horizontallyCenteredBG();
    var myDoc = app.activeDocument;
    myDoc.autoKerning = AutoKernType.METRICS;
    myDoc.useAutoLeading = true;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [961, 286]; 
    myText.color = myColor;
    myText.size = 62;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [961, 370]; 
    myText.color = myColor;
    myText.size = 70;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Light";
    myText.contents = slideContent;
    myText.position = [385, 440]; 
    myText.color = myColor;
    myText.size = 45;
    myText.kind = TextType.PARAGRAPHTEXT;
    myText.justification = Justification.CENTER;

    myText.width = 1150;
    myText.height = 700;
}

// Function to prompt user to select an image file
function selectImageFile() {
    var file = File.openDialog("Select an image file", "*.jpg;*.png;*.gif");
    return file;
}

// Function to resize image
function resizeImage(image, rightWidth, rightHeight) {
    var width = image.width;
    var height = image.height;

    // Calculate aspect ratio
    var aspectRatio = width / height;

    // Resize based on the larger dimension
        if (width != rightWidth) {
            width = rightWidth;
            height = Math.round(width / aspectRatio);
        }
        else if (height != rightHeight) {
            height = rightHeight;
            width = Math.round(height * aspectRatio);
        }

    // Resize image
    image.resizeImage(width, height);
    
}

// Main function to add image to existing document
function addImageToDocument() {
    // Select active document
    var doc = app.activeDocument;
    // Prompt user to select an image file
    var imageFile = selectImageFile();
    
    if (imageFile) {
        // Open the selected image
        var imageDoc = open(imageFile);
        if (imageVariant == "1") {
            resizeImage(imageDoc, 608, 760);
        }
        else if (imageVariant == "2") {
            resizeImage(imageDoc, 400, 400);
        }
        else if (imageVariant == "3") {
            resizeImage(imageDoc, 1280, 720);
        }

        // Copy image to clipboard
        imageDoc.selection.selectAll();
        imageDoc.selection.copy();
        // Close the selected image without saving changes
        imageDoc.close(SaveOptions.DONOTSAVECHANGES);
        // Paste image into active document
        doc.paste();

        // Deselect any selection
        doc.selection.deselect();
    } else {
        alert("No image file selected.");
    }
}


// Create image with text for horizontally centered slide
function horizontallyCenteredImage(mainText, secondaryText) {
    horizontallyCenteredBG();
    var myDoc = app.activeDocument;

    addImageToDocument();

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [962, 130]; 
    myText.color = myColor;
    myText.size = 72;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [958, 1025]; 
    myText.color = myColor;
    myText.size = 84;
    myText.justification = Justification.CENTER;
}

// Create text for vertically centered slide
function verticallyCenteredText(mainText, secondaryText, slideContent) {
    verticallyCenteredBG();
    var myDoc = app.activeDocument;
    myDoc.autoKerning = AutoKernType.METRICS;
    myDoc.useAutoLeading = true;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [961, 376]; 
    myText.color = myColor;
    myText.size = 62;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [961, 460]; 
    myText.color = myColor;
    myText.size = 70;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Light";
    myText.contents = slideContent;
    myText.position = [110, 530]; 
    myText.color = myColor;
    myText.size = 45;
    myText.kind = TextType.PARAGRAPHTEXT;
    myText.justification = Justification.CENTER;

    myText.width = 1700;
    myText.height = 500;
}

// Create image with text for vertically centered slide
function verticallyCenteredImage(mainText, secondaryText) {
    verticallyCenteredBG();
    var myDoc = app.activeDocument;

    addImageToDocument();

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [962, 130]; 
    myText.color = myColor;
    myText.size = 72;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [958, 1025]; 
    myText.color = myColor;
    myText.size = 84;
    myText.justification = Justification.CENTER;
}

// Create text for entirely covered slide   
function wholeText(mainText, secondaryText, slideContent) {
    wholeBG();
    var myDoc = app.activeDocument;
    myDoc.autoKerning = AutoKernType.METRICS;
    myDoc.useAutoLeading = true;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [961, 276]; 
    myText.color = myColor;
    myText.size = 62;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = colorAccentValue;
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondaryText;
    myText.position = [961, 360]; 
    myText.color = myColor;
    myText.size = 70;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Light";
    myText.contents = slideContent;
    myText.position = [110, 430]; 
    myText.color = myColor;
    myText.size = 45;
    myText.kind = TextType.PARAGRAPHTEXT;
    myText.justification = Justification.CENTER;

    myText.width = 1700;
    myText.height = 500;
}

// Create image with text for entirely covered slide
function wholeImage(mainText, firstImageText, secondImageText, thirdImageText) {
    wholeBG();
    var myDoc = app.activeDocument;

    addImageToDocument();
    addImageToDocument();
    addImageToDocument();

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Medium";
    myText.contents = mainText;
    myText.position = [962, 130]; 
    myText.color = myColor;
    myText.size = 72;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Regular";
    myText.contents = firstImageText;
    myText.position = [958, 1025]; 
    myText.color = myColor;
    myText.size = 84;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Regular";
    myText.contents = secondImageText;
    myText.position = [958, 1025]; 
    myText.color = myColor;
    myText.size = 84;
    myText.justification = Justification.CENTER;

    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = "ffffff";
    myText.font = "LEMONMILK-Regular";
    myText.contents = thirdImageText;
    myText.position = [958, 1025]; 
    myText.color = myColor;
    myText.size = 84;
    myText.justification = Justification.CENTER;

}


