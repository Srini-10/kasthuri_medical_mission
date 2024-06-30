import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../assets/kmm.png";
import { useLocation } from "react-router-dom";
import "./css/Navbar.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Nav() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About_Us" },
    { name: "Our Courses", path: "/Courses" },
    { name: "Contact Us", path: "/Contact_Us" },
    { name: "Book Appointment", path: "/Book_Appointment" },
    { name: "Our Founder", path: "/Founder" },
  ];

  const { pathname } = useLocation();

  return (
    <Navbar
      disableAnimation
      isBordered
      className="Navbar fixed z-50 w-full h-[60px]"
    >
      <NavbarContent className="navbar-toggle">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="navbar-center">
        <Link href="/" className="text-black">
          <NavbarBrand>
            <p className="font-bold text-inherit">KMM</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="navbar-center2 hidden">
        <Link href="/" className="text-black">
          <NavbarBrand>
            <LazyLoadImage
              effect="blur"
              src={Logo}
              alt=""
              className="min-w-[45px] max-w-[45px] select-none mt-[-10px] h-auto mr-2"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <p className="font-bold mt-[-7px] ml-0 text-inherit">
              Kasthuri Medical Mission
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="navbar-content">
        <NavbarBrand className="ml-[-75px]">
          <LazyLoadImage
            effect="blur"
            src={Logo}
            alt=""
            className="min-w-[40px] select-none h-auto mr-2"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <p className="font-bold cursor-default ml-1 text-inherit">
            Kasthuri Medical Mission
          </p>
        </NavbarBrand>
        <div className="flex gap-[22px] justify-center mx-[100px]">
          <NavbarItem>
            <Link
              color="foreground"
              href="/"
              className={`${
                pathname === "/" ? "text-emerald-400 font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/About_Us"
              className={`${
                pathname === "/About_Us" ? "text-emerald-400 font-semibold" : ""
              }`}
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/Courses"
              aria-current="page"
              color="foreground"
              className={`${
                pathname === "/Courses" ? "text-emerald-400 font-semibold" : ""
              }`}
            >
              Our Courses
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/Contact_Us"
              className={`${
                pathname === "/Contact_Us"
                  ? "text-emerald-400 font-semibold"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/Founder"
              className={`${
                pathname === "/Founder" ? "text-emerald-400 font-semibold" : ""
              }`}
            >
              Our Founder
            </Link>
          </NavbarItem>
        </div>

        <NavbarContent justify="end" className="navbar-appointment">
          <NavbarItem>
            <Link
              href="/Book_Appointment"
              aria-current="page"
              className={`${
                pathname === "/Book_Appointment"
                  ? "text-emerald-400 font-semibold"
                  : "font-semibold"
              }`}
            >
              <Button
                as={Link}
                href="/Book_Appointment"
                variant="flat"
                className="text-emerald-400 rounded-md font-medium"
              >
                Book Appointment
              </Button>
            </Link>
            {/* <Link href="#About_Me">
                <Button className="rounded-md font-medium border-1 border-emerald-400 bg-emerald-400">
                  Dr.P.A.Subramanian
                </Button>
              </Link> 
            <Link href="/Contact_Us">
              <Button className="rounded-md font-medium bg-transparent border-1 border-emerald-400">
                Dr.P.A.Subramanian
              </Button>
            </Link> */}
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end" className="navbar-book">
        <NavbarItem>
          <Button
            as={Link}
            className="text-emerald-300 font-medium rounded-lg"
            href="/Book_Appointment"
            variant="flat"
          >
            Book
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="Menu_Items pt-[30px] max-h-[100vh] pl-[30px] mt-[-5px]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={`w-full font-medium ${
                pathname === item.path
                  ? "text-emerald-400 font-semibold"
                  : index === menuItems.length - 1
                  ? "text-black"
                  : "text-foreground"
              }`}
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <p className="Menu_Items_Quote text-[11px] text-gray-500 font-medium text-center bottom-10">
          *To cure sometimes, to relieve often, to comfort always.
        </p>
      </NavbarMenu>
    </Navbar>
  );
}
