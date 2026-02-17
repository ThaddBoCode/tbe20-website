'use client'

import { useState, useEffect } from 'react'
import { Palette, Type, X } from 'lucide-react'

const colorThemes = [
  { id: 'default', name: 'Stahlblau', color: '#3d7ab0' },
  { id: 'sky', name: 'Himmelblau', color: '#2389e3' },
  { id: 'ocean', name: 'Ozean', color: '#1b5fad' },
  { id: 'charcoal', name: 'Anthrazit', color: '#4e5d6e' },
  { id: 'petrol', name: 'Petrol', color: '#2a7278' },
  { id: 'amber', name: 'Bernstein', color: '#c6851e' },
]

const fontThemes = [
  { id: 'inter', name: 'Inter' },
  { id: 'prometo', name: 'ZF Prometo' },
]

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [activeColor, setActiveColor] = useState('default')
  const [activeFont, setActiveFont] = useState('inter')

  useEffect(() => {
    const savedColor = localStorage.getItem('tbe20-theme') || 'default'
    const savedFont = localStorage.getItem('tbe20-font') || 'inter'
    setActiveColor(savedColor)
    setActiveFont(savedFont)
    applyTheme(savedColor, savedFont)
  }, [])

  function applyTheme(color: string, font: string) {
    const html = document.documentElement
    // Remove all theme attributes
    html.removeAttribute('data-theme')
    html.removeAttribute('data-font')

    // Apply color theme
    if (color !== 'default') {
      html.setAttribute('data-theme', color)
    }

    // Apply font theme
    html.setAttribute('data-font', font)
  }

  function setColor(id: string) {
    setActiveColor(id)
    localStorage.setItem('tbe20-theme', id)
    applyTheme(id, activeFont)
  }

  function setFont(id: string) {
    setActiveFont(id)
    localStorage.setItem('tbe20-font', id)
    applyTheme(activeColor, id)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 group"
        title="Theme wechseln"
      >
        <Palette className="w-5 h-5 text-gray-600 group-hover:text-primary-500 transition-colors" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900">Theme anpassen</h3>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="p-5 space-y-5">
            {/* Color schemes */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Farbschema
              </p>
              <div className="grid grid-cols-3 gap-2">
                {colorThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColor(t.id)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
                      activeColor === t.id
                        ? 'bg-gray-100 ring-2 ring-gray-300'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full shadow-inner border-2 border-white shadow-sm"
                      style={{ backgroundColor: t.color }}
                    />
                    <span className="text-[10px] font-medium text-gray-600">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                <Type className="w-3 h-3 inline mr-1" />
                Schriftart
              </p>
              <div className="flex gap-2">
                {fontThemes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFont(f.id)}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      activeFont === f.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-gray-400 text-center">
              Nur zur Vorschau &ndash; wird im Browser gespeichert
            </p>
          </div>
        </div>
      )}
    </>
  )
}
