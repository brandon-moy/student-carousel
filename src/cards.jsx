import React from 'react';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.showBack = this.showBack.bind(this);
    this.showFront = this.showFront.bind(this);
    this.carouselCycle = this.carouselCycle.bind(this);
    this.rotationTransition = this.rotationTransition.bind(this);
    this.state = { location: 1, intervalId: null };
  }

  showBack(event) {
    // clearInterval(this.state.intervalId);
    event.target.closest('.carousel').classList.toggle('rotating');
    const card = event.target.closest('.card-rotate');
    card.classList.toggle('is-flipped');
  }

  showFront(event) {
    event.target.closest('.carousel').classList.toggle('rotating');
    const card = event.target.closest('.card-rotate');
    if (!card.classList.contains('is-flipped')) return;
    card.classList.toggle('is-flipped');
    // this.carouselCycle();
  }

  carouselCycle() {
    const intervalId = setInterval(() => {
      const location = this.state.location + 1;
      const amount = location * 30;
      const $carousel = document.querySelector('.carousel');
      $carousel.style.transform = 'rotateY(-' + amount + 'deg)';
      this.setState({ location });
    }, 3000);
    this.setState({ intervalId });
  }

  componentDidMount() {
    // this.carouselCycle();
    setTimeout(() => {
      const $carousel = document.querySelector('.carousel');
      $carousel.style.transform = 'rotateY(-30deg)';
    }, 0);
  }

  rotationTransition() {
    const $cardRotate = document.querySelectorAll('.card-rotate');
    let flippedCards = 0;
    for (let i = 0; i < $cardRotate.length; i++) {
      if ($cardRotate[i].classList.contains('is-flipped')) {
        flippedCards++;
      }
    }
    if (flippedCards > 0) return;
    const location = this.state.location + 1;
    const amount = location * 30;
    const $carousel = document.querySelector('.carousel');
    $carousel.style.transform = 'rotateY(-' + amount + 'deg)';
    this.setState({ location });
  }

  render() {
    return (
      <div className="scene">
        <div className="carousel rotating" onTransitionEnd={this.rotationTransition}>
          {
            this.props.cards.map(image => {
              return (
                <div className="card" id={image.name} key={image.number}>
                  <div className='card-rotate' id={image.number}>
                    <div className="front column-center" onClick={this.showBack}>
                      <img className="student-image" src={image.front}></img>
                      <h1 className="student-name">{image.name}</h1>
                      <h1 className="city">
                        <i className="fa-solid fa-location-dot"></i>
                        {image.city}
                      </h1>
                    </div>
                    <div className="back" onClick={this.showFront}>
                      <h3 className="project-name">{image.projectName}</h3>
                      <a href={image.projectLink}>
                        <img className="project-image" src={image.projectImage}></img>
                      </a>
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
