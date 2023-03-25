import React from "react";
import IconLink from "./IconLink";
import { Box, Card, Typography, CardContent, CardMedia, CardActionArea } from "@mui/material";

function PortfolioBlock(props) {
 const { image, live, source, title, explanation } = props;
 return (
  <Box
   display={"flex"}
   flexDirection={"column"}
   justifyContent={"center"}
   alignItems={"center"}
   style={{ border: "solid 1px 1px", margin: 20 }}>
   <Card sx={{ maxWidth: 500 }}>
    <CardActionArea>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       2021 - Present
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
       {title}
      </Typography>
      {explanation.map((e) => (
       <Typography
        variant="body2"
        color="text.secondary"
        dangerouslySetInnerHTML={{ __html: e }}></Typography>
      ))}
     </CardContent>
    </CardActionArea>
   </Card>
  </Box>
 );
}

export default PortfolioBlock;
