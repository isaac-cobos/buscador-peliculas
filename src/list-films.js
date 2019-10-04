import { LitElement, html, css } from "lit-element";
import "./search-films";
import "./card-film";

class ListFilms extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      title: { type: String }
    };
  }

  static get styles() {
    return [
      css`
        .list-movie {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-bottom: 30px;
        }
        h1 {
          display:flex;
          justify-content:center;
        }
      `
    ];
  }

  constructor() {
    super();
    this.items = [];
    this.title = "Tienes toda esta busqueda";
  }

  render() {
    return html`
      <h1 class="title-list">${this.title}</h1>
      <div class="list-movie">
        ${this.items.map(
          item => html`
         <card-film .dataFilm=${item} ></card-film>
    `
        )}
      </div>
    `;
  }
}
customElements.define("list-films", ListFilms);
