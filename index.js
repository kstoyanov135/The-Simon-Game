const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');



const getRandomPanel = () => {
    const panels = [
        topLeft, 
        topRight, 
        bottomLeft, 
        bottomRight
    ]
    return panels
}

const sequences = [topLeft, topRight, bottomLeft, bottomRight];

const flash = (panel) => {
    return new Promise((resolve, reject) => {
      panel.classList.add('active');
      setTimeout(() => {
        panel.classList.remove('active');
        resolve();
      }, 1000);
    });
  };

const main = async () => {
    for (const panel of sequences) {
        await flash(panel)
    }
    
};

main();