import React from 'react'
import style from '../../assets/css/About/Experience.module.css'
import { yearDiff } from '../../utility';
const Experience = () => {
    //new Date(year, month, day, hours, minutes, seconds, milliseconds)
    
    let start = '2018-12-10';
    let now = new Date();
    let end = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
    const Exp = yearDiff(start,end);
    const CurrentCompExp = yearDiff('2018-12-10',end);
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.content}>
                    <div className={style.heading}>
                        <span className={`${style.span} ${style.textShadow}`}>
                            <b>Total Work Experience</b>
                        </span>
                        <div className={style.textShadow}>
                            <span className={style.ExpYear}>
                                {Exp.years===0?undefined:<span><b> {Exp.years}</b> years</span>}
                                {Exp.months===0?undefined:<span><b> {Exp.months}</b> months</span>}
                                {Exp.days===0?undefined:<span><b> {Exp.days}</b> days</span>}
                            </span>
                        </div>
                    </div>
                    <div className={style.heading}>
                        <span className={`${style.span} ${style.textShadow}`}>
                            <b>Current Company</b>
                        </span>
                        <div className={style.textShadow}>
                            <span className={style.CurrentCompany}>
                                <b>Epay Systems</b>
                            </span>
                            <br/>
                            <span className={style.CurrentCompany}>
                                <b>Designation : </b> Software Engineer
                            </span>
                            <br/>
                            <span className={style.CurrentCompany}>
                                <b>Join Date : </b> 10th dec 2018
                            </span>
                            <br/>
                            <span className={style.CurrentCompany}>
                                <b>Experience : </b> 
                                {CurrentCompExp.years===0?undefined:<span><b> {CurrentCompExp.years}</b> years</span>}
                                {CurrentCompExp.months===0?undefined:<span><b> {CurrentCompExp.months}</b> months</span>}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.dummyblock}></div>
            </div>
            {/* <div className={style.Company_container}>
            </div> */}
        </div>
    )
}

export default Experience
