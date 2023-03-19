import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import ThankYou from "./components/thank-you/thank-you";
import Review from "./components/review/review";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <S.container>
                <Routes>
                    <Route path="/" index element={<Review />} />
                    <Route path="/submit" element={<ThankYou />} />
                </Routes>
            </S.container>
        </div>
    );
}

const S = {
    container: styled.section`
        max-width: 41.2rem;
        padding: 3.2rem;
        margin: auto;
        background: radial-gradient(
            98.96% 98.96% at 50% 0%,
            #232a34 0%,
            #181e27 100%
        );
        border-radius: 3rem;
    `,
};
export default App;
