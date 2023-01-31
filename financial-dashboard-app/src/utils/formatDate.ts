const formatDate = (date: string): string => {

    const dateFormated = new Date(date);


    // dateFormated.toLocaleDateString();



    const day = dateFormated.getUTCDate() > 9 ? dateFormated.getUTCDate() : `0${dateFormated.getUTCDate()}`;
    const month = dateFormated.getUTCMonth() + 1 > 9 ? dateFormated.getUTCMonth() + 1 : `0${dateFormated.getUTCMonth() + 1}`;
    const year = dateFormated.getUTCFullYear();
    // return dateFormated.toString();

    // const day = dateFormated.getDay() > 9 ? dateFormated.getDay() : `0${dateFormated.getDay()}`;
    // const month = dateFormated.getMonth() + 1 > 9 ? dateFormated.getMonth() + 1 : `0${dateFormated.getMonth() + 1}`;
    // const year = dateFormated.getFullYear();

    return `${day}/${month}/${year}`
}

export default formatDate;