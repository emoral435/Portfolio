import { Box, LinearProgress } from "@mui/material"
import "./Loading.css"

const Loading = () => {
	return (
	  <Box id="loading-modal"
		sx={{
		  display: "flex",
		  justifyContent: "center",
		  alignItems: "center",
		  backgroundColor: "#191919",
		  height: "100vh",
		  width: "100%",
		  opacity: 1,
		  transition: "opacity 2s linear",
		  border: "1px solid black",
		}}
	  >
		<Box sx={{ width: "40%" }}>
		  <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>
		  <LinearProgress />
		</Box>
	  </Box>
	) 
  };

export default Loading