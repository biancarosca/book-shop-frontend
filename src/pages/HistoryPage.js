import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { StyGlobalHeader, StyScrollBar } from '../components/GlobalStyles';

const HistoryPage = ({locationChanged,variants}) => {
    const navDisplay = useSelector(store => store.navToggle);
    return(
        <StyledWrapper 
        initial={navDisplay.display ? (!locationChanged ? "open0" : ''): "close0"}
        animate={navDisplay.display ? (!locationChanged ? "open" : '') : "close" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            <HistoryHeader>
                <h1>History</h1>
            </HistoryHeader>
            <StyEmptyHis>You haven't bought any books.</StyEmptyHis>
        </StyledWrapper>
    );
}

const StyEmptyHis = styled.div`
    margin: 2rem;
    font-size: 1rem;
    color: #2B2D30;
    border-left: 4px solid #2B2D30;
    font-style: italic;
    padding-left: 1rem;
`


const HistoryHeader = styled(StyGlobalHeader)`
    @media (max-width: 715px){
        height: 8vh;
        h1{
        margin: 0 2rem;
        }
    }
`

const StyledWrapper = motion.custom(styled(StyScrollBar)`
    width: 100%;
    min-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
`)


export default HistoryPage;