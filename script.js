

const heading=React.createElement('h1',{className:'heading'},"Topics Covered");
const text=React.createElement('p',{className:'text'},"The following is a list of all the topics We cover in the dev learning area");

const gettingStarted=React.createElement('a',{href:"#",className:'link'},"Getting Started");
const gettingStartedText=React.createElement('p',{className:'text'},"Setting up ReactJs CDN into your project is similar to adding any JS script into your Vanilla JS Project. You need to add your CDN script to the index.html file, and then you are all set to go");

const web =React.createElement('a',{href:'#',className:'link'},"HTML - Structuring the Web");
const webText =React.createElement('p',{className:'text'},"HTML is used to specify whether your web content should be recognized as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define.");

const styleWeb =React.createElement('a',{href:"#",className:'link'},'CSS - Styling the Web');
const styleWebText =React.createElement('p',{className:'text'},'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.');


const container =React.createElement('div',{className:'container card'},[
    
    heading,
    text,
    gettingStarted,
    gettingStartedText,
    web,
    webText,
    styleWeb,
    styleWebText,
])

ReactDOM.render(container,document.getElementById('root'));
