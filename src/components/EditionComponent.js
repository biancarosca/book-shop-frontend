import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from "react-redux";
import allActions from "../actions/index";

const EditionComponent = ({image,edition}) => {
    const dispatch = useDispatch();
    const activeEdition = useSelector((store) => store.activeEdition);
    return(
    <StyIconContainer style = {Object.keys(activeEdition)[0] === edition ? {backgroundColor: '#18D47C', boxShadow: '3px 3px #514c4c'} : {}}onClick={() =>dispatch(allActions.bookEdition(edition))}>
        <StyledIcons src={image} alt={edition} />
		<p>{edition.charAt(0).toUpperCase() + edition.slice(1)}</p>
    </StyIconContainer>
    );
}

const StyIconContainer = styled.div`
	width: 80px;
	height: fit-content;
	background-color: #b8ddcb;
	margin-right: 1rem;
	padding: 0.5rem;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 5px 5px #888888;
	p {
		color: black;
		font-size: 0.8rem;
	}
	&:hover {
		background-color: #8dd6b1;
		cursor: pointer;
	}
`;

const StyledIcons = styled.img`
	width: 50px;
	height: auto;
`;

export default EditionComponent;