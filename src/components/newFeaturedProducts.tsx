import { FeatureSteps } from "./ui/feature-section.tsx"

const features = [
    {
        step: 'Geodnet',
        title: 'Geodnet MobileCM (Triple-band)',
        content: 'The GEODNET mission is to gather dense real-time geospatial data from the Earth and her Atmosphere using a new class of roof-mounted Space Weather stations.\n',
        image: '../../assets/geodnet.avif',
        link: '/products/1'
    },
    {
        step: 'WeatherXM',
        title: 'WXM Weather Station WB1200',
        content: 'The WB1200 bundles product the WS1001 weather station with our open-source WXM D1 WiFi gateway. This unit monitors the environment, providing hyper-local weather data.',
        image: '../../assets/weatherxm.jpg',
        link: '/products/3'
    },
    {
        step: 'Wingbits',
        title: 'Wingbits MGW310',
        content: 'This device tracks aircraft and satellites. Get rewarded with Wingbits and Geodnet tokens for installing this device.',
        image: '../../assets/windbits.webp',
        link: '/products/2'
    },
]

export function FeatureStepsDemo() {
    return (
        <FeatureSteps
            features={features}
            title="Our Featured Products"
            autoPlayInterval={4000}
        />
    )
}