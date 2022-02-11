import React, { useState } from 'react';
import { FiLink } from 'react-icons/fi'
import { LinkItem } from '../../components/LinkItem';
import { Menu } from '../../components/Menu';
import { api } from '../../services/api';
import { saveLink } from '../../services/storageLinks';


import './styles.css'

export function Home() {

  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [dadosLink, setDadosLink] = useState({})

  const [linkerror, setLinkError] = useState(false)

  async function handleShortLink() {
    setLinkError(false)
    // 

    try {

      const { data } = await api.post("/shorten", {
        long_url: link
      })

      setDadosLink(data);
      setShowModal(true)

      saveLink('@encurtaLInk', data)

      setLink('')

    } catch (error) {
      // alert("ops algo deu errado ")
      setLinkError(true)
      setLink('')
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        {/* <img src="./logo.png" alt="Sujeito Link Logo" /> */}
        <h1>Encurta Link</h1>
        <span>Cole seu link para encurta-lo</span>
      </div>

      {
        linkerror && (
          <div className="link-error">
            <h2 className="error-text">
              Link inválido verifique e cole novamente!
            </h2>
          </div>
        )
      }



      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff' />
          <input type="text"
            placeholder='Cole seu link aqui... Ex.: http:// ou https:// '
            value={link}
            onChange={(e) => setLink(e.target.value)} />

        </div>
        <button onClick={handleShortLink} >Encurtar Link</button>
      </div>

      <Menu />



      {
        showModal && (
          <LinkItem conteudo={dadosLink} closeModal={() => setShowModal(false)} />
        )
      }


    </div>
  );
}
