// Define missing "includes" function (later useful for array operations)
Array.prototype.includes = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) { return true; }
    }
    return false;
}

// Export a file as a PNG
function exportAsPNG(fileName) {
    var png = new ExportOptionsSaveForWeb();
    png.PNG8 = false;
    png.transparency = true;
    png.interlaced = false;
    png.quality = 100;
    png.includeProfile = false;
    png.format = SaveDocumentType.PNG; 

    savePath = File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/result/slidesPNG/"+fileName+".png");
    app.activeDocument.exportDocument(savePath, ExportType.SAVEFORWEB, png);
}

// Save a document as a PSD
function saveAsPSD(fileName) {
    if (app.documents.length > 0) {
        var psdOptions = new PhotoshopSaveOptions();
        psdOptions.embedColorProfile = true;
        psdOptions.alphaChannels = true;
        psdOptions.layers = true;

        var savePath = File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/result/slidesPSD/"+fileName+".psd");
        app.activeDocument.saveAs(savePath, psdOptions, true);
    }
}

// Create a semi-transparent background in the middle of document for text
function middleBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[278, 231], [1641, 231], [1641, 850], [278, 850]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

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

// Create a horizontally centered semi-transparent background for text or images
function horizontallyCenteredBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[320, 0], [1600, 0], [1600, 1080], [320, 1080]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a vertically centered semi-transparent background for text or images
function verticallyCenteredBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[0, 176], [1920, 176], [1920, 904], [0, 904]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Create a semi-transparent background on the entire document for text or images
function wholeBG() {
    activeDocument.artLayers.add();
    activeDocument.selection.select([[0, 0], [1920, 0], [1920, 1080], [0, 1080]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (ColourOfBG, ColorBlendMode.NORMAL, 58, false);
    activeDocument.selection.deselect();
}

// Open a random background that has not been already used 
function openRandomBG() {
    // The first number means the amount of the backgrounds
    var random = Math.round(Math.random() * (26 - 1) + 1);
    while (used.includes(random)) {
        var random = Math.round(Math.random() * (26 - 1) + 1);
    };
    used.push(random);

    var fileRef = new File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/backgrounds/bg" + random + ".png");
    app.open( fileRef );  
}

// Create text one the semi-transparent background
function createText(color, font, contents, position, size, textType, justification) {
    var myDoc = app.activeDocument;
    var myLayerText = myDoc.artLayers.add();
    myColor = new SolidColor;

    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor.rgb.hexValue = color;
    myText.font = font;
    myText.contents = contents;
    myText.position = position; 
    myText.color = myColor;
    myText.size = size;
    myText.kind = textType;
    myText.justification = justification;
}

// Create a middle-type slide
function firstOrLastSlideText(mainText, secondaryText, additionalText) {
    middleBG();

    createText("ffffff", "LEMONMILK-Medium", mainText, [962, 460], 80, TextType.POINTTEXT, Justification.CENTER);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [962, 564], 88, TextType.POINTTEXT, Justification.CENTER);
    createText("ffffff", "LEMONMILK-Regular", additionalText, [962, 680], 94, TextType.POINTTEXT, Justification.CENTER);
}

// Create a left-sided slide
function leftText(mainText, secondaryText, slideContent) {
    leftBG();
    app.activeDocument.autoKerning = AutoKernType.METRICS;
    app.activeDocument.useAutoLeading = true;

    createText("ffffff", "LEMONMILK-Medium", mainText, [36, 286], 62, TextType.POINTTEXT, Justification.LEFT);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [36, 370], 70, TextType.POINTTEXT, Justification.LEFT);
    createText("ffffff", "LEMONMILK-Light", slideContent, [36, 440], 45, TextType.PARAGRAPHTEXT, Justification.LEFT);
    var myText = app.activeDocument.activeLayer.textItem;
    myText.width = 1150;
    myText.height = 700;
}

