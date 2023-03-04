import {
    Button,
    IconButton, MobileNav, Navbar, Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                className="p-1 font-normal text-lg hover:text-primary duration-200"
            >
                <Link to="/" className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-normal text-lg hover:text-primary duration-200"
            >
                <Link to="/" className="flex items-center">
                    Foods
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-normal text-lg hover:text-primary duration-200"
            >
                <Link to="/dashboard" className="flex items-center">
                    Dashboard
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 w-full shadow-none">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className="text-xl font-medium">Hungry Hero</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button ripple={false} size="md" className="hidden lg:inline-block bg-primary">
                    <span className="">Sign in</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button ripple={false} size="sm" className="hidden lg:inline-block bg-primary">
                        <span className="">Sign in</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}