// publication data
const data = [
  {
    year: 2021,
    title: "Knowing me, knowing you: Personalized explanations for a music recommender system, (To Appear). Millecamp M., Conati C. and Verbert K. Journal of User Modeling, Adaptation and Personalization.",
    authors: "",
    keywords: ["Music Recommender", "XAI"],
    active: "yes",
  },
  {
    year: 2020,
    title: "Millecamp, M, Htun, NN, Conati, C. and Verbert, K. What's in a User? (2020) Towards Personalising Transparency For Music Recommender Interfaces (2020) Proceedings of UMAP 2020, the 28th International Conference on User Modeling, Adaptation and Personalization, 23% AR",
    authors: "",
    keywords: ["Music Recommender", "XAI"],
    active: "yes",
  },
  {
    year: 2021,
    title: "Conati C., Barral O., Putnam, V., and Rieger L. (2021) Toward personalized XAI: A case study in intelligent tutoring systems, Artificial Intelligence 298, 103503 ",
    authors: "",
    keywords: ["XAI ITS", "XAI"],
    active: "yes",
  },
  {
    year: 2020,
    title: "Conati C., Lalle S., Rhaman  A, and Toker  D. (2020) Comparing and Combining Interaction and Eye Tracking Data for the Real-Time Prediction of User Cognitive Abilities in Visualization Tasks, ACM Transactions on Intelligent Interactive Systems 10(2), 1-41.  ",
    authors: "",
    keywords: ["Eye gaze", "User perceptual"],
    active: "yes",
  },
];

// function to render keywords
const renderKeywords = () => {
  // get keywords from data
  const keywords = new Set();
  data.forEach((elt) => keywords.add(...elt.keywords));
  // get select element
  const selectElement = document.getElementById("filters");
  // add keywords to select
  keywords.forEach((elt) => {
    const option = document.createElement("option");
    option.value = elt;
    option.innerText = elt;

    selectElement.append(option);
  });
};



// function to render publication data
const renderList = (data) => {
  const pubList = document.getElementById("pub-list");
  data.map((elt) => {
    const newChild = document.createElement("li");
    
    // const h2child = document.createElement("h2");
    // h2child.innerText = "202";
    // newChild.append(h2child)

    // creating new div child
    const divChild = document.createElement("div");
    divChild.dataset.year = elt.year;
    divChild.dataset.title = elt.title;
    divChild.dataset.authors = elt.authors;
    divChild.dataset.keywords = elt.keywords;
    divChild.innerText = elt.title;
    divChild.active = elt.active;
    divChild.classList.add("publicationpaper");

    // creating h5 element
    // TODO: remove keywords from here and add whatever we need
    const h5Child = document.createElement("h5");
    h5Child.style.color = "black";
    //h5Child.style.backgroundColor = "tomato"
    h5Child.innerText = elt.keywords;
    divChild.append(h5Child);
    

    // adding div to li element
    newChild.append(divChild);
    // append element to publications list
    pubList.append(newChild);
  });
};

function onFilterSelect(e) {
  // get select element
  const selectElement = document.getElementById("filters");
  // get selected value
  const selected = selectElement.value;

  // get list of publications
  const pubList = document.getElementById("pub-list");

  // if the user didn't select All then show filtered list
  if (selected !== "all") {
    // filter publications based on keyword
    const filteredData = data.filter((elt) => elt.keywords.includes(selected));
    // clear inner html
    pubList.innerHTML = "";

    // render list
    renderList(filteredData);
  } else {
    // clear html
    pubList.innerHTML = "";
    // show all items
    renderList(data);
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function filterquery(){
  
  const pubList = document.getElementById("pub-list");

  // Get the value of "q" in eg "https://example.com/?q=some_value"
  var q = getParameterByName('q');

  if (q !==null){
    // filter publications based on keyword
    const filteredData = data.filter((elt) => elt.keywords.includes(q));
    
    // clear inner html
    pubList.innerHTML = "";
    
    // render list
    renderList(filteredData);

    document.getElementById('filters').value = q;

  }
  else{
    // clear html
    pubList.innerHTML = "";
    // show all items
    renderList(data);
  }
}




renderKeywords();
renderList(data);
filterquery();