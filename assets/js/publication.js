// publication data

const data22 = [
  {
    year: 2022,
    title: "Classification of Alzheimers Disease Leveraging Multi-Task Machine Learning Analysis of Speech and Eye-Movement Data, (To Appear). Frontiers in Human Neuroscience, section Brain Health and Clinical Neuroscience. Jang H., Soroski T., Rizzo M., Barral O. Harisinghani H., Newton-MasonmS., Granby S., Lewis C., Tutt P., Carenini, G., Conati, C., Field, T. ",
    authors: "",
    keywords: ["Eye tracking","Alzheimer"],
    active: "yes",
  },
  {
    year: 2022,
    title: "Knowing me, knowing you: Personalized explanations for a music recommender system, (To Appear). Millecamp M., Conati C. and Verbert K. Journal of User Modeling, Adaptation and Personalization.",
    authors: "",
    keywords: ["Music Recommender", "XAI"],
    active: "yes",
  },
  {
    year: 2022,
    title: "Effect of Adaptive Guidance and Visualization Literacy on Gaze Attentive Behaviors and Sequential Patterns on Magazine-Style Narrative Visualizations. (To Appear). Barral, O., Lalle’ S., Iranpur A. and Conati C. ACM Transaction on Intelligent Interactive Systems ",
    authors:"",
    keywords: ["Personalization effectiveness"],
    active: "yes",
  },
  
];


const data21 = [
  {
    year: 2021,
    title: "Toward personalized XAI: A case study in intelligent tutoring systems (2021). Conati C., Barral O., Putnam, V., and Rieger L. Artificial Intelligence 298, 103503 ",
    authors: "",
    keywords: ["XAI ITS", "XAI"],
    active: "yes",
  },
];

const data20 = [
{
  year: 2020,
  title: " What's in a User? Towards Personalising Transparency For Music Recommender Interfaces (2020). Millecamp, M, Htun, NN, Conati, C. and Verbert, K. Proceedings of UMAP 2020, the 28th International Conference on User Modeling, Adaptation and Personalization, 23% AR",
  authors: "",
  keywords: ["Music Recommender", "XAI"],
  active: "yes",
},
{
  year: 2020, 
  title: "Comparing and Combining Interaction and Eye Tracking Data for the Real-Time Prediction of User Cognitive Abilities in Visualization Tasks. (2020) Conati C., Lalle’ S., Rhaman  A, and Toker  D.  ACM Transactions on Intelligent Interactive Systems 10(2), 1-41. ",
  authors:"",
  keywords: ["Eye tracking", "User properties"],
  active: "yes",
},
{
  year: 2020, 
  title: "Non-invasive Classification of Alzheimer's Disease Using Eye Tracking and Language (2020). Jang, H., Barral, O., Carenini, G., Conati, C.  Field, T. Soroski, T.  Shajan, S.  Newton-Mason, S. Proceedings of MLHC 2020, Conference on Machine Learning for Healthcare,  813-841, 35% AR ,  ",
  authors:"", 
  keywords: ["Eye tracking", "Alzheimer"],
  active: "yes",
},
];

const data19= [
  {
    year: 2019,
    title: "To Explain or not to Explain: the Effects of Personal Characteristics when Explaining Music Recommendations. (2019). Millecamp, M., Htun, NN, Conati, C., Verbert, K. Proceedings of IUI 2019, 24nd ACM Conference on Intelligent User Interfaces, ACM 329-339",
    authors:"",
    keywords: ["XAI","Music Recommender"],
    active: "yes",
  },
];


const data17= [
  {
    year: 2017,
    title: "Further Results on Predicting Cognitive Abilities for Adaptive Visualizations. (2017). Conati, C., Lalle’ S., Raman, M. A. and Toker, Proceedings of IJCAI 2017, 26th International Joint Conference in Artificial Intelligence, IJCAI/AAAI Press,  p. 1568-1574, ",
    authors:"",
    keywords: ["Eye tracking","User properties"],
    active: "yes",
  },
];

const data16= [
  {
    year: 2016,
    title: "Prediction of individual learning curves across information visualizations. (2016).	Lalle’, S., Conati, C. and Carenini, G. Journal of User Modeling and User-Adapted Interaction, Springer, 26(4), 307–345.",
    authors:"",
    keywords: ["Eye tracking","User properties"],
    active: "yes",
  },
];

const data15= [
  {
    year: 2015,
    title: "Constructing Models of User and Task Characteristics from Eye Gaze Data for User-Adaptive Information Highlighting (2015). Gingerich M. and Conati C.  Proceedings of AAAI 2015, 29th  AAAI Conference on Artificial Intelligence, IJCAI/AAAI Press,  p. 1728-1734.",
    authors:"",
    keywords: ["Eye tracking","User properties"],
    active: "yes",
  },
];

