# CSS

## What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML elements. It allows you to define styles for web pages, such as colors, fonts, spacing, and layout.

## Basic CSS Syntax
```css
selector {
  property: value;
}
```
- `selector` → Targets an HTML element.
- `property` → Defines what aspect to style (color, font, size, etc.).
- `value` → Specifies the style for the property.

## Styling a Table
```css
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

## Changing Text Color and Font Size
```css
p {
  color: blue;
  font-size: 18px;
}
```
🔹 This makes all `<p>` elements blue with a font size of 18px.

## Adding Background Color and Padding
```css
body {
  background-color: #f4f4f4;
  padding: 20px;
}
```
🔹 This gives the entire page a light gray background and 20px padding.

## Styling Buttons
```css
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

## Selecting All Elements
```css
* {
  color: #000;
}
```
🔹 This applies the color black to all elements.

## Margins
```css
form {
  margin: 250px 250px 250px 250px; /* top right bottom left */
}
iframe {
  margin-left: 250px;
  width: 60%;
  height: 500px;
  border: none;
}
```
🔹 The `margin` property sets spacing around elements.

## Inheriting Margins
```css
b {
  margin: 50px;
}
p {
  margin: inherit;
}
```
🔹 The `inherit` value makes an element inherit the margin of its parent.

## Borders
```css
border: solid #030303;
max-width: 50%;
```
🔹 This applies a solid black border and limits the width to 50%.

## Box Model
The **CSS Box Model** defines how elements are structured in terms of content, padding, border, and margin.

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```
🔹 `padding`: Space inside the element, between the content and the border.  
🔹 `border`: The boundary around the element.  
🔹 `margin`: Space outside the element, separating it from others.

## Flexbox
Flexbox makes it easier to design responsive layouts.

```css
.container {
  display: flex;
  justify-content: center; /* Align items horizontally */
  align-items: center; /* Align items vertically */
}
```
🔹 `justify-content`: Controls horizontal alignment.  
🔹 `align-items`: Controls vertical alignment.

---
This document provides a structured overview of CSS basics. Feel free to expand with additional styles, best practices, and advanced topics!

