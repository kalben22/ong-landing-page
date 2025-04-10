"use client"

import type React from "react"

import { useState } from "react"
import { isValidEmail } from "@/lib/utils"
import type { FormData } from "@/types"

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}
/**
 * Hook pour la validation de formulaire
 */
export function useFormValidation(initialState: FormData) {
  const [formData, setFormData] = useState<FormData>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validation du prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis"
    }

    // Validation du nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis"
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "L'email n'est pas valide"
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    } else if (formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, onSubmit: (data: FormData) => Promise<void>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validateForm()) {
      try {
        await onSubmit(formData)
        // Réinitialiser le formulaire après soumission réussie
        setFormData(initialState)
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error)
      }
    }

    setIsSubmitting(false)
  }

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  }
}
