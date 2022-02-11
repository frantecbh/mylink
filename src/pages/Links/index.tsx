import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { LinkItem } from '../../components/LinkItem';
import { deletLink, getLinksSave } from '../../services/storageLinks';

import './styles.css'

export function Links() {

  const [myLinks, setMylinks] = useState([])

  const [dadosLink, setDadosLink] = useState({})
  const [showModal, setShowModal] = useState(false)

  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {

    async function getLinks() {
      const result = await getLinksSave('@encurtaLInk')

      // console.log(result)

      if (result.length === 0) {

        setEmptyList(true)

      }

      setMylinks(result)
    }


    getLinks()

  }, []);


  function handleOpenLink(link) {

    setDadosLink(link)
    setShowModal(true)
  }

  async function handleDelete(id) {


    const result = await deletLink(myLinks, id)



    if (result.length === 0) {
      setEmptyList(true)
    }

    setMylinks(result)


  }


  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to="/" >
          <FiArrowLeft size={38} color="#fff" />
        </Link>

        <h1>Meus Links</h1>
      </div>

      {
        emptyList && (
          <div className="links-item">
            <h2 className='empty-text'>Você não possui links armazenados...</h2>
          </div>
        )
      }

      {
        myLinks.map(link => (

          <div key={link.id} className="links-item">
            <button onClick={() => handleOpenLink(link)} className='link'>
              <FiLink size={18} color='#fff' />
              {link.long_url}
            </button>
            <button className='link-delete' onClick={() => handleDelete(link.id)} ><FiTrash size={24} color='#FF5454' /></button>
          </div>
        ))}

      {
        showModal && (
          <LinkItem conteudo={dadosLink} closeModal={() => setShowModal(false)} />
        )
      }
    </div>


  );
}