# Question and Answer related JS

** 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? **

** answer: getElementById("id") bring just single element with id,

getElementsByClassName("className") bring all classes element,

querySelector("selector") bring also the first single element that found but it is also known as CSS selector,

querySelectorAll("selector") bring all the matching elements with CSS Selector.
**



** 2. How do you create and insert a new element into the DOM? **

** answer: 
    let newDiv = document.createElement("div");
    newDiv.innerText = "This is Injamul Hoque";
    document.body.appendChild(newDiv);

    this is how create an element and insert into the DOM
 **


 ** 3. What is Event Bubbling and how does it work? **

 ** answer: Event Bubbling is basically , when you click a child element it will climbing up to the parent element.
 **


** 4. What is Event Delegation in JavaScript? Why is it useful? **

 ** answer: Event Delegation means, you can use different different child element but if you are not use that you can direct use their parent element and make happen an Event.
 **

 ** 5. What is the difference between preventDefault() and stopPropagation() methods? **

  ** answer: preventDefault()  closes the work of an element default activity.

  stopPropagation()  closes the event bubbling and event will not go to parent element.
 **