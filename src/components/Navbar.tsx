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

export default function Nav() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About_Us" },
    { name: "Our Courses", path: "/Courses" },
    { name: "Contact Us", path: "/Contact_Us" },
    { name: "Book Appointment", path: "/Book_Appointment" },
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

      <NavbarContent className="navbar-content">
        <NavbarBrand>
          <img
            src={Logo}
            alt=""
            className="w-[45px] select-none h-auto mr-2"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <p className="font-bold cursor-default text-inherit">
            Kasthuri Medical Mission
          </p>
        </NavbarBrand>
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
              pathname === "/Contact_Us" ? "text-emerald-400 font-semibold" : ""
            }`}
          >
            Contact Us
          </Link>
        </NavbarItem>

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
                className="text-emerald-400 font-medium"
              >
                Book Appointment
              </Button>
            </Link>
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

      <NavbarMenu className="pt-[30px] h-full pl-[30px] mt-[-5px]">
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
        <p className="text-[11px] text-center mt-[115%]">
          *To cure sometimes, to relieve often, to comfort always.
        </p>
      </NavbarMenu>
    </Navbar>
  );
}
