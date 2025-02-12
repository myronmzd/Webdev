# Web Development Guide

## Introduction
This guide covers fundamental HTML concepts and elements with examples to help you understand the structure and functionality of web pages.

## What is HTML?
HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines the content and layout of a webpage using elements (tags) such as headings, paragraphs, links, images, and more.

### Example HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://example.com">Click here</a> to visit Example.com.
</body>
</html>
```

## Key HTML Elements

| Element | Description |
|---------|-------------|
| `<!DOCTYPE html>` | Declares the document type as HTML5. |
| `<html>` | The root element that wraps the entire webpage. |
| `<head>` | Contains metadata, such as title and linked stylesheets. |
| `<title>` | Sets the page title displayed on the browser tab. |
| `<body>` | Contains the visible content of the page. |
| `<h1> - <h6>` | Headings (`<h1>` is the largest, `<h6>` is the smallest). |
| `<p>` | Defines a paragraph of text. |
| `<a href="URL">` | Creates hyperlinks. |
| `<img src="image.jpg" alt="Description">` | Embeds an image. |
| `<ul>, <ol>, <li>` | Lists (unordered, ordered, list items). |
| `<table>` | Creates tables with `<tr>` (row), `<th>` (header), and `<td>` (data). |

## Common HTML Elements with Examples

### Preformatted Text
```html
<pre>
  This is an example paragraph. Anything inside the <strong>pre</strong> tag is displayed as is.
</pre>
```

### Links
```html
<a href="https://x.com/home" target="_blank">New tab link</a>
<a href="mailto:someone@example.com">Send an Email</a>
```

### Text Formatting
```html
<b>Bold Text</b> <strong>Strong Text</strong>
<i>Italic Text</i> <em>Emphasized Text</em>
<mark>Highlighted Text</mark>
<del>Strikethrough Text</del>
<small>Small Text</small>
H<sub>2</sub>O  (Subscript)  |  2<sup>2</sup>=4 (Superscript)
```

### Styled Heading
```html
<h1 style="color: darkblue; background-color: red;">Styled Heading</h1>
```

### Tables
```html
<table>
    <tr>
        <th>Category</th>
        <th>AWS</th>
        <th>Azure</th>
    </tr>
    <tr>
        <td>Compute</td>
        <td>EC2</td>
        <td>VM</td>
    </tr>
    <tr>
        <td>Storage</td>
        <td>S3</td>
        <td>Blob Storage</td>
    </tr>
</table>
```

### Lists
```html
<ul>
    <li>Unordered List Item 1</li>
    <li>Unordered List Item 2</li>
</ul>

<ol>
    <li>Ordered List Item 1</li>
    <li>Ordered List Item 2</li>
</ol>
```

### Div Tag with Styling
```html
<div style="background-color: lightblue; padding: 10px;">
    <h2>Div Example</h2>
    <p>This is a styled div container.</p>
</div>
```

### Embedded Video (YouTube)
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/3JZ_D3ELwOQ"></iframe>
```

### Forms
```html
<form action="/submit.html" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email">
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" placeholder="Enter your age">
    
    <input type="submit" value="Submit">
</form>
```

## Additional Resources
- [HTML Documentation (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Guide](https://www.w3schools.com/html/)
- [HTML5 Specification](https://html.spec.whatwg.org/)

---

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.


---

Happy coding! 🚀

