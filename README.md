![banner](https://github.com/Raytreq/RileyPresentation/assets/136091294/8cd5ef80-84ba-4399-bf83-1f9a2ff7c0a3)

<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#create-slick-presentations-with-photoshop-in-less-than-5-minutes">About the project</a>
    </li>
    <li>
      <a href="#how-to-use-it">How to use it</a>
      <ul>
        <li><a href="#how-to-use-it">Setup</a></li>
        <li><a href="#using-the-program">Using the program</a></li>
      </ul>
    </li>
    <li><a href="#how-to-change-backgrounds-for-slides">How to change backgrounds for slides</a></li>
    <li><a href="#notes">Notes</a></li>
  </ol>
</details>

# Create clean presentations with Photoshop in less than 5 minutes
RileyPresentation is a JSX script made for automating the proccess of creating a presentation in Adobe Photoshop 2021. You don't need to have almost any complex knowledge about coding or image manipulation to use this program, because it only requires you to input your own values.

# How to use it
### 1. Download the Lemon Milk Font from <a href="https://www.dafont.com/lemon-milk.font">here</a>. Don't forget to install it after downloading.

### 2. Clone this repository.
   ```sh
   git clone https://github.com/Raytreq/RileyPresentation
   ```

### 3. Find 5 paths showed below. Open *"functions.jsx"* and replace them with your own folder locations:
* Path for exporting each slide as a PNG *("YOURFOLDERLOCATION/RileyPresentation/result/slidesPNG/"+fileName+".png")*

  ![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/6d5ca3ac-6d42-47e7-8a00-aca7cd6652cc)
* Path for saving each slide as a PSD *("YOURFOLDERLOCATION/RileyPresentation/result/slidesPSD/"+fileName+".psd")*

  ![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/94ba7b59-a874-43c6-96a5-d003ba657b63)
* Path for opening a random image background *("YOURFOLDERLOCATION/RileyPresentation/backgrounds/bg" + random + ".png")*

  ![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/3301f2e8-aaa7-4138-addd-ab0b681161ba)
* Path for pushing each slide value into an array *("YOURFOLDERLOCATION/RileyPresentation/result/slidesPNG/slide" + n +".png")*
* Path for creating a PDF *"YOURFOLDERLOCATION/RileyPresentation/result/"+ presentationName +".pdf"*

  ![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/e1ad2e93-42e9-4e48-937a-5ecf4a14923f)

Don't forget to save the file!

## Using the program
### 4. Open the script in Photoshop

![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/cf61229f-a39e-45cc-8acb-c1a6580ca8e2)

Go to use <b> File > Scripts > Browse > Scripts </b> and open *"program.jsx"*. I recommend <a href="https://helpx.adobe.com/photoshop/using/customizing-keyboard-shortcuts.html">making a shortcut</a> if you intend to use this program more.

### 5. Enter the number of slides you want 
If I enter 3, I can only edit the type of the second slide, because the first and the last one always have text on the middle

![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/4334673a-a130-49ea-9846-141c33c8037e)


### 5. Enter the color for special text
This will change the hue of the colored text on all slides.

![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/a5d6817c-95d2-4cbe-b305-65abeabca9e6)

<b>There are 5 available colors and you have an option to enter your own value if you enter 0 in this prompt.</b>

* <b>Blue</b>

![blue](https://github.com/Raytreq/RileyPresentation/assets/136091294/8eea5f68-25e6-4b8c-b6a1-c90d008f5f8e)

* <b>Orange</b>

![orange](https://github.com/Raytreq/RileyPresentation/assets/136091294/578bfb4c-a6d2-4f58-9e76-a2ec2b372332)

* <b>Purple</b>

![purple](https://github.com/Raytreq/RileyPresentation/assets/136091294/727411d3-c034-457c-97c9-aa345e68b17a)

* <b>Green</b>

![green](https://github.com/Raytreq/RileyPresentation/assets/136091294/129f6d18-0c0f-4c39-8913-29811dd1d2ec)

* <b>Red</b>

![red](https://github.com/Raytreq/RileyPresentation/assets/136091294/e63f71fe-4e8d-4b5d-a442-8bdae85b816f)

### 6. The program will ask you for three types of text. These texts depend on your current type of the slide. 

![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/93672048-1a40-4bbc-8301-793203379cb7)
![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/6c6e7eae-8586-40a9-8344-38773e81fb4f)
![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/3018c01d-dce4-4aa1-80d1-a689cb439ad8)

### 7. The program will prompt you for the type of the next slide as long as it's not the last one

![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/90f0ef08-2ae0-4699-885c-0cbdc92af7c4)

<b>There are 5 main types of slides:</b>

* Text and black background are aligned to the left

![slide2](https://github.com/Raytreq/RileyPresentation/assets/136091294/72477833-6a5c-436d-a149-f2319e2e9303)

* Text and black background are aligned to the right

![slide3](https://github.com/Raytreq/RileyPresentation/assets/136091294/70432030-b6ee-46f1-bc05-4302f8f9f3cb)

* Text and black background are vertically centered

![slide4](https://github.com/Raytreq/RileyPresentation/assets/136091294/d9823435-3180-47d1-b79e-6a4896c732e9)

* Text and background are horizontally centered

![slide6](https://github.com/Raytreq/RileyPresentation/assets/136091294/ab333afa-d7d4-4839-83b1-2d64c4413a48)

* Text and background cover the whole slide

![slide8](https://github.com/Raytreq/RileyPresentation/assets/136091294/0f1ceb58-9e60-4db2-b123-69831d0022c2)

### 8. If you choose third, fourth or the fifth type you can choose to fill the slide with images instead of text
![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/6863642a-4fc4-4966-9f09-65f0635097de)

* Image and black background are vertically centered

![slide7](https://github.com/Raytreq/RileyPresentation/assets/136091294/e4bb6aae-5452-4579-9342-5ba32d5862c6)


* Image and background are horizontally centered

![slide5](https://github.com/Raytreq/RileyPresentation/assets/136091294/cc892b5f-6f20-4ff2-8f48-e38085a87937)

* Image and background cover the whole slide

![slide9](https://github.com/Raytreq/RileyPresentation/assets/136091294/48988c74-7dcf-4e01-9bdb-fcefb5a01942)

### 9. After creating all slides, the program will prompt you to enter the name for the PDF

![image](https://github.com/Raytreq/RileyPresentation/assets/136091294/154fe806-47dd-4e47-b9d5-860ed3e949c4)


### 10. Congrats! You did it and your incredible presentation has been saved to you *result/* folder.


# How to change backgrounds for slides
1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo

3. Install NPM packages

4. Enter your API in `config.js`



# Notes
* Don't worry about *#include "functions.jsx";* being underlined in VSC, it's probably an IntelliSense bug, not the actual program
* This program is best for Adobe Photoshop 2021 version. Anything before or after that should also work, but when I tried it out on Photoshop CC 2018 text function didn't make actually visible text (I didn't look too much into it though)


## If you come across any errors or bugs please let me know        
![giphy](https://github.com/Raytreq/RileyPresentation/assets/136091294/24b90540-1d35-43a7-9991-965ef083b506)

*Made in may 2024*
