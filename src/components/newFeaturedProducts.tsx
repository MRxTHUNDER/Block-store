import { FeatureSteps } from "./ui/feature-section.tsx"

const features = [
    {
        step: 'Geodnet',
        title: 'Geodnet MobileCM (Triple-band)',
        content: 'The GEODNET mission is to gather dense real-time geospatial data from the Earth and her Atmosphere using a new class of roof-mounted Space Weather stations.\n',
        image: 'https://ik.imagekit.io/thz3gkm2f/geodnet.avif?updatedAt=1746509222211',
        link: '/products/1'
    },
    {
        step: 'WeatherXM',
        title: 'WXM Weather Station WB1200',
        content: 'The WB1200 bundles product the WS1001 weather station with our open-source WXM D1 WiFi gateway. This unit monitors the environment, providing hyper-local weather data.',
        image: 'https://ik.imagekit.io/thz3gkm2f/weatherxm.jpg?updatedAt=1746509263167',
        link: '/products/3'
    },
    {
        step: 'Wingbits',
        title: 'Wingbits MGW310',
        content: 'This device tracks aircraft and satellites. Get rewarded with Wingbits and Geodnet tokens for installing this device.',
        image: 'https://wingbits.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-station.69825603.png&w=640&q=75',
        link: '/products/2'
    },
    {
        step: 'Rover',
        title: 'Rover LightCone',
        content: 'The Lightcone Max uses advanced lidar and navigation to collect 3D data, earning ROVR tokens through automatic uploads. Users control it via smartphones, but the device works independently. ',
        image: 'https://heliumdeploy.com/cdn/shop/files/rovrrr.webp?v=1729871054&width=600',
        link: '/products/5'
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