export const dateStringToDate = (dateString: string): Date=> {
    const datePart = dateString.split('/');
    return new Date(parseInt(datePart[3]), parseInt(datePart[1])-1, parseInt(datePart[0]))
}