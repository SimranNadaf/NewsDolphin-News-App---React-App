import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title,description,img,newsUrl,author,date,source}=this.props;
    return (
      <div className='container'>
        <div className="card">
        <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
          {source}
       
        </span>
          <img src={!img?"https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg":img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="mb-2 text-muted">
              By {author?author:"Unknow"} on {new Date(date).toGMTString()}
            </div>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
        
       
      </div>
    )
  }
}

export default NewItem
