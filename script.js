document.getElementById("fake-login").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const inputs = document.querySelectorAll("#fake-login input");
    const usuario = inputs[0].value;
    const senha = inputs[1].value;
  
    localStorage.setItem("usuarioFake", usuario);
    localStorage.setItem("senhaFake", senha);
  
    window.location.href = "terminal.html";
  });
  
  document.getElementById("forgot").addEventListener("click", function(e) {
    e.preventDefault();
    alert("⚠️ Esta é uma simulação. Nenhuma senha será enviada.");
  });
  
  document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });  