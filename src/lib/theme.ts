/**
 * ===================================================
 * TBe20 Theme-Konfiguration
 * ===================================================
 *
 * Hier kannst du Farben und Schriftart der gesamten
 * Website an EINER Stelle ändern.
 *
 * FARBEN ÄNDERN:
 *   1. Ändere die Werte in `colors` unten
 *   2. Speichern → Website aktualisiert sich automatisch
 *
 * FONT ÄNDERN:
 *   Option A - Google Font:
 *     1. Ändere `fontFamily` auf den Namen des Google Fonts
 *     2. Ändere `fontSource` auf 'google'
 *     3. Ändere `googleFontImport` auf die @import-URL von Google Fonts
 *
 *   Option B - Eigener/lokaler Font:
 *     1. Lege die Font-Datei(en) in /public/fonts/ ab
 *     2. Ändere `fontSource` auf 'local'
 *     3. Ändere `fontFamily` auf den gewünschten Namen
 *     4. Passe `localFontFaces` an (Pfad, Gewicht, Style)
 *
 * ===================================================
 */

export const theme = {
  // ─── SCHRIFTART ───────────────────────────────────
  font: {
    /** Name der Schriftfamilie (z.B. 'Inter', 'Poppins', 'Roboto', 'Montserrat') */
    fontFamily: 'Inter',

    /** Quelle: 'google' oder 'local' */
    fontSource: 'google' as 'google' | 'local',

    /** Google Fonts @import URL (nur relevant wenn fontSource = 'google')
     *  → Gehe zu https://fonts.google.com, wähle einen Font,
     *    kopiere die @import-URL und füge sie hier ein
     */
    googleFontImport:
      '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");',

    /** Lokale Font-Faces (nur relevant wenn fontSource = 'local')
     *  → Lege die Font-Dateien in /public/fonts/ ab
     */
    localFontFaces: [
      {
        src: '/fonts/custom-font-regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        src: '/fonts/custom-font-medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        src: '/fonts/custom-font-semibold.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        src: '/fonts/custom-font-bold.woff2',
        weight: '700',
        style: 'normal',
      },
    ],
  },

  // ─── FARBEN ───────────────────────────────────────
  //
  // Farbschema-Vorschläge:
  //
  // AKTUELL (Türkis/Grün):
  //   primary-500: #0d9488
  //
  // BLAU (Professional):
  //   primary-500: #2563eb  (50: #eff6ff, 100: #dbeafe, 200: #bfdbfe, 300: #93c5fd, 400: #60a5fa, 500: #2563eb, 600: #1d4ed8, 700: #1e40af, 800: #1e3a8a, 900: #1e3054)
  //
  // VIOLET (Modern):
  //   primary-500: #7c3aed  (50: #f5f3ff, 100: #ede9fe, 200: #ddd6fe, 300: #c4b5fd, 400: #a78bfa, 500: #7c3aed, 600: #6d28d9, 700: #5b21b6, 800: #4c1d95, 900: #3b1578)
  //
  // LILA (aus dem Logo):
  //   primary-500: #8b5cf6  (50: #faf5ff, 100: #f3e8ff, 200: #e9d5ff, 300: #d8b4fe, 400: #c084fc, 500: #8b5cf6, 600: #7c3aed, 700: #6d28d9, 800: #5b21b6, 900: #4c1d95)
  //
  // ORANGE (Energetisch):
  //   primary-500: #ea580c  (50: #fff7ed, 100: #ffedd5, 200: #fed7aa, 300: #fdba74, 400: #fb923c, 500: #ea580c, 600: #c2410c, 700: #9a3412, 800: #7c2d12, 900: #6c2710)
  //
  colors: {
    primary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#0d9488',   // ← HAUPTFARBE
      600: '#0a7c72',
      700: '#0f5e56',
      800: '#134e47',
      900: '#1a3a36',
    },
    dark: '#0f172a',
    darkLight: '#1e293b',
  },
} as const

// ─── Hilfsfunktion: Generiert CSS-Variablen aus der Konfiguration ───
export function generateThemeCSS(): string {
  const { colors, font } = theme

  let fontImport = ''
  let fontFaces = ''

  if (font.fontSource === 'google') {
    fontImport = font.googleFontImport
  } else {
    fontFaces = font.localFontFaces
      .map(
        (f) => `
@font-face {
  font-family: '${font.fontFamily}';
  src: url('${f.src}') format('woff2');
  font-weight: ${f.weight};
  font-style: ${f.style};
  font-display: swap;
}`
      )
      .join('\n')
  }

  return `
${fontImport}
${fontFaces}
`
}
