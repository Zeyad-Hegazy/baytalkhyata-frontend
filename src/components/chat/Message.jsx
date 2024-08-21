import { imagesData } from "../../common/commonimages";

const Message = ({ own, message }) => {
	return (
		<>
			{own ? (
				<div className="media flex-row-reverse">
					<div className="main-img-user online">
						<img alt="" src={imagesData("female9")} />
					</div>
					<div className="media-body">
						<div className="main-msg-wrapper right">{message.text}</div>
						<div>
							<span>
								{new Date(message.createdAt).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
									hour12: true,
								})}
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className="media flex-row">
					<div className="main-img-user online">
						<img alt="" src={imagesData("female9")} />
					</div>
					<div className="media-body">
						<div className="main-msg-wrapper left">{message.text}</div>
						<div>
							<span>
								{new Date(message.createdAt).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
									hour12: true,
								})}
							</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Message;
