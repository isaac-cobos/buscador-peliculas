import { LitElement, html, css } from 'lit-element';

class InputSearch extends LitElement {

  
  
  static get properties() {
    return {
      value: {type: String},
      placeholder: {type: String},
      labelButton:{type: String},    
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display:flex;
          justify-content:flex-end;
        }
        div {
          margin-right: 90px;
        }

      `
    ];
  }
  constructor() {
    super();
    this.value = "";
    this.placeholder = 'Batman Superman ...';
    this.labelButton = 'Buscar';
  } 

  
  
  render() { 
    return html`
      <div>
           Buscar pelicula: <input type="text" .value="${this.value}" placeholder="${this.placeholder}" @input="${this._inputChange}" @keypress="${this._pulsar}">
           <button id="button" @click="${this._clickFetch}" disabled>${this.labelButton}</button>
      </div>
    `;

  }
  

  _inputChange(e) {
    this.value = e.target.value;
    let activeBtn = this.shadowRoot.getElementById('button');
    if(this.value.length > 0) {
      activeBtn.disabled = false;
      console.log(this.value.length)
    }else{
      activeBtn.disabled = true;   
    }

  }

  _clickFetch() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value
    }));
  }
  
  _pulsar(e) {
    if (e.code === "Enter") {
        this._clickFetch();
    }
  }




  

}
customElements.define('input-search', InputSearch);