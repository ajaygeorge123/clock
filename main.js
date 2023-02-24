let clock=()=>{
    //to get system time- Date class
    let date= new Date();
    let hours=date.getHours()
    let mins= date.getMinutes()
    let sec=date.getSeconds()
    let status = hours>=12?'pm':'am'
    status=='pm'&&(hours-=12)

    let time= `${hours}:${mins}:<span>${sec}</span> ${status}`
    Dclock.innerHTML = time
    setTimeout(clock,1000)
}
clock()