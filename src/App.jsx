import { useState } from 'react'
import './index.css'
import avatarImg from "./assets/profile__img.png"
import githubIcon from "./assets/Icon.png"
import slack from "./assets/slack.png"
import Zurilogo from "./assets/Zuri.png"
import footerLogo from "./assets/I4Good.png"

function App() {

  return (
    <div className="container">
    <header>
    <img src={avatarImg} id='profile__img' className='avatar'/>
    <h1>Annette Black</h1>
    </header> 
    <main>
      <a href="https://twitter.com/haramide" id='twitter'>Twitter Link</a>
      <a href="https://slack.com/atoyebi-oluwakemi" id='slack'>Slack Link</a>
      <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
      <a href="https://books.zuri.team" id='books'>Zuri Books</a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Catoyebi-oluwakemi%3E" id='book__python' title='Learn coding with ease: a self-paced, beginner friendly approach to learning a high level programming language'>Python Books</a>
      <a href="https://background.zuri.team" id='pitch' title='Check out our vetted and proven approach to accessing the best talents all around the world.'>Background Checks for Coder</a>
      <a href="https://books.zuri.team/design-rules" id='book__design' title='Design is a craft for all because it fills our everyday life, learn this craft at your own pace with our Design Books.'>Design Books</a>
      <div className='socials'>
        <img src={slack} alt="" />
        <img src={githubIcon} alt="" className='github'/>
      </div>
    </main>
    <footer>
    <img src={Zurilogo} alt="" />
    <p>HNG Internship 9 Frontend Task</p>
    <img src={footerLogo} />
    </footer>
    </div>
  )
}

export default App
