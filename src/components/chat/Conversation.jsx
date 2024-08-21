import { imagesData } from "../../common/commonimages";

const Conversation = ({ selected, user }) => {
	return (
		<div className={`media ${selected ? "selected" : ""}`}>
			<div className="main-img-user online">
				<img alt="" src={imagesData("female9")} />
			</div>
			<div className="media-body">
				<div className="media-contact-name">
					<span>{user.fullName}</span> <span>{user.lastSeen}</span>
				</div>
				{/* <p>Nam quam nunc, bl ndit vel aecenas et ante tincid</p> */}
			</div>
		</div>
	);
};

export default Conversation;
