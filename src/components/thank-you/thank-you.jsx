import React from "react";
import styled from "styled-components";
import { thankYou } from "../../Assets/index";

const ThankYou = () => {
    return (
        <React.Fragment>
            <S.box>
                <img src={thankYou} alt="thank you image" />
                <S.details>
                    <p>You selected 4 out of 5</p>
                    <h1>Thank you!</h1>
                    <h5>
                        We appreciate you taking the time to give a rating. If
                        you ever need more support, don’t hesitate to get in
                        touch!
                    </h5>
                </S.details>
            </S.box>
        </React.Fragment>
    );
};

const S = {
    box: styled.figure`
        text-align: center;
    `,
    details: styled.figcaption`
        p {
            width: fit-content;
            padding: 0.4rem 2rem;
            margin: auto;
            margin-top: 3.2rem;
            border-radius: 2rem;
            background-color: #262e38;
            color: #fc7614;
            font-weight: 400;
            font-size: 1.5rem;
        }

        h1 {
            color: white;
            margin-top: 3.2rem;
            line-height: 3.5rem;
            font-size: 2.8rem;
        }

        h5 {
            font-style: normal;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2.4rem;
            text-align: center;
            color: #969fad;
            margin-top: .8rem;
        }
    `,
};

export default ThankYou;
