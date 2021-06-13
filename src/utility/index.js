import cookie from 'react-cookies'
import Dexie from 'dexie'
export const setCookie = (argCookies = {}) => {
    let expires, path;
    if (argCookies.expires === undefined || argCookies.expires === null) {
        expires = new Date()
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
    } else {
        expires = argCookies.expires;
    }
    if (argCookies.path === undefined || argCookies.path === null) {
        path = '/';
    } else {
        path = argCookies.path;
    }
    if (argCookies.key !== undefined && argCookies.value !== undefined) {
        cookie.save(
            argCookies.key,
            argCookies.value,
            {
                path: path,
                expires,
                //maxAge: 1000,
                //domain: 'https://play.bukinoshita.io',
                secure: true,
                httpOnly: true
            }
        );
    } else {
        console.log('key and value can not be undefined');
    }
}

export const getCookie = (key) => {
    if (key !== undefined && key !== null) {
        return cookie.load(key);
    }
    else {
        console.log(`key can not be ${key}`);
    }

}
export const Year = (new Date()).getFullYear();
export class Database {
    constructor(databaseName,tableName) {
        this.dbname = databaseName;
        this.db = new Dexie(databaseName,tableName);
        this.tableName = tableName;
    }
    createDatabaseSchema = (store) => {
        this.db.version(1).stores(store);
    }
    openDatabase = ()=>{
        return this.db.open(this.dbname,1);
    }
    addRecord = (item)=>{
        let promise = new Promise((resolve,reject)=>{

            this.db[this.tableName].add(item)
            .then(res=>{
                resolve(res);
            })
            .catch((e)=>{
                reject(new Error(e));
            })
        });
        return promise;
    }
}
export const yearDiff = (startDate,endDate)=>{
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