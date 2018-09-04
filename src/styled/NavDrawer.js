import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Clear from 'material-ui/svg-icons/content/clear';

const StayVisible = styled.div`
        position:absolute;
        margin-left:${(props) => (props.open) ? `${props.width}px`:'none'};
        transition:margin .2s;
    `;

export const NavToggleButton = (props) => {
    return(
        <StayVisible {...props}>
            <FloatingActionButton onClick={props.toggle}>
                {(props.open)?<Clear/>:<Menu/>}
            </FloatingActionButton>
        </StayVisible>

    )
};