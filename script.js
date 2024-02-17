document.addEventListener("DOMContentLoaded", function geradorDeCor() {
    const gerarColorBtn = document.getElementById("btn_generator");
  
    gerarColorBtn.addEventListener("click", function () {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      const mostrarCor = document.getElementById("c_spce");
      mostrarCor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
      
      function rgbToHex(r, g, b) {
          return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
    
        function componentToHex(c) {
          let hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
        }
    
        const hexColor = document.getElementById('num_hexc');
        hexColor.innerHTML = rgbToHex(r, g, b);
    });
  });