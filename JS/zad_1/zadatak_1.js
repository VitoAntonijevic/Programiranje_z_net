const element = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
for(let i=0; i < element.length; i++){
    console.log(element[i]);
    document.getElementById("demo").innerHTML += element[i];
}
