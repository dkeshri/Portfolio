import React from 'react'
import style from '../../assets/css/About/svg.module.css'
const SVGContainer = () => {
    return (<>
        <div className={style.container}>
            <img alt="react" className={style.img} src={require('../../assets/svg/react.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="redux" className={style.img} src={require('../../assets/svg/redux.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="html" className={style.img} src={require('../../assets/svg/html5.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="css" className={style.img} src={require('../../assets/svg/css.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="Javascript" className={style.img} src={require('../../assets/svg/js.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="jquery" className={style.img} src={require('../../assets/svg/jquery.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="bootstrap" className={style.img} src={require('../../assets/svg/bootstrap.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="c++" className={style.img} src={require('../../assets/svg/cpp.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="c#" className={style.img} src={require('../../assets/svg/csharp.svg')}></img>
        </div>
        <div className={style.container}>
            <img alt="java" className={style.img} src={require('../../assets/svg/java.svg')}></img>
        </div>
        
    </>
    )
}

export default SVGContainer
