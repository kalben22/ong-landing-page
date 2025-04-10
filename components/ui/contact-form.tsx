"use client"

import { Button } from "@/components/ui/button"
import { useFormValidation } from "@/hooks/use-form-validation"
import { FormInput } from "@/components/ui/form-input"
import { FormTextarea } from "@/components/ui/form-textarea"
import { useState } from "react"
import type { FormData } from "@/types"

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const initialFormState: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useFormValidation(initialFormState)

  const onSubmit = async (data: FormData) => {
    // Simuler un envoi de formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Formulaire soumis:", data)
    setFormSubmitted(true)

    // Réinitialiser le statut après 5 secondes
    setTimeout(() => setFormSubmitted(false), 5000)
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
