import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Footer text='props passada para o componente'/>
        </React.Fragment>
    )
}