// script.js

const ramos = [
  // (misma lista completa de ramos...)
  { codigo: "AS101", nombre: "SISTEMAS DE GESTIÓN", creditos: 3, semestre: 10, requisitos: ["AS804"] }
];

const malla = document.getElementById("malla");
const porSemestre = {};

const creditosTotales = document.createElement("div");
creditosTotales.style.textAlign = "center";
creditosTotales.style.fontWeight = "bold";
creditosTotales.style.margin = "20px";
document.body.insertBefore(creditosTotales, malla);

function actualizarCreditos() {
  const aprobados = document.querySelectorAll(".ramo.aprobado");
  let total = 0;
  aprobados.forEach(el => {
    const codigo = el.id;
    const ramo = ramos.find(r => r.codigo === codigo);
    total += ramo ? ramo.creditos : 0;
  });
  creditosTotales.textContent = `Créditos aprobados: ${total}`;
}

function guardarProgreso() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(div => div.id);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function cargarProgreso() {
  const guardados = JSON.parse(localStorage.getItem("ramosAprobados")) || [];
  guardados.forEach(codigo => {
    const div = document.getElementById(codigo);
    if (div && !div.classList.contains("bloqueado")) {
      div.classList.add("aprobado");
    }
  });
}

function desbloquearRamos() {
  ramos.forEach(ramo => {
    if (ramo.requisitos.length > 0) {
      const requisitosCumplidos = ramo.requisitos.every(req =>
        document.getElementById(req)?.classList.contains("aprobado")
      );
      if (requisitosCumplidos) {
        document.getElementById(ramo.codigo)?.classList.remove("bloqueado");
      }
    }
  });
}

ramos.forEach(ramo => {
  if (!porSemestre[ramo.semestre]) porSemestre[ramo.semestre] = [];
  porSemestre[ramo.semestre].push(ramo);
});

for (let semestre = 1; semestre <= 10; semestre++) {
  const titulo = document.createElement("div");
  titulo.className = "semestre";
  titulo.textContent = `Semestre ${semestre}`;
  malla.appendChild(titulo);

  (porSemestre[semestre] || []).forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.codigo;
    div.innerHTML = `
      <div class="codigo">${ramo.codigo}</div>
      <div class="nombre">${ramo.nombre}</div>
      <div class="creditos">${ramo.creditos} créditos</div>
    `;

    if (ramo.requisitos && ramo.requisitos.length > 0) {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;
      div.classList.toggle("aprobado");
      actualizarCreditos();
      guardarProgreso();
      desbloquearRamos();
    });

    malla.appendChild(div);
  });
}

cargarProgreso();
desbloquearRamos();
atualizarCreditos && actualizarCreditos();

