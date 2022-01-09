import React from 'react';

import Menuitem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state= {
            sections:[
            {
                'title':'Hats',
                'imageUrl':'https://i.ibb.co/cvpntL1/hats.png',
                'id':'1',
                'linkUrl':'hats'
            },
            {
                'title':'Sweaters',
                'imageUrl':'https://i.ibb.co/px2tCc3/jackets.png',
                'id':'2',
                'linkUrl':''
            },
            {
                'title':'Trousers',
                'imageUrl':'https://i.ibb.co/0jqHpnp/sneakers.png',
                'id':'3',
                'linkUrl':''
            },
            {
                'title':'Shirts',
                'imageUrl':'https://i.ibb.co/GCCdy8t/womens.png',
                'size':'large',
                'id':'4',
                'linkUrl':''
            },
            {
                'title':'Jackets',
                'imageUrl':'https://i.ibb.co/R70vBrQ/men.png',
                'size':'large',
                'id':'5',
                'linkUrl':''
            }]
        };
    }

    render() {
        return(
            <div className="directory-menu"> 
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <Menuitem key={id} {...otherSectionProps} />
                ))}
                
            </div>
        );
    }
}

export default Directory;