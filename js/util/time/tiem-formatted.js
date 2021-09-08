class TimeFormatted extends HTMLElement{
  render(){
    let data = new Date(this.getAttribute('datatime') || Date.now())

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      
    })
  }
}