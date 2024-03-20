// Function to export a file as a PNG without saving it, to call it just insert how would you like the file to be named in the brackets
function exportAsPNG(fileName) {
    var png = new ExportOptionsSaveForWeb();
    png.PNG8 = false;
    png.transparency = true;
    png.interlaced = false;
    png.quality = 100;
    png.includeProfile = false;
    png.format = SaveDocumentType.PNG; 

    savePath = File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/result/"+fileName+".png");
    app.activeDocument.exportDocument(savePath, ExportType.SAVEFORWEB, png);
};