// Create a right-sided slide
function rightText(mainText, secondaryText, slideContent) {
    rightBG();
    app.activeDocument.autoKerning = AutoKernType.METRICS;
    app.activeDocument.useAutoLeading = true;

    createText("ffffff", "LEMONMILK-Medium", mainText, [1880, 286], 62, TextType.POINTTEXT, Justification.RIGHT);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [1880, 370], 70, TextType.POINTTEXT, Justification.RIGHT);
    createText("ffffff", "LEMONMILK-Light", slideContent, [730, 440], 45, TextType.PARAGRAPHTEXT, Justification.RIGHT);
    var myText = app.activeDocument.activeLayer.textItem;
    myText.width = 1150;
    myText.height = 700;
}

// Create a horizontally centered slide with text
function horizontallyCenteredText(mainText, secondaryText, slideContent) {
    horizontallyCenteredBG();
    app.activeDocument.autoKerning = AutoKernType.METRICS;
    app.activeDocument.useAutoLeading = true;

    createText("ffffff", "LEMONMILK-Medium", mainText, [961, 286], 62, TextType.POINTTEXT, Justification.CENTER);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [961, 370], 70, TextType.POINTTEXT, Justification.CENTER);
    createText("ffffff", "LEMONMILK-Light", slideContent, [385, 440], 45, TextType.PARAGRAPHTEXT, Justification.CENTER);
    var myText = app.activeDocument.activeLayer.textItem;
    myText.width = 1150;
    myText.height = 700;
}

// Prompt user to select an image file
function selectImageFile() {
    var file = File.openDialog("Select an image file", "*.jpg;*.png;*.gif");
    return file;
}

// Resize an image
function resizeImage(image, rightWidth, rightHeight) {
    var width = image.width;
    var height = image.height;
    var aspectRatio = width / height;

        if (width != rightWidth) {
            width = rightWidth;
            height = Math.round(width / aspectRatio);
        }
        else if (height != rightHeight) {
            height = rightHeight;
            width = Math.round(height * aspectRatio);
        }

    image.resizeImage(width, height);
}

// Add an image to an existing document
function addImageToDocument() {
    var myDoc = app.activeDocument;
    var imageFile = selectImageFile();
    
    if (imageFile) {
        var imageDoc = open(imageFile);
        if (imageVariant == "1") {
            resizeImage(imageDoc, 608, 760);
        }
        else if (imageVariant == "2") {
            resizeImage(imageDoc, 400, 400);
        }
        else if (imageVariant == "3") {
            resizeImage(imageDoc, 1296, 729);
        }

        imageDoc.selection.selectAll();
        imageDoc.selection.copy();
        imageDoc.close(SaveOptions.DONOTSAVECHANGES);
        myDoc.paste();
        myDoc.selection.deselect();
    } else {
        alert("No image file selected.");
    }
}

// Create a horizontally centered slide with an image
function horizontallyCenteredImage(mainText, secondaryText) {
    horizontallyCenteredBG();
    addImageToDocument();

    createText("ffffff", "LEMONMILK-Medium", mainText, [962, 130], 72, TextType.POINTTEXT, Justification.CENTER);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [958, 1025], 84, TextType.POINTTEXT, Justification.CENTER);
}

// Create a vertically centered slide with text
function verticallyCenteredText(mainText, secondaryText, slideContent) {
    verticallyCenteredBG();
    app.activeDocument.autoKerning = AutoKernType.METRICS;
    app.activeDocument.useAutoLeading = true;

    createText("ffffff", "LEMONMILK-Medium", mainText, [961, 326], 62, TextType.POINTTEXT, Justification.CENTER);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [961, 410], 70, TextType.POINTTEXT, Justification.CENTER);
    createText("ffffff", "LEMONMILK-Light", slideContent, [385, 480], 45, TextType.PARAGRAPHTEXT, Justification.CENTER);
    var myText = app.activeDocument.activeLayer.textItem;
    myText.width = 1150;
    myText.height = 700;
}

