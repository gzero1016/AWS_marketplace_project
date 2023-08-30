import React, { useContext, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Link, useLocation } from 'react-router-dom';
import { ScrollMenu, getItemsPos, VisibilityContext } from 'react-horizontal-scrolling-menu';
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from './Arrows/Arrows';
import Card from './Card/Card';


function FeedTitle({ name }) {
    const [selectedButtonName, setSelectedButtonName] = useState('');
    const location = useLocation();
    const scrollContainerRef = useRef(null);

    const [ selected, setSelected ] = useState("");
    

    const handleItemClick = (itemId) => ({
        getItemById,
        scrollToItem
    }) => {
        setSelected(selected !== itemId ? itemId : "");
        scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
    };



    const buttons = [
        'IT',
        '일상',
        '카페',
        '숙박',
        '양식',
        '일식',
        '문화예술',
        '테마파크',
        '낚시',
        '드라이브',
        '중식',
        '아이와 함께',
        '일상',
        '등산', 
        '뷔페/레스토랑',
        '물놀이'
    ];

    useEffect(() => {
        const path = location.pathname;
        const buttonNames = { '/it': 'IT', '/cafe': '카페', '/daily': '일상' };
        setSelectedButtonName(buttonNames[path]);
    }, [location.pathname]);

    const handleButtonClick = (buttonName, index) => {
        setSelectedButtonName(buttonName);
        handleScroll(index * 120);
        const buttonRoutes = { 'IT': '/it', '카페': '/cafe', '일상': '/daily' };
        if (buttonRoutes[buttonName]) {
            window.location.href = buttonRoutes[buttonName];
        }
    };

    const handleScroll = (scrollAmount) => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollLeft = scrollAmount;
        }
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SScrollButtonContainer}>
                <div css={S.SButtonLayout}>
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        onMouseUp={({
                            getItemById,
                            scrollToItem,
                            visibleItems
                        }) => () => {
                            const { center } = getItemsPos(visibleItems);
                            scrollToItem(getItemById(center), "smooth", "center");
                        }}
                        options={{ throttle: 0 }}
                    >
                        {buttons.map((buttonName, index) => (
                            <Card
                                key={index}
                                itemId={index}
                                selected={selected}
                                onClick={handleItemClick(index)}
                            >
                                {buttonName}
                            </Card>
                        ))}
                    </ScrollMenu>
                </div>
            </div>
        </div>
    );
}

export default FeedTitle;