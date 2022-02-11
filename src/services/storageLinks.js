// buscar os links salvos


export async function getLinksSave(key) {

  const myLinks = await localStorage.getItem(key)

  let linksSave = JSON.parse(myLinks) || []

  return linksSave

}



// salvar um link no local storage

export async function saveLink(key, newLink) {

  let linksStored = await getLinksSave(key)

  const hasLink = linksStored.some(link => link.id === newLink.id)

  if (hasLink) {
    console.log()
    return
  }

  linksStored.push(newLink)

  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log('link salvo com sucesso')
}


// deletar algum link salvo

export function deletLink(links, id) {

  let myLinks = links.filter(iten => {
    return (iten.id !== id)
  })



  localStorage.setItem('@encurtaLInk', JSON.stringify(myLinks))

  console.log("link deletado com sucesso!")

  return myLinks

}
