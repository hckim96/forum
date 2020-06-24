import { dataBase } from '../firebase';

export function getStringDate() {
    let today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    month = String(month).length === 1 ? (month = '0' + String(month)) : month;
    date = String(date).length === 1 ? (date = '0' + String(date)) : date;
    hour = String(hour).length === 1 ? (hour = '0' + String(hour)) : hour;
    minute =
        String(minute).length === 1 ? (minute = '0' + String(minute)) : minute;
    seconds =
        String(seconds).length === 1
            ? (seconds = '0' + String(seconds))
            : seconds;
    return `${year}-${month}-${date} ${hour}:${minute}:${seconds}`;
}
export function getPostRef(postid) {
    let postKey;
    dataBase
        .ref('posts/')
        .orderByChild('id')
        .equalTo(postid)
        .on('value', (snapshot) => {
            snapshot.forEach((snap) => {
                postKey = snap.key;
            });
        });
    return dataBase.ref('posts/' + postKey);
}
