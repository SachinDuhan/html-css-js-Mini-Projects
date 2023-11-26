let container = document.getElementsByClassName('container')[0];

let l1 = async () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(container.innerHTML += '<div>Initializing hack program...</div>')
            // container.innerHTML += '<div>Initializing hack program...</div>'
            // resolve(1)
        }, 1000)
    })
}

let l2 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(container.innerHTML += "<div>Hacking Ahish's username...</div>")
            // container.innerHTML += "<div>Hacking Ahish's username...</div>"
            // resolve(2)
        }, 2000)
    })
}

let l3 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(container.innerHTML += "<div>Username found: ashish17</div>")
            // container.innerHTML += "<div>Username found: ashish17</div>"
            // resolve(3)
        }, 3000)
    })
}

let l4 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(container.innerHTML+= "<div>Connecting to facebook...</div>")
            // container.innerHTML+= "<div>Connecting to facebook...</div>"
            // resolve(4)
        }, 1000)
    })
}


let prog = async ()=>{
    let a = await l1()
    let b = await l2()
    let c = await l3()
    let d = await l4()
    let result = await Promise.allSettled([a,b,c,d])
    console.log(result);
}

prog()