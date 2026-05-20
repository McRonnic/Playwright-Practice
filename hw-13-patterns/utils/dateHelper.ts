

export function getFormattedDate() {

    const date = new Date();
    const formattedDate = (date.getDay()+1)+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    return formattedDate;
}