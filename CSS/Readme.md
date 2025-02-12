# CSS

What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML elements. It allows you to define styles for web pages, such as colors, fonts, spacing, and layout.

# Basic CSS Syntax
css
Copy
Edit
```html
selector {
  property: value;
}
```
selector → Targets an HTML element.
property → Defines what aspect to style (color, font, size, etc.).
value → Specifies the style for the property.

# table css 
```html
table {
    width: 100%;
    border-collapse: collapse;
    border: 12px solid #fa0f0f;
    font-family: Arial, sans-serif;
}

tr:first-child {
    background-color: #16e182;
}
td:first-child {
    background-color: #5257e6;
    color: white;
  }
td:nth-child(2) {
    background-color: #ffa60b;
    color: white;
}
td:nth-child(3) {
    background-color: #0bbaff;
    color: white;
}
```
![image](https://github.com/user-attachments/assets/fd7fd9cc-c6bd-456c-9174-31876e050d14)


1️⃣ Changing Text Color and Font Size
css
Copy
Edit
```html
p {
  color: blue;
  font-size: 18px;
}
```
🔹 This makes all <p> elements blue with a font size of 18px.

2️⃣ Adding Background Color and Padding
css

```html
body {
  background-color: #f4f4f4;
  padding: 20px;
}
```
🔹 This gives the entire page a light gray background and 20px padding.

3️⃣ Styling Buttons
css
```html
button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}
```
🔹 This styles buttons with a green background and white text, and changes to dark green on hover.

4️⃣ Styling a Table
css
```html
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

```
select all 

```html
*{
color: #000;
  }
}


