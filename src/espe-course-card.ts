import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class EspeCourseCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', 'Roboto', sans-serif;
    }

    .card {
      background-color: white;
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
      background-color: #2e7d5f;
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
      color: #666;
      margin: 10px 0;
    }

    .progress-bar {
      height: 4px;
      border-radius: 4px;
      background-color: #eee;
      margin: 6px 0 12px;
      position: relative;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 4px;
    }

    .button-area {
      border-top: 1px solid #eee;
      text-align: center;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    .btn {
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: none;
      border-radius: 0 ;
      width: 100%;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn.green {
      background-color: #2e7d5f;
      color: white;
    }

    .btn.yellow {
      background-color: #f9be01;
      color: #000;
    }
  `;

  @property({ type: String }) title = 'Programación';
  @property({ type: String }) description = 'Diseño e implementación de algoritmos';
  @property({ type: Number }) progress = 40;
  @property({ type: String }) progressColor: 'red' | 'green' = 'red';
  @property({ type: String }) buttonTheme: 'green' | 'yellow' = 'green';

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
