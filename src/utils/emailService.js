import { toast } from "react-toastify";

const canSendEmail = () => {
  const lastSentTime = localStorage.getItem("lastSentTime");
  const now = new Date().getTime();
  const hourInMillis = 3600000; // Une heure en millisecondes

  if (lastSentTime && now - lastSentTime < hourInMillis) {
    return false;
  }
  localStorage.setItem("lastSentTime", now);
  return true;
};

export const sendEmail = async (formData) => {
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
    toast.error("Vous ne pouvez envoyer qu'un seul message par heure.");
    return;
  }

  try {
    const response = await fetch(
      "https://<your-region>-<your-project-id>.cloudfunctions.net/sendContactEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      toast.success("Email envoyé avec succès !");
    } else {
      toast.error("Erreur lors de l'envoi de l'email.");
    }
  } catch (error) {
    console.error("Erreur:", error);
    toast.error("Erreur lors de l'envoi de l'email.");
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
