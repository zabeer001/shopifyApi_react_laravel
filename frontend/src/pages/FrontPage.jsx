import {TextContainer, Text} from '@shopify/polaris';

const FrontPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <TextContainer>
                <Text variant="headingMd" as="h2">
                    Install the Shopify POS App
                </Text>
                <p>
                    Shopify POS is the easiest way to sell your products in person.
                    Available for iPad, iPhone, and Android.
                </p>
            </TextContainer>
        </div>
    );
};

export default FrontPage;
