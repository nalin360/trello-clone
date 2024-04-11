import React from 'react'
import DefaultSidebar from '../components/Dashboard/DefaultSidebar'
import UserMenu from '../components/Dashboard/UserMenu'
import { Outlet } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
// import NavBar from '../components/Dashboard/NavBar'
// import SideBar from '../components/Dashboard/SideBar'
// import MainSection from '../components/Dashboard/MainSection'

function Dashboard() {
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					
					<div className="flex-1">
						<DefaultSidebar />
					</div>
					<div className="mt-auto p-4">


					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<div>

						<button
							variant="outline"
							size="icon"
							className="shrink-0 md:hidden"
						>

							<span className="sr-only">Toggle navigation menu</span>
						</button>

						{/* side navigation */}

					</div>
					{/* search bar */}
					<div className="w-full flex-1">
						<form>
							<div className="relative">
								{/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
								<Input variant="outlined" label="Search" placeholder="...Search Boards"/>

							</div>
						</form>
					</div>
					{/* user */}
					<UserMenu/>
				</header>
				{/* main area */}
				<Outlet />

			</div>
		</div>
	)
}

export default Dashboard