import {ImageList, ImageListItem} from "@mui/material";
import styled from "styled-components";

const ArtListSet = styled(ImageList)`
  flex-wrap: nowrap;
  margin: 0;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const ArtsList = (props) => {
    console.log(props.artList)
    return (
            <ArtListSet
                sx={{width: '100%', height: '100%'}}
                variant="quilted"
                cols={4}
            >
                {props.artList.map((item) => (
                    <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.src, 500, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ArtListSet>
    )
}

export default ArtsList;