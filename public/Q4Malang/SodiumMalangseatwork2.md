# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- Answer: The sidebar moved 20px down and 20px to the right, similar to adding a margin on those sides of the sidebar except it 

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- Answer: The footer stays at the very bottom of the viewport. If it was position: relative, it would have to be moved a specific amount to be at the bottom of the viewport, unlike fixed where you just state that the 'distance' from the bottom of the viewport is 0.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

- Answer: The main content was moved to have a 66px space from the top of the body and a 200px space from the left of the body. Unlike if it was position: fixed, the content still moves when the page is scrolled.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- Answer: The notice appears above the content because it has a higher z-index value. If the z-index values were swapped, the notice would end up behind the content.

- Challenge: 
    * What are the changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
        + this is labeled as "challenge"

    * Try to change the position of .content to relative then to fixed. What do you observed each time?
        + When the position was set to relative, the content moved based on the values given, in reference to its normal position, instead of the viewport. When the position was set to fixed, it was in the same place as when it was set to position: absolute, this is because the top of the body is the top of the viewport so the reference point is similar. The difference is that when the position is set to fixed, the content will stay on that specific part of the viewport even when scrolled.

    * What do you observe on about the effect of z-index on .notice and .content boxes?
        + The z-index value of notice is greater than that of the content to ensure that the notice is above the content.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    **Answer:** Static is just the default position of an element. Relative means that it's positioned in reference to its original position. Absolute means that it's positioned in reference to its nearest positioned ancestor (if there are none, it would be in reference to the body or html tag). Lastly, the fixed means that it's positioned in reference to the viewport. Unlike the others, having position set to fixed means that it will stay in place even when scrolling.

    b. How does absolute positioning depend on its parent element?
    **Answer:** It depends on the parent element IF the parent element is positioned. If it does, that will become the reference point for the child element. If it doesn't, the reference will become the body/html tag.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    **Answer:** Sticky works in a way that it acts like relative positioning until it reaches the value stated, then it acts like fixed positioning.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    **Answer:** Examples on how I'd use positioning: 
    1. *Contact us* information will have a fixed position to ensure that it's seen on every part of the webpage.
    2. The *navigation* will have sticky position to have it stay on the top of the page after a specific point.
    3. Information under divs/sections will have absolute positioning to still have everything organized.
    4. Everything else will probably have a static position.