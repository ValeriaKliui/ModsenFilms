import { FooterStyled, FooterInfo, Text } from './styled';

export const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <FooterInfo>
                <Text>TermsPrivacyPolicy & Safety </Text>
                <Text>How YouTube works</Text>
                <Text>Test new features</Text>
            </FooterInfo>
            <FooterInfo>
                <Text>About Press Copyright </Text>
                <Text>Contact us Creators</Text>
                <Text>Advertise Developers</Text>
            </FooterInfo>
        </FooterStyled>
    );
};
