import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";

const Toastar = ({ openSnackbar, snackbarMessage }) => {
	const dispatch = useDispatch();

	const status = useSelector((state) => state.toastar.status);

	const handleCloseSnackbar = () => {
		dispatch({ type: "close" });
	};

	return (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={3000}
			onClose={handleCloseSnackbar}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
		>
			<MuiAlert
				elevation={6}
				variant="filled"
				onClose={handleCloseSnackbar}
				severity="success"
			>
				{snackbarMessage}
			</MuiAlert>
		</Snackbar>
	);
};

export default Toastar;