const data14= [
  {
    year: 2014,
    title: "Inferring Visualization Task Properties, User Performance, and User Cognitive Abilities from Eye Gaze Data (2014). Steichen, B., Conati, C. and Carenini, G. ACM Transactions on Interactive Intelligent Systems (TIIS), 4(2): 11",
    authors:"",
    keywords: ["Eye tracking","User properties"],
    active: "yes",
    bestpaper: "yes",
  },
];

const data13= [
  {
    year: 2013,
    title: "Comparing and Combining Eye Gaze and Interface Actions for Determining User Learning with an Interactive Simulation (2013). Kardan, S. and Conati, C. Proceedings on UMAP 2013, 21st Conference on User Modeling, Adaptation and Personalization, Springer LNCS, p. 215-227",
    authors:"",
    keywords: ["Eye tracking","ET ITS"],
    active: "yes",
    bestpaper: "yes",
  },
];

const data07 = [
  {
  year: 2007,
  title: "Eye-Tracking for User Modeling in Exploratory Learning Environments: an Empirical Evaluation. (2007).	Conati C. and Merten C. Knowledge Based Systems, Volume 20 , Issue 6 (August 2007), Elsevier Science Publishers B. V. Amsterdam, The Netherlands, 557-574.",
  authors: "",
  keywords: ["Eye tracking", "ET ITS"],
  active: "yes",
  },
  ];

const data05 = [
{
year: 2005,
title: "Exploring Eye Tracking to Increase Bandwidth in User Modeling (2005). Conati C., Merten C., Muldner K., and Ternes D. Proceedings of the 10th International Conference on User Modeling, Springer, 357-366.",
authors: "",
keywords: ["Eye tracking"],
active: "yes",
},
];

const data = data22.concat(data21.concat(data20.concat(data19.concat(data17.concat(data16.concat(data15.concat(data14.concat(data13.concat(data05)))))))));

