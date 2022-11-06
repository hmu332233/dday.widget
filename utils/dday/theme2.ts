import { SvgData } from 'types';
import { getDDayText } from 'utils/string';

const createSvg = ({ date, text }: SvgData) => {
  const ddayText = getDDayText(date);
  const svg = `
  <svg fill="none" width="400" height="70" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            border-radius: 0.75rem;
            padding: 1rem;
            gap: 8px;
            background-color: #fff;

            border: 1px solid rgb(156, 163, 175);
            break-inside: avoid;
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .text {
            font-size: .875rem;
                line-height: 1.25rem;
            font-weight: 700;
          }

          .progress {
            position: relative;
            width: 100%;
            height: 0.5rem;

            background-color: #f0f5f9;
            border-radius: 0.375rem;
            overflow: hidden;
          }

          .progress-bar {
            position: absolute;
            left: 0;
            height: 100%;
            background-color: #ec4899
          }
        </style>
        <div class="card">
          <div class="card-header">
            <span class="text">${text}</span>
            <span class="text">${ddayText}</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: 200px"></div>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
  `;
  return svg;
};

export default createSvg;
