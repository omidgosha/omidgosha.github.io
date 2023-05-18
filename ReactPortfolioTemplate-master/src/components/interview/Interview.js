import React from "react";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import Style from "./About.module.scss";
import Terminal from "../common/Terminal";

export default function Interview() {
 const interviews = info.interviews;
 function interviewText() {
  return (
   <>
    <p>
     <span style={{ color: info.baseColor }}>{info.lastName.toLowerCase()} $</span> cd interviews
    </p>
    {interviews.map((i) => (
     <>
      <p>
       <span style={{ color: info.baseColor }}>
        interview <span className={Style.green}>(companyAnagram)</span> $
       </span>{" "}
       {i.companyAnagram}
      </p>
      <p>
       <span style={{ color: info.baseColor }}>
        interview <span className={Style.green}>(languages)</span> $
       </span>{" "}
       {i.languages.map((l) => (
        <span>{l}, </span>
       ))}
      </p>
      <p>
       <span style={{ color: info.baseColor }}>
        interview <span className={Style.green}>(questions)</span> $
       </span>{" "}
       {i.questions.map((q) => (
        <p className={Style.questions}>
         <span className={Style.pink}>{q.Q} </span>
         <br></br>
         <span>{q.A}</span>
        </p>
       ))}
      </p>
      <p>
       {" "}
       - - - - - - - - -<br></br>
      </p>
     </>
    ))}
   </>
  );
 }

 return (
  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"3rem"}>
   <Terminal text={interviewText()} />
  </Box>
 );
}
