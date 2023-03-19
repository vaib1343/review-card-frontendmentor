import React, { useState } from "react";
import styled from "styled-components";
import { Star } from "../../Assets/index";

const ratings = [1, 2, 3, 4, 5];

const Review = () => {
    const [state, setState] = useState(0);
    const handleClick = (number) => {
        setState(number);
    };
    return (
        <React.Fragment>
            <S.starContainer>
                <img src={Star} alt="star-icon" />
            </S.starContainer>
            <S.detail>
                <h4>How did we do?</h4>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </S.detail>
            <S.ratings>
                {ratings.map((number) => (
                    <S.ratingBtn
                        isSelected={number <= state}
                        onClick={(e) => handleClick(number)}
                    >
                        {number}
                    </S.ratingBtn>
                ))}
            </S.ratings>
            <S.submitButton>SUBMIT</S.submitButton>
        </React.Fragment>
    );
};
const S = {
    starContainer: styled.div`
        height: 4.8rem;
        width: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #262e38;
        border-radius: 50%;
    `,
    detail: styled.div`
        margin-top: 3rem;
        color: white;

        h4 {
            font-weight: 700;
            font-size: 2.8rem;
        }
        p {
            margin-top: 2rem;
            color: #969fad;
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 2.4rem;
        }
    `,
    ratings: styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2.4rem;
    `,

    ratingBtn: styled.button`
        height: 5.1rem;
        width: 5.1rem;
        border-radius: 50%;
        border: 0;
        outline: 0;
        cursor: pointer;
        background-color: ${(props) =>
            props.isSelected ? "#7C8798" : "#262e38"};
        color: ${(props) => (props.isSelected ? "white" : "#7c8798")};
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: #fc7614;
            color: white;
        }
    `,
    submitButton: styled.button`
        width: 100%;
        height: 4.5rem;
        margin-top: 3.2rem;
        border-radius: 2.2rem;
        background-color: #fc7614;
        color: white;
        outline: 0;
        border: 0;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        line-height: 1.9rem;
        letter-spacing: 2px;

        &:hover {
            background-color: white;
            color: #fc7614;
        }
    `,
};
export default Review;
