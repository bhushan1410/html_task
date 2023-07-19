// npm install <  >
// npx create-react-app

function convertDateFormat(Stringdate){
    const months = [
        'january','fabruary','march','april','may'
    ]
     
    const parts = Stringdate.split('-');
    const day = parts[0];
    const monthIndex = Number.parseInt(parts[1])-1;
    const year = parts[2];

    const month = months[monthIndex];

    return`${day} ${month} ${year}`
}
     const inputDate = '22-1-1998';
     const formatteddate = convertDateFormat(inputDate);
     console.log(formatteddate)

