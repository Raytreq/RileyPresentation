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

// Create semi-transparent background in the middle of document for text
function middleBG() {
    activeDocument.artLayers.add();
    var Colour = new SolidColor;
    Colour.rgb.hexValue = "000000";
    activeDocument.selection.select([[278, 231], [1641, 231], [1641, 850], [278, 850]], SelectionType.REPLACE, 0, false);
    activeDocument.selection.fill (Colour, ColorBlendMode.NORMAL, 60, false);
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
function createFirstOrLastSlideText(mainText, secondaryText, additionalText) {
    middleBG();
    var myDoc = app.activeDocument;
    var myLayerText = myDoc.artLayers.add();
    myLayerText.kind = LayerKind.TEXT;
    var myText = myLayerText.textItem;
    myColor = new SolidColor;
    myColor.rgb.hexValue = "ffffff"
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
    myColor.rgb.hexValue = "ffffff"
    myText.font = "LEMONMILK-Regular";
    myText.contents = additionalText;
    myText.position = [962, 680]; 
    myText.color = myColor;
    myText.size = 92;
    myText.justification = Justification.CENTER;
}