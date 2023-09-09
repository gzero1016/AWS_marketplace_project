import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation } from 'react-router-dom';
import { ScrollMenu, getItemsPos } from 'react-horizontal-scrolling-menu';
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from './Arrows/Arrows';
import Card from './Card/Card';
import { useNavigate } from 'react-router-dom';

function FeedTitle() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedButtonId = queryParams.get('selectedButtonId');

    const [selected, setSelected] = useState(selectedButtonId || localStorage.getItem('selectedButtonId') || "");

    useEffect(() => {
        setSelected(selectedButtonId || localStorage.getItem('selectedButtonId') || "");
    }, [selectedButtonId]);
    
    const handleItemClick = (itemId, path) => {
        return ({ getItemById, scrollToItem }) => {
            if (path) {
                navigate(path);
            }
            setSelected(itemId);
            localStorage.setItem('selectedButtonId', itemId);
            scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
        };
    };
    
    const buttons = [
        {
            id: 1,
            path: "/it",
            name: "IT"
        },
        {
            id: 2,
            path: "/cafe",
            name: "카페"
        },
        {
            id: 3,
            path: "/daily",
            name: "일상"
        },
        {
            id: 4,
            path: "/title",
            name: "낚시"
        },
        {
            id: 5,
            path: "/title",
            name: "소풍"
        },
        {
            id: 6,
            path: "/title",
            name: "숙박"
        },
        {
            id: 7,
            path: "/title",
            name: "양식"
        },
        {
            id: 8,
            path: "/title",
            name: "자연명소"
        },
        {
            id: 9,
            path: "/title",
            name: "일식"
        },
        {
            id: 10,
            path: "/title",
            name: "클래스∙소품"
        },
        {
            id: 11,
            path: "/title",
            name: "체험관광"
        },
        {
            id: 12,
            path: "/title",
            name: "피크닉"
        },
        {
            id: 13,
            path: "/title",
            name: "중식"
        },
        {
            id: 14,
            path: "/title",
            name: "캠핑"
        },
        {
            id: 15,
            path: "/title",
            name: "아시아/퓨전 음식"
        },
        {
            id: 16,
            path: "/title",
            name: "아이와 함께"
        },
        {
            id: 17,
            path: "/title",
            name: "뷔페/레스토랑"
        },
        {
            id: 18,
            path: "/title",
            name: "역사유적"
        },
        {
            id: 19,
            path: "/title",
            name: "레저∙액티비티"
        },
    ];

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
                        {buttons.map((button) => (
                            <Card
                                key={button.id}
                                itemId={button.id}
                                selected={selected}
                                onClick={handleItemClick(button.id, button.path)}
                            >
                                {button.name}
                            </Card>
                        ))}
                    </ScrollMenu>
                </div>
            </div>
        </div>
    );
}

export default FeedTitle;