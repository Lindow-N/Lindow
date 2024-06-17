import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmHSoqAkxjRF8BIL20HZptATlXTbX0Bxk",
  authDomain: "lindow-9805a.firebaseapp.com",
  projectId: "lindow-9805a",
  storageBucket: "lindow-9805a.appspot.com",
  messagingSenderId: "119518289749",
  appId: "1:119518289749:web:300d0222473f05c6b1d9dc",
  measurementId: "G-546JG4RG4Q",
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const canSendEmail = () => {
  const lastSentTime = localStorage.getItem("lastSentTime");
  const now = new Date().getTime();
  const hourInMillis = 3600000; // Une heure en millisecondes

  if (lastSentTime && now - lastSentTime < hourInMillis) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData, clearForm) => {
  if (!formData.name) {
    toast.error("Le nom est requis");
    return;
  }

  if (!validateEmail(formData.email)) {
    toast.error("Votre email n'est pas correct");
    return;
  }

  if (!formData.email) {
    toast.error("L'email est requis");
    return;
  }

  if (!formData.Message || formData.Message.length < 10) {
    toast.error("Le message doit contenir au moins 10 caractères");
    return;
  }

  if (!canSendEmail()) {
    toast.error(
      "Vous avez déjà envoyé un email récemment. Veuillez réessayer plus tard."
    );
    return;
  }

  try {
    await addDoc(collection(db, "mail"), {
      to: "anthony.casares@lindow.fr",
      message: {
        subject: `Contact from ${formData.name} (${formData.email})`,
        html: `
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <br>
          <p><strong>Message:</strong></p>
          <p>${formData.Message}</p>
        `,
      },
    });
    localStorage.setItem("lastSentTime", new Date().getTime());
    toast.success("Email envoyé avec succès !");
    clearForm(); // Réinitialiser le formulaire après envoi réussi
  } catch (error) {
    console.error("Erreur:", error);
    toast.error("Erreur lors de l'envoi de l'email.");
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
