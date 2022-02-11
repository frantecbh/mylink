import React, { useState } from 'react';
import { FiX, FiClipboard } from 'react-icons/fi'

import './styles.css'


export function LinkItem({ closeModal, conteudo }) {

  const [linkcopy, setLinkCopy] = useState(false)

  async function copyLink() {

    await navigator.clipboard.writeText(conteudo.link)
    setLinkCopy(true)


    setTimeout(() => {
      setLinkCopy(false)
    }, 1000);
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>
      <div className="link-copy">
        <span>{conteudo.long_url}</span>
        {
          linkcopy && (
            <span className='alert-copy'>link copiado!</span>
          )
        }

      </div>

      <button onClick={copyLink} className='modal-link'>
        {conteudo.link}
        <FiClipboard size={20} color="#FFF" />
      </button>

    </div>
  )
}
