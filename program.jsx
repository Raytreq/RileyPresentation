#include "functions.jsx"; 

// Program prosi użytkownika o wprowadzenie odpowiednich danych
var title = prompt ("Podaj tytuł prezentacji: ", "tytul");
var author = prompt ("Podaj autora prezentacji: ", "autor");
var subtitle = prompt ("Podaj podtytuł prezentacji: ", "podtytul")


// Wylosowanie liczby do funkcjonalności losowania tła i dodanie jej to tabeli
var random = Math.round(Math.random() * (26 - 1) + 1);
var used = [];
used.push(random);

// Otworzenie losowego zdjęcia z naszych teł
var fileRef = new File("C:/Users/New Hope/Desktop/Projekty/RileyPresentation/backgrounds/bg" + random + ".png");
app.open( fileRef );  


// Wygenerowanie półprzeźroczystego tła na środku 
activeDocument.artLayers.add();
var Colour = new SolidColor;
Colour.rgb.hexValue = '000000';
activeDocument.selection.select([[278, 231], [1641, 231], [1641, 850], [278, 850]], SelectionType.REPLACE, 0, false);
activeDocument.selection.fill (Colour, ColorBlendMode.NORMAL, 60, false);
activeDocument.selection.deselect();


// Dodanie tytułu
var myDoc = app.activeDocument;
var myLayerText = myDoc.artLayers.add();
myLayerText.kind = LayerKind.TEXT;
var myText = myLayerText.textItem;

myColor = new SolidColor;
myColor.rgb.red = 255;
myColor.rgb.green = 255;
myColor.rgb.blue = 255;

myText.font = "LEMONMILK-Medium";
myText.contents = title;
myText.position = [962, 460]; 
myText.color = myColor;
myText.size = 78;
myText.justification = Justification.CENTER;


// Dodanie podtytułu
var myLayerText = myDoc.artLayers.add();
myLayerText.kind = LayerKind.TEXT;
var myText = myLayerText.textItem;

myColor.rgb.red = 39;
myColor.rgb.green = 145;
myColor.rgb.blue = 232;

myText.font = "LEMONMILK-Regular";
myText.contents = author;
myText.position = [962, 564]; 
myText.color = myColor;
myText.size = 86;
myText.justification = Justification.CENTER;


// Dodanie drugiego podtytułu
var myLayerText = myDoc.artLayers.add();
myLayerText.kind = LayerKind.TEXT;
var myText = myLayerText.textItem;

myColor.rgb.red = 255;
myColor.rgb.green = 255;
myColor.rgb.blue = 255;

myText.font = "LEMONMILK-Regular";
myText.contents = subtitle;
myText.position = [962, 680]; 
myText.color = myColor;
myText.size = 92;
myText.justification = Justification.CENTER;

exportAsPNG("lubieplacki");


