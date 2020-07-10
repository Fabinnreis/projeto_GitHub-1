class ReposController {
    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    static requestRepos(url) {
        let reqRepos = new XMLHttpRequest();
        reqRepos.open("GET",url);

        reqRepos.addEventListener("load", ()=> {
            let userDisplay = document.querySelector("#userDisplay");
            let reqArrObj = JSON.parse(reqRepos.responseText);

            for(let i=0; i < reqArrObj.length; i++){
                let reposApi = new Repos(reqArrObj[i].name, reqArrObj[i].html_url);
                console.log(reposApi);
                userDisplay.innerHTML += ReposView.displayRepos(reposApi.getRepos());
            }
        })

        reqRepos.send();
    }
}