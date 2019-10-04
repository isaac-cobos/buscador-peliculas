import { LitElement, html, css } from "lit-element";
import "./input-search";
import "./list-films";

export class SearchFilms extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      response: { type: Array },
      desactive: { type: Boolean }
    };
  }

  static get styles() {
    return [
      css`
        :host  {
          display:grid;
          grid-template-rows:70px 70px 1fr;
          grid-template-columns: 1fr;
          grid-template-areas: "search-films"
                              "input-search"
                              "list-films";
          font-family:sans-serif;
        }



        h2 {
          display:flex;
          justify-content:center;
          background-color: yellow;
        }
      `
    ];
  }

  constructor() {
    super();
    this.title = "BUSCADOR DE PELICULAS";
    this.response = [];

  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <input-search @change="${this._fecthFilms}" ></input-search>
      <list-films class="list-film" .items=${this.response}></list-films>
    `;
  }



  _fecthFilms({ detail }) {
    console.log(detail);
    fetch(`https://www.omdbapi.com/?s=${detail}&plot=full&apikey=e477ed6a`)
      .then(res => res.json())
      .then(res => {
        this.response = res.Search;
        console.log(this.response);
      });
  }

}
customElements.define("search-films", SearchFilms);
