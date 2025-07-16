
const ramos = [
  { codigo: "PG315", nombre: "TÉCNICAS DE COMUNICACION Y REDACCIÓN", creditos: 2, semestre: 1, requisitos: [] },
  { codigo: "MT301B", nombre: "ÁLGEBRA LINEAL", creditos: 3, semestre: 1, requisitos: [] },
  { codigo: "MT104", nombre: "CÁLCULO DIFERENCIAL", creditos: 3, semestre: 1, requisitos: [] },
  { codigo: "UPC01", nombre: "CÁTEDRA UPECISTA", creditos: 1, semestre: 1, requisitos: [] },
  { codigo: "HM201", nombre: "HUMANIDADES I", creditos: 2, semestre:  1, requisitos: [] },
  { codigo: "AS100", nombre: "INTRODUCCIÓN A LA ING. AMBIENTAL Y SANITARIA", creditos: 2, semestre: 1, requisitos: [] },
  { codigo: "CN332", nombre: "QUÍMICA I", creditos: 4, semestre: 1, requisitos: [] },

  { codigo: "CN206", nombre: "BIOLOGÍA I", creditos: 3, semestre: 2, requisitos: [] },
  { codigo: "MT303B", nombre: "CÁLCULO INTEGRAL", creditos: 3, semestre: 2, requisitos: ["MT104"] },
  { codigo: "AS201", nombre: "DIBUJO", creditos: 2, semestre: 2, requisitos: [] },
  { codigo: "UPC04", nombre: "LENGUA EXTRANJERA - GRAMÁTICA", creditos: 2, semestre: 2, requisitos: [] },
  { codigo: "FS202", nombre: "MECÁNICA", creditos: 3, semestre: 2, requisitos: ["MT104"] },
  { codigo: "CN333", nombre: "QUÍMICA II", creditos: 4, semestre: 2, requisitos: ["CN332"] },

  { codigo: "SS302", nombre: "ALGORITMOS Y FUNDAMENTOS DE PROGRAMACIÓN", creditos: 2, semestre: 3, requisitos: ["MT301B"] },
  { codigo: "CN345", nombre: "BIOLOGÍA II", creditos: 3, semestre: 3, requisitos: ["CN206"] },
  { codigo: "MT331", nombre: "CÁLCULO MULTIVARIABLE", creditos: 3, semestre: 3, requisitos: ["MT303B"] },
  { codigo: "AS401", nombre: "ECOLOGÍA", creditos: 3, semestre: 3, requisitos: ["AS100"] },
  { codigo: "FS332", nombre: "ELECTROMAGNETISMO", creditos: 3, semestre: 3, requisitos: ["FS202"] },
  { codigo: "ING303", nombre: "EPISTEMOLOGÍA", creditos: 2, semestre: 3, requisitos: ["HM201"] },
  { codigo: "UPC05", nombre: "LENGUA EXTRANJERA - LECTURA", creditos: 2, semestre: 3, requisitos: ["UPC04"] },

  { codigo: "MT305B", nombre: "ECUACIONES DIFERENCIALES ORDINARIAS", creditos: 3, semestre: 4, requisitos: ["MT331"] },
  { codigo: "MT403", nombre: "ESTADÍSTICA DESCRIPTIVA E INFERENCIAL", creditos: 3, semestre: 4, requisitos: ["MT303B"] },
  { codigo: "AS465", nombre: "ESTÁTICA", creditos: 3, semestre: 4, requisitos: ["FS202"] },
  { codigo: "AS466", nombre: "FISICOQUÍMICA AMBIENTAL", creditos: 3, semestre: 4, requisitos: ["CN333"] },
  { codigo: "UPC06", nombre: "LENGUA EXTRANJERA - ESCRITURA", creditos: 2, semestre: 4, requisitos: ["UPC05"] },
  { codigo: "AS468", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN I", creditos: 2, semestre: 4, requisitos: ["ING303"] },
  { codigo: "AS467", nombre: "MICROBIOLOGÍA AMBIENTAL", creditos: 3, semestre: 4, requisitos: ["CN345"] },

  { codigo: "AS504", nombre: "DISEÑO EXPERIMENTAL", creditos: 2, semestre: 5, requisitos: ["MT403"] },
  { codigo: "AS405", nombre: "GEOLOGÍA", creditos: 3, semestre: 5, requisitos: ["AS466"] },
  { codigo: "UPC07", nombre: "LENGUA EXTRANJERA - CONVERSACIÓN", creditos: 2, semestre: 5, requisitos: ["UPC06"] },
  { codigo: "AS501", nombre: "MECÁNICA DE FLUIDOS", creditos: 3, semestre: 5, requisitos: ["AS465"] },
  { codigo: "AS502", nombre: "QUÍMICA SANITARIA", creditos: 3, semestre: 5, requisitos: ["AS466"] },
  { codigo: "AS413", nombre: "RESISTENCIA DE MATERIALES", creditos: 3, semestre: 5, requisitos: ["AS465"] },
  { codigo: "AS503", nombre: "TOPOGRAFÍA", creditos: 3, semestre: 5, requisitos: [] },

  { codigo: "UPC08", nombre: "ACTIVIDAD DEPORTIVA", creditos: 1, semestre: 6, requisitos: [] },
  { codigo: "AS602", nombre: "CONCRETO", creditos: 3, semestre: 6, requisitos: ["AS413"] },
  { codigo: "AS603", nombre: "DISEÑO DE ACUEDUCTO", creditos: 3, semestre: 6, requisitos: ["AS503", "AS501"] },
  { codigo: "AS604", nombre: "HIDRÁULICA", creditos: 3, semestre: 6, requisitos: ["AS501"] },
  { codigo: "AS605", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN II", creditos: 2, semestre: 6, requisitos: ["AS468"] },
  { codigo: "AS412", nombre: "RECURSOS NATURALES", creditos: 3, semestre: 6, requisitos: [] },
  { codigo: "AS601", nombre: "SUELOS", creditos: 3, semestre: 6, requisitos: ["AS405"] },

  { codigo: "UPC09", nombre: "ACTIVIDAD CULTURAL", creditos: 1, semestre: 7, requisitos: [] },
  { codigo: "AS703", nombre: "DISEÑO DE ALCANTARILLADO", creditos: 3, semestre: 7, requisitos: ["AS603"] },
  { codigo: "AS702", nombre: "GEOMÁTICA", creditos: 2, semestre: 7, requisitos: ["AS503"] },
  { codigo: "AS411", nombre: "HIDROLOGÍA", creditos: 3, semestre: 7, requisitos: ["AS412", "MT403"] },
  { codigo: "AS705", nombre: "LEGISLACIÓN AMBIENTAL", creditos: 2, semestre: 7, requisitos: ["AS412"] },
  { codigo: "AS701", nombre: "PROCESOS QUÍMICOS Y BIOLÓGICOS", creditos: 3, semestre: 7, requisitos: ["AS467", "AS502"] },
  { codigo: "AS704", nombre: "TRATAMIENTO DE AGUA POTABLE", creditos: 3, semestre: 7, requisitos: ["AS604"] },

  { codigo: "AS806", nombre: "ECONOMÍA AMBIENTAL", creditos: 2, semestre: 8, requisitos: ["AS705"] },
  { codigo: "AS804", nombre: "EVALUACIÓN DE IMPACTO AMBIENTAL", creditos: 3, semestre: 8, requisitos: ["AS705"] },
  { codigo: "AS802", nombre: "MANEJO DE CUENCAS", creditos: 3, semestre: 8, requisitos: ["AS702", "AS411"] },
  { codigo: "AS805", nombre: "PROYECTO DE INVESTIGACIÓN", creditos: 2, semestre: 8, requisitos: ["AS605"] },
  { codigo: "AS803", nombre: "TRATAMIENTO DE AGUAS RESIDUALES", creditos: 3, semestre: 8, requisitos: ["AS703", "AS701"] },
  { codigo: "AS801", nombre: "TRATAMIENTO DE RESIDUOS SÓLIDOS", creditos: 3, semestre: 8, requisitos: ["AS601"] },

  { codigo: "AS426", nombre: "CONTROL DE CONTAMINACIÓN ATMOSFÉRICA", creditos: 3, semestre: 9, requisitos: ["AS702"] },
  { codigo: "AS903", nombre: "COSTOS Y PRESUPUESTO", creditos: 2, semestre: 9, requisitos: ["AS704", "AS803"] },
  { codigo: "AS424", nombre: "ELECTIVA IA", creditos: 2, semestre: 9, requisitos: [] },
  { codigo: "FC407", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS EN INGENIERÍA", creditos: 3, semestre: 9, requisitos: ["AS806"] },
  { codigo: "AS902", nombre: "SEGURIDAD Y SALUD EN EL TRABAJO", creditos: 3, semestre: 9, requisitos: ["AS705"] },

  { codigo: "AS462", nombre: "COMUNIDAD Y GESTIÓN EMPRESARIAL", creditos: 3, semestre: 10, requisitos: ["FC407"] },
  { codigo: "AS425", nombre: "ELECTIVA IB", creditos: 2, semestre: 10, requisitos: [] },
  { codigo: "AS428", nombre: "ELECTIVA II", creditos: 2, semestre: 10, requisitos: [] },
  { codigo: "AS102", nombre: "PROYECTO DE GRADO", creditos: 2, semestre: 10, requisitos: ["AS805"] },
  { codigo: "AS101", nombre: "SISTEMAS DE GESTIÓN", creditos: 3, semestre: 10, requisitos: ["AS804"] }
];

// Generar malla curricular y lógica interactiva

const malla = document.getElementById("malla");
const porSemestre = {};
ramos.forEach(ramo => {
  if (!porSemestre[ramo.semestre]) porSemestre[ramo.semestre] = [];
  porSemestre[ramo.semestre].push(ramo);
});

const creditosTotales = document.createElement("div");
creditosTotales.id = "creditos";
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
    if (div) div.classList.add("aprobado");
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
      } else {
        document.getElementById(ramo.codigo)?.classList.add("bloqueado");
      }
    }
  });
}

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

    if (ramo.requisitos.length > 0) {
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

// Botón para reiniciar progreso
const botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "Reiniciar malla";
botonReiniciar.style.margin = "20px auto";
botonReiniciar.style.display = "block";
botonReiniciar.addEventListener("click", () => {
  localStorage.removeItem("ramosAprobados");
  document.querySelectorAll(".ramo").forEach(div => {
    div.classList.remove("aprobado");
    if (ramos.find(r => r.codigo === div.id).requisitos.length > 0) {
      div.classList.add("bloqueado");
    }
  });
  actualizarCreditos();
});
document.body.appendChild(botonReiniciar);

cargarProgreso();
desbloquearRamos();
actualizarCreditos();

