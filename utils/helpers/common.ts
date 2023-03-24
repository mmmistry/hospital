const dateFormate = (appDate : Date | string) => {
    let dateNum = new Date(appDate).getDate();        
    let options : any = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      let monthString = appDate.toLocaleString('en-US', {month: "long" });
      let timeString = appDate.toLocaleString('en-US', options);
      let date =  dateNum + " " + monthString + ", " +timeString
      return  date;
}

export { dateFormate }