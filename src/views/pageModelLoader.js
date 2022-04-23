export default function loadPage() {
    // components definitions list
    //#region Components Definition List ====
    let componentsDef = new Map();

    // props: ['heading', 'paragraph', 'footnote', 'image', 'url']
    componentsDef.set("container-1", 
    { 
        id: 'card-1', 
        props: { 
            heading: 'How to Code a Scrolling “Alien Lander” Website',
            paragraph: '',
            footnote: 'Mary Winkler',
            image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
            url: 'https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852'
        } 
    })

    componentsDef.set("container-2", 
    { 
        id: 'card-2', 
        props: { 
            heading: 'How to Conduct Remote Usability Testing',
            paragraph: '',
            footnote: 'Harry Brignull',
            image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png',
            url: 'https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045'
        } 
    })

    componentsDef.set("container-3", 
    { 
        id: 'card-3', 
        props: { 
            heading: 'Created by You, July Edition',
            paragraph: 'Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!',
            footnote: 'Melody Nieves',
            image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg',
            url: 'https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-2672'
        } 
    })


    return componentsDef;
}