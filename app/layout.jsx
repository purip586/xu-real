import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// import Nav from "@components/Nav";

export const metadata = {
  title: "XU Realty",
  description: "Discover Japan`s Real Property",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <ChakraProvider>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
