
    var goToPage = ()=>{
        let location = document.querySelector("#pwd").value;
        if(location.trim() == "") return
        if(["kolorowanka", "owoc", "wieczernik", "origami", "drzewa", "pilka"].includes(location.toLowerCase().trim())){
            window.location = "./"+location.toLowerCase().trim()+".html"
        }else{
            alert("Hmmm... Nasza gra terenowa nie ma punktu \""+location+"\"")
        }
    }
