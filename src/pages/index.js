import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello. Hola. Bonjour. ようこそ！</h1>
    <p>My name is Adam Wier. I'm an American living in France. I will be quitting my job of teaching English to go into web development at the end of September. This hackathon seemed like a good way to practice and meet people!</p>
    <p>Bonjour. Je m'appelle Adam Wier. Je suis américain et j'habite en France. Je vais quitter mon travail comme enseignant d'anglais pour entrer dans le domaine du développement web. Ce hackthon me semblait une bonne manière de m'entraîner et rencontre des gens!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
