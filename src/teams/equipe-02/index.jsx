import { useEffect, useState } from 'react'
import ProjetoPage from './ProjetoPage.jsx'
import TimePage from './TimePage.jsx'
import './equipe-02.css'

// Fontes da página, carregadas uma única vez (sem mexer no index.html do site)
const FONTES =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap'

function useFontes() {
  useEffect(() => {
    if (document.querySelector('link[data-equipe-02-fontes]')) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FONTES
    link.dataset.equipe02Fontes = ''
    document.head.appendChild(link)
  }, [])
}

// Equipe 02: duas páginas interligadas (Projeto e Time) na rota /equipes/equipe-02.
export default function Equipe02() {
  useFontes()
  const [pagina, setPagina] = useState('projeto')

  function irPara(nova) {
    setPagina(nova)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="equipe-02-raiz">
      {pagina === 'projeto' ? (
        <ProjetoPage onVerTime={() => irPara('time')} />
      ) : (
        <TimePage onVoltar={() => irPara('projeto')} />
      )}
    </div>
  )
}
