/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface CardImageProps {
  url: string;
}

function Preview({ url }: CardImageProps) {
  return (
    <div css={imgContainer}>
      <img src={url} css={img} />
    </div>
  );
}

const imgContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 8rem;
  max-width: 100%;
  border-radius: 50%;
`;

const img = css`
  max-width: 100%;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`;

export default Preview;
