# Human AI Interaction @ UBC - Group Website\

## How to update News?
1. Go to news.md in content folder.
2. Add news: Follow the table structure and clone a row. Edit it with new content.
3. Delete news: Remove the row to remove the corresponding news. 


## How to add publications?
1. Go to publication.js page in assets/js/ or [click here](/assets/js/publication.js)
2. Click on the edit button (pencil icon) on the top-right of the code section or [click here to add publication](https://github.com/HAI-UBC/hai-ubc.github.io/edit/main/assets/js/publication.js).
3. Follow the pattern in the existing code to add a new publication.
4. Find the year to add. And add a json within that year. Add new year object if required. 
Try adding 
'''
    {
        year: 20__,
        title: " Paper title ",
        authors: "",
        keywords: ["keyword1", "keyword2"],
        active: "yes",
    },
'''

* Make sure that the keywords you added exists in the keywords set in the same file. 

## How to add new members?
1. Go to the people page from the file navigator above or [click here](/people.html). 
2. Click on the edit button (pencil icon) on the top-right of the code section or [click here to edit people](https://github.com/HAI-UBC/hai-ubc.github.io/edit/main/people.html). 
3. Follow the pattern in the existing code to add a new member.
Try adding
```
   <div>
        <img src="image_link" alt="alt">
        <a href="website link">
            <h3> Jane Doe </h3>
        </a>
        <h4> MSc/PhD</h4>
    </div>
```



