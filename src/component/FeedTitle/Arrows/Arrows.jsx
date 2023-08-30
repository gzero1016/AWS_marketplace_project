import React, { useContext, useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { VisibilityContext, slidingWindow, getItemsPos } from 'react-horizontal-scrolling-menu';

function Arrows({children, disabled, onClick}) {
    return (
        <button css={S.SScrollButton} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

export default Arrows;

export function LeftArrow() {
    const {
        items,
        visibleItems,
        getItemById,
        isFirstItemVisible,
        scrollToItem,
        visibleElements,
        initComplete
    } = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    useEffect(() => {
      // NOTE: detect if whole component visible
        if (visibleElements.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleElements]);

    // NOTE: for center items
    const prevGroupItems = slidingWindow(items.toItemsKeys(), visibleItems).prev();
    const { center } = getItemsPos(prevGroupItems);
    const scrollPrevCentered = () => 
        scrollToItem(getItemById(center), "smooth", "center");

    return (
        <Arrows disabled={disabled} onClick={scrollPrevCentered}>
            {"<"}
        </Arrows>
    );
}

export function RightArrow() {
    const {
        getItemById,
        isLastItemVisible,
        items,
        scrollToItem,
        visibleItems,
        visibleElements
    } = React.useContext(VisibilityContext);
    
    const [disabled, setDisabled] = React.useState(
        !visibleElements.length && isLastItemVisible
    );
    React.useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);
    
    // NOTE: for center items
    const nextGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    const scrollNextCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

    return (
        <Arrows disabled={disabled} onClick={scrollNextCentered}>
            {">"}
        </Arrows>
    );
}