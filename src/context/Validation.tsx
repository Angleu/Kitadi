import { Warning,CheckCircle } from "phosphor-react-native";
import React, { createContext, useState } from "react";
import Modal from "react-native-modal/dist/modal";
import Button from "../components/Button";
import { Container, DescriptionError, TitleError } from "../components/Modal/style";

import LottieView from 'lottie-react-native';
import { View } from "react-native";


interface IValidationContext {
    isLoad: boolean;
    setIsLoad: Function;
    isVisible: boolean;
    setIsVisible: Function;
    information: string;
    setInformation: Function;
    titleError: string;
    setTitleError: Function;

}

const ValidationContext = createContext({} as IValidationContext);

export const ValidationProvider: React.FC = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [information, setInformation] = useState('');
    const [titleError, setTitleError] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    return (
        <ValidationContext.Provider
            value={{ isVisible, setIsVisible, information, setInformation, titleError, setTitleError, isLoad, setIsLoad }}>

            {isLoad ? (<Modal isVisible={isVisible} style={{ borderRadius: 10 }} animationOutTiming={700} backdropColor="#545454">
                <Container>
                    <LottieView source={require('../animation/101524-loading-circle.json')} autoPlay loop
                        style={{
                            width: 190
                        }}
                        speed={1.3}
                    />
                    <TitleError>Carrengando as informações</TitleError>
                </Container>
            </Modal >) : <Modal isVisible={isVisible} style={{ borderRadius: 10 }} animationOutTiming={700} backdropColor="#545454">
                <Container>
                    <Warning style={{display:(titleError==='Éxito')?'none':'flex'}} size={48} color='#1D5C63' />
                    <CheckCircle style={{display:(titleError==='Éxito')?'flex':'none'}} size={48} color='#1D5C63' />
                    <TitleError>{titleError}</TitleError>
                    <DescriptionError>{information}</DescriptionError>
                    <Button outline={false} text="Fechar" onPress={() => setIsVisible(false)} />
                </Container>
            </Modal >}

            {children}
        </ValidationContext.Provider>
    )
}

export default ValidationContext;