// function to render keywords
const renderKeywords = () => {
  // // get keywords from data
  // const keywords = new Set();
  // data.forEach((elt) => keywords.add(...elt.keywords));

  const keywords = new Set(["Alzheimer", "Eye tracking", "ET ITS", "Music Recommender", "User properties", "XAI", "XAI ITS"]);

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
const renderList = (data, listname) => {
  const pubList = document.getElementById(listname);
  year = listname.substring(8, 10);
  if(data.length != 0){
  document.getElementById(year).innerHTML = "20".concat(year);
  }
  data.map((elt) => {
    const newChild = document.createElement("li");
    const newLine = document.createElement("br");
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
    divChild.append(newLine);
    

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
  const pubList22 = document.getElementById("pub-list22");
  const pubList21 = document.getElementById("pub-list21");
  const pubList20 = document.getElementById("pub-list20");
  const pubList19 = document.getElementById("pub-list19");
  const pubList17 = document.getElementById("pub-list17");
  const pubList16 = document.getElementById("pub-list16");
  const pubList15 = document.getElementById("pub-list15");
  const pubList14 = document.getElementById("pub-list14");
  const pubList13 = document.getElementById("pub-list13");
  const pubList05 = document.getElementById("pub-list05");
  // if the user didn't select All then show filtered list
  if (selected !== "all") {
    // filter publications based on keyword
    const filteredData22 = data22.filter((elt) => elt.keywords.includes(selected));
    const filteredData21 = data21.filter((elt) => elt.keywords.includes(selected));
    const filteredData20 = data20.filter((elt) => elt.keywords.includes(selected));
    const filteredData19 = data19.filter((elt) => elt.keywords.includes(selected));
    const filteredData17 = data17.filter((elt) => elt.keywords.includes(selected));
    const filteredData16 = data16.filter((elt) => elt.keywords.includes(selected));
    const filteredData15 = data15.filter((elt) => elt.keywords.includes(selected));
    const filteredData14 = data14.filter((elt) => elt.keywords.includes(selected));
    const filteredData13 = data13.filter((elt) => elt.keywords.includes(selected));
    const filteredData05 = data05.filter((elt) => elt.keywords.includes(selected));
    // clear inner html
    pubList22.innerHTML = "";
    pubList21.innerHTML = "";
    pubList20.innerHTML = "";
    pubList19.innerHTML = "";
    pubList17.innerHTML = "";
    pubList16.innerHTML = "";
    pubList15.innerHTML = "";
    pubList14.innerHTML = "";
    pubList13.innerHTML = "";
    pubList05.innerHTML = "";
    // render list
    renderList(filteredData22, "pub-list22");
    renderList(filteredData21, "pub-list21");
    renderList(filteredData20, "pub-list20");
    renderList(filteredData19, "pub-list19");
    renderList(filteredData17, "pub-list17");
    renderList(filteredData16, "pub-list16");
    renderList(filteredData15, "pub-list15");
    renderList(filteredData14, "pub-list14");
    renderList(filteredData13, "pub-list13");
    renderList(filteredData05, "pub-list05");
  } else {
    // clear html
    pubList22.innerHTML = "";
    pubList21.innerHTML = "";
    pubList20.innerHTML = "";
    pubList19.innerHTML = "";
    pubList17.innerHTML = "";
    pubList16.innerHTML = "";
    pubList15.innerHTML = "";
    pubList14.innerHTML = "";
    pubList13.innerHTML = "";
    pubList05.innerHTML = "";
    // show all items
    renderList(data22, "pub-list22");
    renderList(data21, "pub-list21");
    renderList(data20, "pub-list20");
    renderList(data19, "pub-list19");
    renderList(data17, "pub-list17");
    renderList(data16, "pub-list16");
    renderList(data15, "pub-list15");
    renderList(data14, "pub-list14");
    renderList(data13, "pub-list13");
    renderList(data05, "pub-list05");
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
  
  const pubList22 = document.getElementById("pub-list22");
  const pubList21 = document.getElementById("pub-list21");
  const pubList20 = document.getElementById("pub-list20");
  const pubList19 = document.getElementById("pub-list19");
  const pubList17 = document.getElementById("pub-list17");
  const pubList16 = document.getElementById("pub-list16");
  const pubList15 = document.getElementById("pub-list15");
  const pubList14 = document.getElementById("pub-list14");
  const pubList13 = document.getElementById("pub-list13");
  const pubList05 = document.getElementById("pub-list05");

  // Get the value of "q" in eg "https://example.com/?q=some_value"
  var q = getParameterByName('q');

  if (q !==null){
    // filter publications based on keyword
    const filteredData22 = data22.filter((elt) => elt.keywords.includes(q));
    const filteredData21 = data21.filter((elt) => elt.keywords.includes(q));
    const filteredData20 = data20.filter((elt) => elt.keywords.includes(q));
    const filteredData19 = data19.filter((elt) => elt.keywords.includes(q));
    const filteredData17 = data17.filter((elt) => elt.keywords.includes(q));
    const filteredData16 = data16.filter((elt) => elt.keywords.includes(q));
    const filteredData15 = data15.filter((elt) => elt.keywords.includes(q));
    const filteredData14 = data14.filter((elt) => elt.keywords.includes(q));
    const filteredData13 = data13.filter((elt) => elt.keywords.includes(q));
    const filteredData05 = data05.filter((elt) => elt.keywords.includes(q));
    // clear inner html
    pubList22.innerHTML = "";
    pubList21.innerHTML = "";
    pubList20.innerHTML = "";
    pubList19.innerHTML = "";
    pubList17.innerHTML = "";
    pubList16.innerHTML = "";
    pubList15.innerHTML = "";
    pubList14.innerHTML = "";
    pubList13.innerHTML = "";
    pubList05.innerHTML = "";
    
    // render list
    renderList(filteredData22, "pub-list22");
    renderList(filteredData21, "pub-list21");
    renderList(filteredData20, "pub-list20");
    renderList(filteredData19, "pub-list19");
    renderList(filteredData17, "pub-list17");
    renderList(filteredData16, "pub-list16");
    renderList(filteredData15, "pub-list15");
    renderList(filteredData14, "pub-list14");
    renderList(filteredData13, "pub-list13");
    renderList(filteredData05, "pub-list05");

    document.getElementById('filters').value = q;

  }
  else{
    // clear html
    pubList22.innerHTML = "";
    pubList21.innerHTML = "";
    pubList20.innerHTML = "";
    pubList19.innerHTML = "";
    pubList17.innerHTML = "";
    pubList16.innerHTML = "";
    pubList15.innerHTML = "";
    pubList14.innerHTML = "";
    pubList13.innerHTML = "";
    pubList05.innerHTML = "";
    // show all items
    renderList(data22, "pub-list22");
    renderList(data21, "pub-list21");
    renderList(data20, "pub-list20");
    renderList(data19, "pub-list19");
    renderList(data17, "pub-list17");
    renderList(data16, "pub-list16");
    renderList(data15, "pub-list15");
    renderList(data14, "pub-list14");
    renderList(data13, "pub-list13");
    renderList(data05, "pub-list05");

  }
}




renderKeywords();
renderList(data22, "pub-list22");
renderList(data21, "pub-list21");
renderList(data20, "pub-list20");
renderList(data19, "pub-list19");
renderList(data17, "pub-list17");
renderList(data16, "pub-list16");
renderList(data15, "pub-list15");
renderList(data14, "pub-list14");
renderList(data13, "pub-list13");
renderList(data05, "pub-list05");
filterquery();