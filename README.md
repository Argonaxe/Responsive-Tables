# Responsive-Tables
This is a simple solution to getting basic html tables to work on mobile devices, I've recently updated the source code to allow for support in IE9, **however**, you should note that it’s more about the CSS with IE9 than the JS. The JS seems to work fine in IE9, but due to the way that IE9 renders the HTML, the CSS that I previously had in place didn’t seem to work very well. 

# How To Use It?
You can simply either use the JS script that I've written, OR, you can also just manually use the html data attribute on the td tags and apply the th's value yourself. With this solution, you can easily just remove the entire script tag all together if you like, it is optional, I only wrote a JS implementation to automate this due to the fact that some dynamic websites may have hundreds of static pages, and among these pages there may be tables. In such a scenario, unless it’s already been done, or you have some alternative method to doing it, this solution simply allows for an easy way to make the majority of those tables fully responsive. 

# Possible Issues
The only time I can see this solution failing is when you have some sort of complex table structure in place, one where you may have nested tables, etc, I haven’t personally tested this yet. In which case in the next release, I will try to create a solution that covers the likes of more complex tables.  
