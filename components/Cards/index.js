// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function cardMaker(attrs) {
    const { headline,authorPhoto, authorName } = attrs
  
    const card = document.createElement('div')
    const headlineI = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')
  
    card.appendChild(headlineI)
    author.appendChild(imageContainer)
    card.appendChild(author)
    imageContainer.appendChild(img)
    author.appendChild(name)


  
    card.classList.add('card')
    headlineI.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')

  
    headlineI.textContent = headline
    img.src = authorPhoto
    name.textContent = authorName
  
    return card;
  }




function getHeadlines() {
    
    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    
      .then(response => {

        const entryPoint = document.querySelector('.cards-container');
        const headlineJa = response.data.articles.javascript
        
        

        const headlineB = response.data.articles.bootstrap
       
        
        const headlineJq = response.data.articles.jquery
        

        const headlineN = response.data.articles.node

        const headlineT = response.data.articles.technology

        headlineJa.forEach(item =>{
            
                const headline = item.headline;
                const authorPhoto = item.authorPhoto;
                const authorName = item.authorName;
                
                const card = cardMaker({ headline:headline, authorPhoto:authorPhoto, authorName:authorName})
                entryPoint.appendChild(card)
             
        })
        
            
        

        headlineB.forEach(item =>{
            
            const headline = item.headline;
            const authorPhoto = item.authorPhoto;
            const authorName = item.authorName;
            
            const card = cardMaker({ headline:headline, authorPhoto:authorPhoto, authorName:authorName})
            entryPoint.appendChild(card)
         
        })
    
        
        

        headlineJq.forEach(item =>{
            
            const headline = item.headline;
            const authorPhoto = item.authorPhoto;
            const authorName = item.authorName;
        
            const card = cardMaker({ headline:headline, authorPhoto:authorPhoto, authorName:authorName})
            entryPoint.appendChild(card)
     
        })

    
        

        

        headlineN.forEach(item =>{
            
            const headline = item.headline;
            const authorPhoto = item.authorPhoto;
            const authorName = item.authorName;
    
            const card = cardMaker({ headline:headline, authorPhoto:authorPhoto, authorName:authorName})
            entryPoint.appendChild(card)
 
        })


        

        headlineT.forEach(item =>{
            
            const headline = item.headline;
            const authorPhoto = item.authorPhoto;
            const authorName = item.authorName;
    
            const card = cardMaker({ headline:headline, authorPhoto:authorPhoto, authorName:authorName})
            entryPoint.appendChild(card)
 
        })


       
        


        
    
      })
      .catch(error => {
        console.log('Get failed', error)
      })
      .finally(() => {
        console.log('done')
      })
  }

  getHeadlines();