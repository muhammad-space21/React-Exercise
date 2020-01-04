import React from 'react';
import MenuItem from '../menu-items/menu-item.component.jsx'; 
import '../directory/directory.styles.css'; //error

// Class Component 
class Directory extends React.Component {
    constructor (){
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1463701700197-69d4180d3ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1237&q=80',
                id: 1,
                size: 'small',
                linkUrl :'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id: 2,
                size: 'small',
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1474432420717-75023248d5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id: 3,
                size: 'small',
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id: 4,
                size: 'large',
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                id: 5,
                size: 'large',
                linkUrl: ''
            },
        ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps})=> (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
