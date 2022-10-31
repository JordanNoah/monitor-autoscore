module.exports = {
    convert_date: (date) => {
        var isodate = new Date(date)
        return `${isodate.getDate()}/${(isodate.getMonth()+1)}/${isodate.getFullYear()} ${isodate.getHours()}:${isodate.getMinutes()}:${isodate.getSeconds()}`
    }
}