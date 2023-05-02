class CatService{
    static Base_URL = 'https://catfact.ninja';

    static getPage(index){
        const url = this.Base_URL +'/breeds'
        return fetch(url)
        .then(resp => resp.json())
        .tnen(catPage => this.getDetails(catPage.results))
}

}