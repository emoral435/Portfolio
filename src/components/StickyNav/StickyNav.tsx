import { ListItemButton, ListItemText, useTheme } from "@mui/material";
import { ColorModeContext } from "../../lib/ColorContext";
import { useContext, useEffect } from "react";
import Link from 'next/link';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const drawerWidth = "100%";

interface NavItemConfig {
  label: string;
  href: string;
  isMailto?: boolean;
}

const getNavConfig = (): NavItemConfig[] => [
  { label: "Blog", href: "/blog" },
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Me", href: "mailto:emoral435@gmail.com", isMailto: true },
];

export function Home() {
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [colorText, setColorText] = useState(
		theme.palette.mode === "dark" ? "Light mode" : "Dark mode",
	);
	const colorMode = useContext(ColorModeContext);
	const navConfig = getNavConfig();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	useEffect(() => {
		setColorText(theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode");
	}, [theme.palette.mode]);

	const renderNavLink = (item: NavItemConfig) => {
		const content = (
			<button
				style={{
					fontWeight: "bold",
					fontSize: "large",
					marginLeft: "1rem",
					background: "none",
					border: "none",
					color: "inherit",
					cursor: "pointer",
					padding: 0,
				}}
				className="nav-btn"
			>
				{item.label}
			</button>
		);

		if (item.isMailto) {
			return <a href={item.href} key={item.label}>{content}</a>;
		}

		return (
			<Link href={item.href} key={item.label}>
				{content}
			</Link>
		);
	};

	const drawer = (
		<Box className="--font-roboto" onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Eduardo Morales
			</Typography>
			<Divider />
			<List>
				{navConfig.map((item) => (
					<ListItem key={item.label} disablePadding>
						{item.isMailto ? (
							<a href={item.href}>
								<ListItemButton sx={{ textAlign: "center" }}>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</a>
						) : (
							<Link href={item.href}>
								<ListItemButton sx={{ textAlign: "center" }}>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</Link>
						)}
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box
			sx={{
				display: "flex",
				maxHeight: "min-content",
				justifyContent: "space-around",
			}}
			className="--font-roboto"
		>
			<CssBaseline />
			<AppBar
				component="nav"
				sx={{
					background: theme.palette.background.default,
					color: theme.palette.text.primary,
					boxShadow: "none",
				}}
			>
				<Toolbar
					sx={{ display: "flex", justifyContent: "space-around", gap: "2rem" }}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{
							fontWeight: "bold",
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
						}}
						className="name"
					>
						<Link href="/">Eduardo Morales</Link>
					</Typography>
					<section
						style={{ display: "flex", gap: "1rem", alignItems: "center" }}
					>
						<Box sx={{ display: { xs: "none", md: "flex" }, gap: "1rem" }}>
							{navConfig.map((item) => renderNavLink(item))}
						</Box>
						<button
							className="button nav-btn"
							onClick={colorMode.toggleColorMode}
							style={{
								display: "flex",
								justifyContent: "center",
								gap: ".5rem",
								alignItems: "center",
								
							}}
						>
							{theme.palette.mode === "dark" ? (
								<LightModeIcon />
							) : (
								<DarkModeIcon />
							)}
							<section style={{ display: "flex", alignItems: "center" }}>
								<h6
									style={{
										fontWeight: "bold",
										fontSize: "large",
									}}
								>
									{colorText}
								</h6>
							</section>
							{theme.palette.mode === "dark" ? (
								<LightModeIcon />
							) : (
								<DarkModeIcon />
							)}
						</button>
					</section>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					variant="temporary"
					anchor="top"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "flex", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}

export default Home;
