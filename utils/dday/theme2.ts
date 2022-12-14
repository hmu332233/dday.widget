import { SvgData } from 'types';
import { getDDayText, getDDayPercent } from 'utils/string';

const createSvg = ({ date, text, startDate = '' }: SvgData) => {
  const ddayText = getDDayText(date);
  const ddayPercent = getDDayPercent(startDate, date);
  const svg = `
  <svg fill="none" width="400" height="70" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
          .card {
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
            background-color: #67c287;
          }
        </style>
        <div class="card">
          <div class="card-header">
            <span class="text">${text}</span>
            <span class="text">${ddayText}</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: ${ddayPercent}%"></div>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
  `;
  return svg;
};

export default createSvg;
