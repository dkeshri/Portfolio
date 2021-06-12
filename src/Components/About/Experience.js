import React from 'react'
import style from '../../assets/css/About/Experience.module.css'
const yearDiff = (startDate,endDate)=>{
    let startDateArr = startDate.split('-');
    let endDateArr =  endDate.split('-');

    let years = parseInt(endDateArr[0])-parseInt(startDateArr[0]);
    console.log(years);
    let months = parseInt(endDateArr[1])-parseInt(startDateArr[1]);
    if(months<0){
        months = months+12;
        years--;
    }
    let days = parseInt(endDateArr[2])-parseInt(startDateArr[2]);
    if(days<0){
        days=days+30;
        months--;
    }

    return {years,months,days};
}
const Experience = () => {
    //new Date(year, month, day, hours, minutes, seconds, milliseconds)
    
    let start = '2018-12-10';
    let now = new Date();
    let end = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
    const Exp = yearDiff(start,end);
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
                                {Exp.years==0?undefined:<span><b> {Exp.years}</b> years</span>}
                                {Exp.months==0?undefined:<span><b> {Exp.months}</b> months</span>}
                                {Exp.days==0?undefined:<span><b> {Exp.days}</b> days</span>}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.dummyblock}></div>
            </div>
        </div>
    )
}

export default Experience
