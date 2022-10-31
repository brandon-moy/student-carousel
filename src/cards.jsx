import React from 'react';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { links: [] };
  }

  handleClick(event) {
    const card = event.target.closest('.card-rotate');
    card.classList.toggle('is-flipped');
  }

  componentDidMount() {
    const links = this.props.cards.map(obj => ({ name: obj.name, link: obj.linked }));
    this.setState({ links });
  }

  render() {
    return (
      <div className="scene">
        <div className="carousel">
          {
            this.props.cards.map(image => {
              return (
                <div className="card" id={image.name} key={image.number}>
                  <div className='card-rotate' id={`a${image.number}`}>
                    <div className="front" onClick={this.handleClick}>
                      <img className="student-image" src={image.front}></img>
                      <h1 className="student-name">{image.name}</h1>
                    </div>
                    <div className="back" onClick={this.handleClick}>
                      <p>This is some text</p>
                      <a className="linkedin-link" href={image.linked}>
                        <img className="linkedin-icon" src={image.linkIcon}></img>
                      </a>
                      <a className="github-link" href={image.github}>
                        <img className="github-icon" src={image.githubIcon}></img>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
