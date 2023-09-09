import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import Bottom from '../../component/Bottom/Bottom';
import SaveContainer from '../../component/SaveContainer/SaveContainer';

function SavePage(props) {
    return (
        <HeaderLayout>
        <SaveContainer />
        <Bottom />
        </HeaderLayout>
    );
}

export default SavePage;