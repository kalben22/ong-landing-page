"use client"

import { Button } from "@/components/ui/button"
import { useFormValidation } from "@/hooks/use-form-validation"
import { FormInput } from "@/components/ui/form-input"
import { FormTextarea } from "@/components/ui/form-textarea"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import type { FormData } from "@/types"

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const initialFormState: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useFormValidation(initialFormState)

  // Initialiser EmailJS au montage du composant
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")
  }, [])

  const onSubmit = async (data: FormData) => {
    try {
      setFormError("")
      
      // Envoyer l'email avec EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message,
        }
      )

      setFormSubmitted(true)
      console.log("Email envoyé avec succès")

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setFormSubmitted(false), 5000)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      setFormError("Erreur lors de l'envoi du message. Veuillez réessayer.")
    }
  }

  return (
    <form
      className="relative z-10 space-y-4"
      onSubmit={(e) => handleSubmit(e, onSubmit)}
      aria-label="Formulaire de contact"
    >
      {formSubmitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {formError && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
          {formError}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          id="firstName"
          name="firstName"
          label="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />
        <FormInput
          id="lastName"
          name="lastName"
          label="Nom"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
      </div>

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <FormTextarea
        id="message"
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
      />

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </form>
  )
}