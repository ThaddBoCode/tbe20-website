'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  interest: string
  message: string
  privacy: boolean
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      // mailto: Fallback — öffnet das E-Mail-Programm des Nutzers
      const subject = encodeURIComponent(`Neue Anfrage: ${data.interest} — ${data.name}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone || 'nicht angegeben'}\nInteresse: ${data.interest}\n\nNachricht:\n${data.message}`
      )
      window.location.href = `mailto:info@tbe20.com?subject=${subject}&body=${body}`
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Nachricht gesendet!</h3>
        <p className="text-gray-600 text-sm">
          Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Bitte geben Sie Ihren Namen ein' })}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
          placeholder="Ihr vollständiger Name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ungültige E-Mail-Adresse',
              },
            })}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
            placeholder="+49 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
          Interesse *
        </label>
        <select
          id="interest"
          {...register('interest', { required: 'Bitte wählen Sie ein Thema' })}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm bg-white"
        >
          <option value="">Bitte wählen...</option>
          <option value="dynamics-365">Microsoft Dynamics 365</option>
          <option value="salesforce">Salesforce / CRM-Migration</option>
          <option value="power-platform">Power Platform</option>
          <option value="digitalisierung">Dokumenten-Digitalisierung</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
        {errors.interest && (
          <p className="mt-1 text-xs text-red-500">{errors.interest.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Nachricht *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Bitte beschreiben Sie Ihr Anliegen' })}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm resize-none"
          placeholder="Erzählen Sie mir von Ihrem Vorhaben..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="privacy"
          type="checkbox"
          {...register('privacy', { required: 'Bitte stimmen Sie der Datenschutzerklärung zu' })}
          className="mt-1 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
        />
        <label htmlFor="privacy" className="text-xs text-gray-500">
          Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
          <a href="/datenschutz" className="text-primary-500 hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zu. *
        </label>
      </div>
      {errors.privacy && (
        <p className="text-xs text-red-500">{errors.privacy.message}</p>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Es gab einen Fehler. Bitte versuchen Sie es erneut oder schreiben Sie an info@tbe20.com.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          'Wird gesendet...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  )
}
