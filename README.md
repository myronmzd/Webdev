# Webdev
## Webdev
What is HTML?
HTML (HyperText Markup Language) is the standard language used to create and structure webpages. It defines the content and layout of a webpage using elements (tags) like headings, 
paragraphs, links, images, and more.



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

# Key HTML Elements
<!DOCTYPE html> → Declares the document type as HTML5.
<html> → The root element that wraps the entire webpage.
<head> → Contains meta-information, like character encoding, title, and linked stylesheets.
<title> → Sets the page title (visible on the browser tab).
<body> → Contains the visible content of the page.
<h1> - <h6> → Headings (<h1> is the largest, <h6> is the smallest).
<p> → Paragraph for text content.
<a href="URL"> → Anchor tag for links.
<img src="image.jpg" alt="Description"> → Embeds an image.
<ul>, <ol>, <li> → Lists (unordered, ordered, list items).
<table> → Creates tables with <tr> (row), <th> (header), and <td> (data).

## other Elements

# 1
 <pre>
      This is an example paragraph. Anything in the <strong>body</strong> 
      tag will appear on the page, just like this <strong>p</strong> 
      tag and its contents.Yes, in AWS Step Functions, you often need to create the necessary 
      AWS resources before defining and orchestrating workflows.
      The type of resources you create depends on your use case. Here's a typical approach:
  </pre>

  Output 


      This is an example paragraph. Anything in the body 
      tag will appear on the page, just like this p 
      tag and its contents.Yes, in AWS Step Functions, you often need to create the necessary 
      AWS resources before defining and orchestrating workflows.
      The type of resources you create depends on your use case. Here's a typical approach:

#2

<a href="https://x.com/home">Click this link</a>

<a> is an anchor tag, used to create hyperlinks.
href="https://x.com/home" specifies the destination URL (in this case, X.com, formerly known as Twitter).


#3 

<b>this is bold</b> <strong>and this is strong</strong> 
<i>this is italic</i> 
<br>
<em> and this is emphasized</em>

output 
**this is bold and this is strong**
*this is italic
and this is emphasized*


mark this <mark>Marked</mark> 
output

mark this **Marked**
  
don't press this <del>button</del>

<small>small text</small>
small text

H<sub>2</sub>O
H2O  

2<sup>2</sup>=4
22=4

<h1 style="color: darkblue;background-color:red ;">Heading 1</h1> 
Heading 1

#4
links 

<a href="https://x.com/home" target="_blank">New tab link</a>

<a href="/home" target="_blank">click to goto home page of website</a>

<a href="mailto:myronmzd22@gmail.com" target="_blank">click link to send mail</a>

#5

Title 

<head>
  <title>This is the title of the webpage!</title>
  <link rel="Icon" href="https://cdn-icons-png.flaticon.com/512/5602/5602732.png">
</head>

#6
Tables 

<table>
    <th>Category</th>
    <th>AWS</th>
    <th>Azure</th>
    <tr>
      <td>Compute</td>
      <td>EC2</td>
      <td>VM</td>
    </tr>
    <tr>
      <td>Container Services</td>
      <td>ECS, EKS, Fargate</td>
      <td>AKS, Container Instance</td>
    </tr>
    <tr>
      <td>Serverless</td>
      <td>Lambda</td>
      <td>Azure Functions</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>S3, EFS, FSx, Glacier</td>
      <td>Blob Storage, Files, Disks</td>
    </tr>
    <tr>
      <td>Databases</td>
      <td>RDS, DynamoDB, Aurora</td>
      <td>SQL Database, Cosmos DB</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td>VPC, Route 53, ELB</td>
      <td>VNet, Azure DNS, Load Balancer</td>
    </tr>
    <tr>
      <td>IAM & Security</td>
      <td>IAM, KMS, AWS Shield</td>
      <td>Azure AD, Key Vault, Defender</td>
    </tr>
    <tr>
      <td>Monitoring & Logging</td>
      <td>CloudWatch, CloudTrail</td>
      <td>Azure Monitor, Log Analytics</td>
    </tr>
    <tr>
      <td>Big Data & Analytics</td>
      <td>EMR, Glue, Athena</td>
      <td>HDInsight, Synapse, Data Factory</td>
    </tr>
    <tr>
      <td>AI & ML</td>
      <td>SageMaker, Rekognition</td>
      <td>Azure ML, Cognitive Services</td>
    </tr>
  </table>

|        Category      |           AWS          |               Azure              |  
|:--------------------:|:----------------------:|:--------------------------------:|
|        Compute       |           EC2          |                VM                |   
|  Container Services  |    ECS, EKS, Fargate   |      AKS, Container Instance     |   
|      Serverless      |         Lambda         |          Azure Functions         |   
|        Storage       |  S3, EFS, FSx, Glacier |    Blob Storage, Files, Disks    |   
|       Databases      |  RDS, DynamoDB, Aurora |      SQL Database, Cosmos DB     |   
|      Networking      |   VPC, Route 53, ELB   |  VNet, Azure DNS, Load Balancer  |  
|    IAM & Security    |  IAM, KMS, AWS Shield  |   Azure AD, Key Vault, Defender  |   
| Monitoring & Logging | CloudWatch, CloudTrail |   Azure Monitor, Log Analytics   |  
| Big Data & Analytics |    EMR, Glue, Athena   | HDInsight, Synapse, Data Factory |   
|        AI & ML       | SageMaker, Rekognition |   Azure ML, Cognitive Services   |  

