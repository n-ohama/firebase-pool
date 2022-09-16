import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { DetailPage } from "./pages/detail_page";
import { Home } from "./pages/home";
import { ListPage } from "./pages/list_page";

const links = [
  { path: "/", element: <Home /> },
  { path: "/list", element: <ListPage /> },
  { path: "/detail/:id", element: <DetailPage /> },
];

const Router = () => {
  return (
    <Routes>
      {links.map((item) => {
        return (
          <Route key={item.path} path={item.path} element={item.element} />
        );
      })}
    </Routes>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
};

export default App;