// Create a vertically centered slide with images
function verticallyCenteredImage(mainText, firstImageText, secondImageText, thirdImageText) {
    verticallyCenteredBG();
    var myDoc = app.activeDocument;

    addImageToDocument();
    addImageToDocument();
    addImageToDocument();

    var layerName = "Layer 3"; 
    var targetLayer = myDoc.layers.getByName(layerName);
    
    if (targetLayer) {
        var newX = 1298; 
        var newY = 340; 
        targetLayer.translate(newX - targetLayer.bounds[0], newY - targetLayer.bounds[1]);
    } else {
        alert("Layer not found: " + layerName);
    }

    layerName = "Layer 4"; 
    targetLayer = myDoc.layers.getByName(layerName);
    
    if (targetLayer) {
        var newX = 760; 
        var newY = 340; 
        targetLayer.translate(newX - targetLayer.bounds[0], newY - targetLayer.bounds[1]);
    } else {
        alert("Layer not found: " + layerName);
    }


    layerName = "Layer 5"; 
    targetLayer = myDoc.layers.getByName(layerName);
    
    if (targetLayer) {
        var newX = 222; 
        var newY = 340; 
        targetLayer.translate(newX - targetLayer.bounds[0], newY - targetLayer.bounds[1]);
    } else {
        alert("Layer not found: " + layerName);
    }

    createText(colorAccentValue, "LEMONMILK-Medium", mainText, [961, 295], 76, TextType.POINTTEXT, Justification.CENTER);
    createText("ffffff", "LEMONMILK-Regular", firstImageText, [420, 829], 50, TextType.POINTTEXT, Justification.CENTER);
    createText("ffffff", "LEMONMILK-Regular", secondImageText, [960, 829], 50, TextType.POINTTEXT, Justification.CENTER);
    createText("ffffff", "LEMONMILK-Regular", thirdImageText, [1499, 829], 50, TextType.POINTTEXT, Justification.CENTER);
}

// Create an entirely covered slide with text
function wholeText(mainText, secondaryText, slideContent) {
    wholeBG();
    app.activeDocument.autoKerning = AutoKernType.METRICS;
    app.activeDocument.useAutoLeading = true;

    createText("ffffff", "LEMONMILK-Medium", mainText, [961, 276], 62, TextType.POINTTEXT, Justification.CENTER);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [961, 360], 70, TextType.POINTTEXT,Justification.CENTER);
    createText("ffffff", "LEMONMILK-Light", slideContent, [160, 430], 45, TextType.PARAGRAPHTEXT, Justification.CENTER);
    var myText = app.activeDocument.activeLayer.textItem;
    myText.width = 1600;
    myText.height = 700;
}

// Create an entirely covered slide with an image
function wholeImage(mainText, secondaryText) {
    wholeBG();
    addImageToDocument();

    createText("ffffff", "LEMONMILK-Medium", mainText, [962, 125], 72, TextType.POINTTEXT, Justification.CENTER);
    createText(colorAccentValue, "LEMONMILK-Regular", secondaryText, [962, 1026], 84, TextType.POINTTEXT, Justification.CENTER);
}

// Create a PDF presentation
function automatePDF(i) {
    var filePaths = [];
    for (var n = 1; n <= i; n++) {
        filePaths.push("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/result/slidesPNG/slide" + n +".png");
    }
    var presentationName = prompt("How would you like the presentation file to be named?", "presentationName", "Presentation name");
    var outputPath = "C:/Users/New Hope/Desktop/Projekty/RileyPresentation/result/"+ presentationName +".pdf";

    var missingFiles = [];
    for (var i = 0; i < filePaths.length; i++) {
        var file = new File(filePaths[i]);
        if (!file.exists) {
            missingFiles.push(filePaths[i]);
        }
    }

    if (missingFiles.length > 0) {
        alert("The following slides do not exist:\n\n" + missingFiles.join("\n"));
    } else {
        var presentationOptions = new PresentationOptions();
        presentationOptions.presentation = true;
        presentationOptions.mode = OpenDocumentMode.RGB;
        presentationOptions.includeLayers = false;
        presentationOptions.matte = MatteType.NONE;
        presentationOptions.bitsPerChannel = BitsPerChannelType.EIGHT;
        presentationOptions.transparency = true;

    var files = [];
    for (var j = 0; j < filePaths.length; j++) {
        files.push(new File(filePaths[j]));
    }

    app.makePDFPresentation(files, new File(outputPath), presentationOptions);
    }
}