function loadLayout() {
    let layout = new Array();

    layout.push({ id: 'container-1', span: 2, direction: 'horizontal', components: [
        { 
            id: 'card-1', 
            componentName: 'CardComponent',
            props: { 
                heading: 'How to Code a Scrolling “Alien Lander” Website',
                paragraph: '',
                footnote: 'Mary Winkler',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
                url: 'https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852'
            } 
        },        
    ]})

    layout.push({ id: 'container-2', span: 1, direction: 'vertical', components: [
        { 
            id: 'card-2', 
            componentName: 'CardComponent',
            props: { 
                heading: 'How to Conduct Remote Usability Testing',
                paragraph: '',
                footnote: 'Harry Brignull',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png',
                url: 'https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045'
            } 
        },        
    ]})  
    
    layout.push({ id: 'container-3', span: 1, direction: 'vertical', components: [
        { 
            id: 'card-3', 
            componentName: 'CardComponent',
            props: { 
                heading: 'Created by You, July Edition',
                paragraph: 'Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!',
                footnote: 'Melody Nieves',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg',
                url: 'https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-2672'
            } 
        },        
    ]})   
    
    layout.push({ id: 'container-4', span: 1, direction: 'vertical', components: [
        { 
            id: 'sample-1', 
            componentName: 'SampleComponent',
            props: { 
                msg: 'July Edition'
            } 
        },        
    ]})       

    return layout;
}

export default { loadLayout }