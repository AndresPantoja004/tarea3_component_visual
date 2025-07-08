import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class EspeCourseCard extends LitElement {
  static styles = css`
  :host {
    display: block;
    font-family: 'Arial', 'Roboto', sans-serif;
    --card-bg: white;
    --text-color: #333;
    --muted-text: #666;
    --border-color: #eee;
    --btn-green-bg: #2e7d5f;
    --btn-yellow-bg: #f9be01;
    --btn-yellow-text: #000;
    --btn-green-text: white;
  }

  :host([tema="oscuro"]) {
    --card-bg: #1e1e1e;
    --text-color: #f0f0f0;
    --muted-text: #aaa;
    --border-color: #333;
    --btn-yellow-text: #111;
  }

  @media (prefers-color-scheme: dark) {
    :host(:not([tema])) {
      --card-bg: #1e1e1e;
      --text-color: #f0f0f0;
      --muted-text: #aaa;
      --border-color: #333;
      --btn-yellow-text: #111;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--card-bg);
    color: var(--text-color);
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    width: 280px;
  }

  .image-placeholder {
    background-color: #bbb;
    height: 150px;
    position: relative;
  }

  .options-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--btn-green-bg);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }

  .content {
    padding: 16px;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .badge {
    font-size: 0.8rem;
    padding: 2px 8px;
    border-radius: 12px;
    border: 1px solid;
  }

  .badge.red {
    color: #E63329;
    border-color: #E63329;
  }

  .badge.green {
    color: #006B53;
    border-color: #006B53;
  }

  .description {
    font-size: 0.9rem;
    color: var(--muted-text);
    margin: 10px 0;
  }

  .progress-bar {
    height: 4px;
    border-radius: 4px;
    background-color: var(--border-color);
    margin: 6px 0 12px;
    position: relative;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 4px;
  }

  .button-area {
    border-top: 1px solid var(--border-color);
    text-align: center;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 0;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
    gap: 6px;
  }

  .btn.green {
    background-color: var(--btn-green-bg);
    color: var(--btn-green-text);
  }

  .btn.yellow {
    background-color: var(--btn-yellow-bg);
    color: var(--btn-yellow-text);
  }
`;


  @property({ type: String }) title = 'Programación';
  @property({ type: String }) description = 'Diseño e implementación de algoritmos';
  @property({ type: Number }) progress = 40;
  @property({ type: String }) progressColor: 'red' | 'green' = 'red';
  @property({ type: String }) buttonTheme: 'green' | 'yellow' = 'green';
  @property({ type: String, reflect: true }) tema?: 'claro' | 'oscuro';


  render() {
    const isGreen = this.progressColor === 'green';
    const fillColor = isGreen ? '#006B53' : '#E63329';
    const btnClass = this.buttonTheme === 'yellow' ? 'btn yellow' : 'btn green';

    return html`
      <div class="card">
        <div class="image-placeholder">
          <div class="options-btn">⋮</div>
        </div>
        <div class="content">
          <div class="title-row">
            <span class="title">${this.title}</span>
            <span class="badge ${this.progressColor}">${this.progress} %</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${this.progress}%; background-color: ${fillColor};"></div>
          </div>
          <div class="description">${this.description}</div>
        </div>
        <div class="button-area">
          <button class="${btnClass}">
            Ver detalles 👁️
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('espe-course-card', EspeCourseCard);
