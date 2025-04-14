import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBe67kG6oru6nUMTrazQFDeMlZWrWZbzY",
  authDomain: "registro-ocorrencia.firebaseapp.com",
  projectId: "registro-ocorrencia",
  storageBucket: "registro-ocorrencia.firebasestorage.app",
  messagingSenderId: "738928502173",
  appId: "1:738928502173:web:5fef44bc9d84821682bb74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("formOcorrencia").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const ocorrencia = document.getElementById("ocorrencia").value;
  const professor = document.getElementById("professor").value;

  await addDoc(collection(db, "ocorrencias"), {
    nome, ocorrencia, professor
  });

  alert("Ocorrência registrada com sucesso!");
  e.target.reset();
});
