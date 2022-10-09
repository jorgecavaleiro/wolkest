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
            id: 'card-4', 
            componentName: 'CardComponent',
            props: { 
                heading: 'How to Code a Scrolling “Alien Lander” Website',
                paragraph: 'We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.',
                footnote: 'Kezz Bracey',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png',
                url: 'https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826'
            } 
        },        
    ]})     

    layout.push({ id: 'container-5', span: 1, direction: 'vertical', components: [
        { 
            id: 'card-5', 
            componentName: 'CardComponent',
            props: { 
                heading: 'How to Create a “Stranger Things” Text Effect in Adobe Photoshop',
                paragraph: '',
                footnote: 'Rose',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg',
                url: 'https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139'
            } 
        },        
    ]}) 

    layout.push({ id: 'container-6', span: 1, direction: 'vertical', components: [
        { 
            id: 'card-6', 
            componentName: 'CardComponent',
            props: { 
                heading: '5 Inspirational Business Portraits and How to Make Your Own',
                paragraph: '',
                footnote: 'Marie Gardiner',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg',
                url: 'https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338'
            } 
        },        
    ]})     

    layout.push({ id: 'container-7', span: 1, direction: 'vertical', components: [
        { 
            id: 'card-7', 
            componentName: 'CardComponent',
            props: { 
                heading: 'Notes From Behind the Firewall: The State of Web Design in China',
                paragraph: '',
                footnote: 'Kendra Schaefer',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png',
                url: 'https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281'
            } 
        },        
    ]})   

         
    
    layout.push({ id: 'container-8', span: 1, direction: 'vertical', components: [
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