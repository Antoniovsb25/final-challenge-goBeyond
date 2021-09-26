import React, { useState } from "react";
import "./RightColumn.css";

const RightColumn = (props) => {

    const [texto, setTexto] = useState('A CoreBiz atua em toda jornada digital do usuário.')
    const [imagem, setImagem] = useState('images/img1.jpg')
    const [ active0, setActive0 ] = useState('other-imagem-clicked')
    const [ active1, setActive1 ] = useState('other-imagem')
    const [ active2, setActive2 ] = useState('other-imagem')
    const [ active3, setActive3 ] = useState('other-imagem')
    
    const imgHandler0 = () => {
        setActive0('other-imagem-clicked')
        setActive1('other-imagem')
        setActive2('other-imagem')
        setActive3('other-imagem')
        setImagem("images/img1.jpg")
        setTexto('A CoreBiz atua em toda jornada digital do usuário.')
        props.onTextChanging(texto)
    }

    const imgHandler1 = () => {
        setActive0('other-imagem')
        setActive1('other-imagem-clicked')
        setActive2('other-imagem')
        setActive3('other-imagem')
        setImagem("images/img2.jpg")
        setTexto('água mole em pedra dura, tanto bate até que fura.')
        props.onTextChanging(texto)
    }

    const imgHandler2 = () => {
        setActive0('other-imagem')
        setActive1('other-imagem')
        setActive2('other-imagem-clicked')
        setActive3('other-imagem')
        setImagem("images/img3.jpg")
        setTexto('O rato roeu a roupa do rei de Roma.')
        props.onTextChanging(texto)
    }

    const imgHandler3 = () => {
        setActive0('other-imagem')
        setActive1('other-imagem')
        setActive2('other-imagem')
        setActive3('other-imagem-clicked')
        setImagem("images/img4.jpg")
        setTexto('Cavalo Dado não se olha os dentes.')
        props.onTextChanging(texto)
    }

  return (
    <section className="right-column">
      <div className="current-image">
        <div className="container">
          <div className="container-content"></div>
          <img
            className="imagem"
            src={imagem}
            alt="imagem1"
          />
        </div>
      </div>
      <div className="other-images">
        <div className="thumbs">
          <div className="thumb-item" >
            <div className="container-other-images">
              <div className="content-other"></div>
              <img
                className={active0}
                onClick={imgHandler0}
                src="images/img1.jpg"
                alt="imagem2"
              />
            </div>
          </div>
          <div className="thumb-item">
            <div className="container-other-images">
              <div className="content-other"></div>
              <img
                className={active1}
                onClick={imgHandler1}
                src="images/img2.jpg"
                alt="imagem3"
              />
            </div>
          </div>
          <div className="thumb-item">
            <div className="container-other-images">
              <div className="content-other"></div>
              <img
                className={active2}
                onClick={imgHandler2}
                src="images/img3.jpg"
                alt="imagem4"
              />
            </div>
          </div>
          <div className="thumb-item">
            <div className="container-other-images">
              <div className="content-other"></div>
              <img
                className={active3}
                onClick={imgHandler3}
                src="images/img4.jpg"
                alt="imagens"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightColumn;
