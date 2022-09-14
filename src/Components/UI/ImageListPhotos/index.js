import React, { useState } from "react";
import { ImageList, ImageListItem, Typography, Chip } from "@mui/material";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";

const ImageListPhotos = ({ photos, currentAlbum }) => {
  const [imageUrl, setImageUrl] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [remove, setRemove] = useState(true);

  const onImageClick = (url, title) => {
  
    setImageTitle(title);
    setImageUrl(url);
    setRemove(false);
  };

  const handleDelete = () => {
    setRemove(true);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography variant="h6">Album Name:</Typography>
        <Typography variant="body1">{currentAlbum.title}</Typography>
      </div>
      {!remove && (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {imageTitle}
              </Typography>
            </CardContent>
            <CardActions>
              <Chip label="Delete" onDelete={handleDelete} />
            </CardActions>
          </Card>{" "}
        </div>
      )}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {photos.map((item) => (
          <ImageListItem
            key={item.id}
            onClick={() => onImageClick(item.url, item.title)}
          >
            <img src={item.url} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImageListPhotos;
