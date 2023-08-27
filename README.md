<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.325 seconds.


Using this Markdown file:


----->


**Candidates Tool for Builders of Hope**

This project aimed to produce a tool to display, add, update, and remove home candidates for the Builders of Hope.  The initial plan was to have display:flex components of candidates wrapped in the candidates main page.  Each candidate element has a background with an image of the candidate family.  If the image was hovered, it would replace the background with the details of each candidate.  Double-clicking a candidate would open an edit view with update and delete buttons.  Updating the information of a candidate would also update the noDB backend as well as updating the information on the page.  Deleting a candidate would delete the candidate from the backend as well as the front end.  

**Display**: Shows all candidates and images as background.  I didn’t get around to switching between image and data views on mouse hover.  

**Add**: A plus image shows always in the top left of the page.  When double-clicked, it produces a form that lets a person type in data for the candidate families.  I had family members as a subobject to the members field and that was a big problem because objects are not compatible with HTML forms.  Once the data is added, clicking save will save it to the backend and add the new candidate at the bottom of the form.  

**Update**: This works with a postman call, but not from the front end. This would simply update fields in a form if they are different from before.  The nested object situation was bad here too.  I put the existing data into an input object and members show up as [object, object],, etc.  Saving this form then attempts to put the messed up member data back into the main data form and throws an error because the members don’t parse out anymore.  

**Delete**: This tool works from a postman call, but not from the front end for the same reasons.

Another problem I didn’t resolve is how to just turn the element I am working on into edit mode instead of all the elements. 
