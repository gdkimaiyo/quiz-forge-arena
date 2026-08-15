import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Pages
import Home from "./pages/home";
import FAQView from "./pages/faq";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./shared/nav/NavBar";
import AboutView from "./pages/about";

function Layout() {
  return (
    <Flex direction="column" minH="100vh" bg="var(--bg-subtle)">
      {/* Header / Navbar */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        width="100%"
        zIndex="sticky"
        px={{ base: "18px", md: "72px" }}
        pt="32px"
      >
        <NavBar />
      </Box>

      {/* Main Content Area */}
      <Box
        as="main"
        flex="1"
        w="100%"
        pt={{ base: "24px", md: "44px" }} // Prevents fixed header from overlapping content
      >
        <Outlet />
      </Box>

      {/* Footer */}
    </Flex>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutView />} />
          <Route path="faqs" element={<FAQView />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
