import { LitElement, html,css } from "lit-element";
import './list-films';

class CardFilm extends LitElement {

  static get properties() {
    return {
      dataFilm: { type: Object}
    };
  }
  static get styles() {
    return [
      css`
        :host {
          margin-top:50px;
        }
        .card-movie {
          height: 350px;
        }
        img {
          width: auto;
          height:350px;
        }
        .container-title {
          display:flex;
          flex-wrap:wrap;
          justify-content: center;
          width: 250px;         
        }

      `
    ];
  }

  constructor(){
    super();
    this.dataFilm={};
  }

  render() {
    return html`
    <div class="card-movie">
      <img src="${this.dataFilm.Poster}">
    </div>
    <div class="container-title">
      <h3 class="title">
        ${this.dataFilm.Title}
      </h3>
    </div> 
    `;
  }
}
customElements.define("card-film", CardFilm);
