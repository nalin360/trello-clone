import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	ListItemSuffix,
	Chip,
} from "@material-tailwind/react";
import {
	PresentationChartBarIcon,
	ShoppingBagIcon,
	UserCircleIcon,
	Cog6ToothIcon,
	InboxIcon,
	PowerIcon,
	ChartBarSquareIcon,
	ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function DefaultSidebar() {
	return (
		<Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
			<div className="mb-2 p-4">
				<Typography variant="h5" color="blue-gray">
					Flawless
				</Typography>
			</div>
			<List>
				<Link to="/dashboard/board">
					<ListItem>
						<ListItemPrefix>
							<ClipboardDocumentCheckIcon className="h-5 w-5" />
						</ListItemPrefix>
						Board
					</ListItem>
				</Link>
				<Link to="/dashboard/analytics">
					<ListItem>
						<ListItemPrefix>
							<ChartBarSquareIcon className="h-5 w-5" />
						</ListItemPrefix>
						Analytics
					</ListItem>
				</Link>
				<ListItem>
					<ListItemPrefix>
						<InboxIcon className="h-5 w-5" />
					</ListItemPrefix>
					Inbox
					<ListItemSuffix>
						<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
					</ListItemSuffix>
				</ListItem>
				
			</List>
		</Card >
	);
}

export default DefaultSidebar;