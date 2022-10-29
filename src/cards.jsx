import React from 'react';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { links: [] };
  }

  handleClick(event) {
    // const id = event.target.closest('.card').id;
    // const person = this.state.links.filter(links => links.name === id);
    // window.open(person[0].link);
    const card = event.target.closest('.card');
    // eslint-disable-next-line no-console
    console.log(card);
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
                <div className="card" id={image.name} key={image.number} onClick={this.handleClick}>
                  <div className="front">
                    <img className="student-image" src={image.front}></img>
                    <h1 className="student-name">{image.name}</h1>
                  </div>
                  <div className="back">
                    <p>This is some text</p>
                    <a className="linkedin-link" href={image.linked}>
                      <img className="linkedin-icon" src={image.linkIcon}></img>
                    </a>
                    <a className="github-link" href={image.github}>
                      <img className="github-icon" src={image.githubIcon}></img>
                    </a>
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
