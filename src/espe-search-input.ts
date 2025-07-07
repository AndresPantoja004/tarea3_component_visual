import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

export class EspeSearchInput extends LitElement {
  static styles = css`
    :host {
      --espe-primary: #003C71;
      --espe-success: #006B53;
      --espe-danger: #E63329;
      --espe-neutral: #8C8C8C;
      --input-bg: #fff;
      --input-border: var(--espe-primary);
      display: block;
      font-family: 'Arial', 'Roboto', sans-serif;
    }

    .container {
      position: relative;
      width: 100%;
    }

    input {
      width: 100%;
      padding: 10px 0px 10px 12px;
      border: 2px solid var(--input-border);
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
    }

    .icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--espe-primary);
    }

    ul.suggestions {
      list-style: none;
      margin: 4px 0 0;
      padding: 0;
      border: 1px solid var(--input-border);
      border-radius: 8px;
      max-height: 160px;
      overflow-y: auto;
      background: white;
      z-index: 10;
      position: absolute;
      width: 100%;
    }

    li {
      padding: 8px 12px;
      cursor: pointer;
    }

    li:hover {
      background-color: #f0f0f0;
    }

    .loading {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: translateY(-50%) rotate(0deg);
      }
      to {
        transform: translateY(-50%) rotate(360deg);
      }
    }
  `;

  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) theme = '#003C71';
  @property({ type: String }) placeholder = 'Buscar...';
  @property({ type: Array }) suggestions: string[] = [];

  @state() private inputValue = '';
  @state() private filtered: string[] = [];

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('theme')) {
      this.style.setProperty('--input-border', this.theme);
    }
  }

  private onInput(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    this.inputValue = value;
    this.filtered = this.suggestions.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  }

  private selectSuggestion(suggestion: string) {
    this.inputValue = suggestion;
    this.filtered = [];
    this.dispatchEvent(
      new CustomEvent('sugerencia-seleccionada', {
        detail: { value: suggestion },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.dispatchEvent(
        new CustomEvent('buscar-enter', {
          detail: { value: this.inputValue },
          bubbles: true,
          composed: true,
        })
      );
      this.filtered = []; // Opcional: cerrar sugerencias al presionar Enter
    }
  }

  private _handleOutsideClick = (e: MouseEvent) => {
    if (!this.shadowRoot) return;
    const path = e.composedPath();
    const clickedInside = path.includes(this.shadowRoot.querySelector('input')!) || path.includes(this);
    if (!clickedInside) {
      this.filtered = [];
      this.requestUpdate();
    }
  };

  render() {
    return html`
      <div class="container" role="search">
        <input
          aria-label="Campo de búsqueda"
          placeholder=${this.placeholder}
          .value=${this.inputValue}
          @input=${this.onInput}
          @keydown=${this._onKeyDown}
          ?disabled=${this.disabled}
        />
        ${this.loading
          ? html`<span class="loading">⏳</span>`
          : html`<span class="icon">🔍</span>`}
        ${this.filtered.length > 0
          ? html`
              <ul class="suggestions">
                ${this.filtered.map(
                  (item) =>
                    html`<li @click=${() => this.selectSuggestion(item)} tabindex="0">${item}</li>`
                )}
              </ul>
            `
          : null}
      </div>
    `;
  }
}

customElements.define('espe-search-input', EspeSearchInput);
