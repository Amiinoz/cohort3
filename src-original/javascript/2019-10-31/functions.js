

let count = 1;

const functions = {
  helloWorld: () => {
    console.log("Hello worl from here");
  },

  card: (bigdiv) => {
      
    let newDiv = document.createElement("div");
    bigdiv.appendChild(newDiv); 
    newDiv.setAttribute('count', count++ );
    newDiv.textContent  = `count ${count}`;
    newDiv.className = "test";
    return newDiv;
  },

  cardGroup: (parentDiv) =>{

    let groupCard = functions.card();
    parentDiv.appendChild(groupCard);
     return ;

  }
};



export default functions;
