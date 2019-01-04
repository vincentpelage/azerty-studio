import React from 'react';
import styled from "styled-components";


const WrapperInput = styled.div`
    position: relative;
    flex: ${props => props.flex ? props.flex : null};
    margin-right: 1rem;
    margin-top: 3rem;
    &::before {
        content: " ";
        display: block;
        top: ${ props => props.isFocus ? "-6px" : "-3px"};
        left: 0;
        width: 100%;
        height: 2px;
        position: absolute;
        background: ${ props => props.isFocus ? "hsla(0,0%,96%,1)" : "hsla(0,0%,96%,.5)"};
        transition: width .45s cubic-bezier(.19,1,.22,1) 0ms,top .35s cubic-bezier(.19,1,.22,1),bottom .35s cubic-bezier(.19,1,.22,1);
    }
    &::after {
        content: " ";
        display: block;
        bottom: ${ props => props.isFocus ? "-6px" : "-3px"};
        left: 0;
        width: 100%;
        height: 2px;
        position: absolute;
        background: ${ props => props.isFocus ? "hsla(0,0%,96%,1)" : "hsla(0,0%,96%,.5)"};
        transition: width .45s cubic-bezier(.19,1,.22,1) 0ms,top .35s cubic-bezier(.19,1,.22,1),bottom .35s cubic-bezier(.19,1,.22,1);
    }
    
`;

const InputStyled = styled.input`
    margin: 0;
    width: 100%;
    border: none;
    padding: 0 .9375rem;
    height: 40px;
    letter-spacing: 1px;
    font-size: 1.25rem;
    background: hsla(0,0%,96%,1);
`;

const TextareaStyled = styled.textarea`
    margin: 0;
    width: 100%;
    height: ${ props => props.isFocus ? "100px" : "40px"};
    border: none;
    padding: 0 .9375rem;
    letter-spacing: 1px;
    font-size: 1.25rem;
    background: hsla(0,0%,96%,1);
`;

const Placeholder = styled.div`
    text-transform: uppercase;
    top: ${ props => props.isFocus ? "-25px" : "11px"};
    position: absolute;
    left: .9375rem;
    transition: all .5s cubic-bezier(.19,1,.22,1) 0ms,color .3s cubic-bezier(.8,0,.2,1) 0ms;
    -ms-transform-origin: left center;
    transform-origin: left center;
    pointer-events: none;
    font-family: 'Aqua';
    font-size: ${ props => props.isFocus ? ".8rem" : ".9375rem"};
`;


class Input extends React.Component {
    state = {
        isFocus: false
    }

    onFocus = () => {
        this.setState({ isFocus: true})
    }

    onBlur= () => {
        this.setState({ isFocus: false})
    }

    render() {
        const { placeholder, flex } = this.props;
        const isTextarea = this.props.type === "textarea"

        console.log(isTextarea)
        return (
            <WrapperInput isFocus={this.state.isFocus} flex={flex}>
                <Placeholder isFocus={this.state.isFocus}>{placeholder}</Placeholder>
                {
                    isTextarea ? <TextareaStyled onFocus={this.onFocus} onBlur={this.onBlur} isFocus={this.state.isFocus}/> : <InputStyled onFocus={this.onFocus} onBlur={this.onBlur} />
                }
                
            </WrapperInput>
        );
    }
}

export default Input;