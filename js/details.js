const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ]
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ]
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }

  ];

// Display of Collection
let currentId;

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentId = urlParams.get("id");

    const currentCollection = imageSets.filter(item => item.id == currentId);
  


    const collection = `<div class="current-collection">
    <div class="current-collec-info">
      <h2>${currentCollection[0].title}</h2>
      <p class="current-collec-name">${currentCollection[0].name}</p>
    </div>
    <img src=${currentCollection[0].images[0]} alt=${currentCollection[0].title} class="current-collection-image" />
    <p class="counter"><span>1</span> of ${currentCollection[0].images.length}</p>
    <div class="btn-container">
     <button onclick="previousImg()" class="previous">Previous</button>
     <button onclick="nextImg()" class="next">Next</button>
    </div>
    </div>`

    const detailsContainer = document.querySelector(".submissions-collection");
    detailsContainer.innerHTML = collection;
};





// Next Button Function

const nextImg = () => {
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");

  const currentCollection = imageSets.filter(item => item.id == currentId);

  const currentImage = document.querySelector(".current-collection-image");
  const counter = document.querySelector("span");
  
  if (currentImage.src === currentCollection[0].images[4]) {
     currentImage.src = currentCollection[0].images[0];
     counter.innerHTML = 1;
  } else if (currentImage.src !== currentCollection[0].images[4]) {
    for (let i = currentCollection[0].images.indexOf(currentImage.src); i < currentCollection[0].images.length; i++) {
    currentImage.src = currentCollection[0].images[i + 1];
    counter.innerHTML++;
    break;
    }
  }
}





// Previous Button Function

const previousImg = () => {
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");

  const currentCollection = imageSets.filter(item => item.id == currentId);

  const currentImage = document.querySelector(".current-collection-image");
  const counter = document.querySelector("span");
  
  if (currentImage.src === currentCollection[0].images[0]) {
     currentImage.src = currentCollection[0].images[4];
     counter.innerHTML = 5;
  } else if (currentImage.src !== currentCollection[0].images[0]) {
    for (let i = currentCollection[0].images.indexOf(currentImage.src); i < currentCollection[0].images.length; i++) {
    currentImage.src = currentCollection[0].images[i - 1];
    counter.innerHTML--;
    break;
    }
  }
}





// Dark Mode
const themeButton = document.querySelector("#darkmode");

const darkMode = () => {
  const body = document.querySelector("body");
  const paragraphs = document.querySelectorAll("p");
  const heading = document.querySelector("h2");
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");

  console.log(body.style.backgroundColor);

  if (body.style.backgroundColor === "rgb(42, 59, 73)") {
    heading.style.color = "black";
    body.style.backgroundColor = "white";
    previous.style.border = "none";
    next.style.border = "none";
    themeButton.innerHTML = "Dark Mode";
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "black";
    }
  } else {
    heading.style.color = "white";
    body.style.backgroundColor = "#2a3b49";
    previous.style.border = "1px solid #7BFFE9";
    next.style.border = "1px solid #7BFFE9";
    themeButton.innerHTML = "Light Mode";
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "white";
    }
  }
};
themeButton.onclick = darkMode;


