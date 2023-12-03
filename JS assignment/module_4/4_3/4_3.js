'use strict'

document.querySelector('form').addEventListener(
    'submit',
    async function(event){
        event.preventDefault();
        let keyword = document.querySelector("input[name='q']").value;
        const url =`https://api.tvmaze.com/search/shows?q=${keyword}`
        try{
            let response = await fetch(url);
            let json_data= await response.json();
            console.log(json_data);
            const result = document.querySelector('#search-result');
            result.innerHTML = '';

            for (let item of json_data){
                let article = document.createElement('article');
                article.setAttribute('class', 'show');
                result.appendChild(article);

                let head2 = document.createElement('h2');
                head2.innerHTML=item.show.name;
                article.appendChild(head2);

                let link = document.createElement('a');
                link.setAttribute('href', item.show.url);
                link.setAttribute('target','_blank');
                link.innerHTML=item.show.url;
                article.appendChild(link);

                let nextline = document.createElement('br');
                article.appendChild(nextline);

                let img = document.createElement('img');
                img.setAttribute('src', item.show.image?.medium);
                img.setAttribute('alt',item.show.name);

                let linkimg = document.createElement('a');
                linkimg.setAttribute('href', item.show.url)
                linkimg.setAttribute('target', '_blank');

                linkimg.append(img);
                article.appendChild(linkimg)

                let summary = document.createElement('div');
                summary.innerHTML = item.show.summary;
                article.appendChild(summary);
            }
        }catch (error){
            console.log(error.message);
        }finally {
            console.log('Asynchronous load complete');
        }
    }
);