import React from 'react';

const style = {
    color: 'white',
    textAlign:'center',
    textShadow:'2px 2px black',
    background: 'rgba(0, 0, 0, 0.45)',
    padding: '5% 5% 5% 5%',
    margin: '5% 5% 5% 5%'
};

const styleTitle = {
    fontSize: '60px'
};

const styleContent = {
    fontSize: '40px',
    textAlign:'justify'
};

class ContentDiv extends React.Component{
    render(){
      return(
        <div style = {style}>
            <h1 style = {styleTitle} >{this.props.title}</h1>
            <div style = {styleContent}>{this.props.content}</div>
        </div>
      );
    }
}

export default ContentDiv;
