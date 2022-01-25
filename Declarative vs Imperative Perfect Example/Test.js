//Declarative vs Imperative

const _Array = [ 
    {name:'fazi', age:29},
    {name:'wife',age:23},
    {name:'wife',age:23},
    {name:'wife',age:23},
    {name:'wife',age:23},
    {name:'wife',age:23},
    {name:'wife',age:23},
    {name:'wife',age:23}
]

let NgFor = ()=>{
    let _ValueToShow='';
    _Array.forEach((_Objects)=>{
        _ValueToShow+=`<li>${_Objects.name} - ${_Objects.age}</li>\n`
    })
    document.body.innerHTML = _ValueToShow;
}

NgFor();