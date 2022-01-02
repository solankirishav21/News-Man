import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let {title, description, imgUrl, newsUrl,} = this.props;
        return (
            <div className="my-3 mx-3">
                <div className="card">
                <img src={!imgUrl?`https://gumlet.assettype.com/bloombergquint%2F2021-12%2Ffb81dbeb-6857-4ca7-aeec-276b423f36a3%2FHero.png?rect=0%2C0%2C1920%2C1008&w=1200&auto=format%2Ccompress&ogImage=true`:imgUrl} className="card-img-top" alt="..." />

                   <div className="card-body">
                     <h5 className="card-title">{title}</h5>
                     <p className="card-text">{description}</p>
                     {/* <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p> */}
                     <a href={newsUrl} target = "_blank" className="btn btn-sn btn-outline-primary" rel="noreferrer">Read More</a>
                   </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
